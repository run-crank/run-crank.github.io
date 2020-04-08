---
section: "intro"
navOrder: 3
path: "/intro/scenarios"
title: "Scenarios"
summary: "Learn how to author BDD test scenarios for your business technology."
---

This page documents how to author Crank Scenario files.

---

## Getting Started

Although you can author and run Crank Scenario files in any text editor and
command line, for the best experience, we recommend [Visual Studio Code][vscode]
with the [Crank Scenario Language extension][vscode-extension] installed.

Skip to the [VS Code section](#vs-code-extension) to see some of the benefits.

### Installing Cogs

Before you author your scenario, you'll want to install Cogs corresponding to
the systems you are testing. At a minimum, you'll likely want to install the
[Web Cog][web-cog] by running:

```shell-session
crank cog:install automatoninc/web
```

<a class="btn btn-secondary" role="button" href="/discover-cogs">Discover More Cogs Here</a>

Once you've installed some Cogs, you can get a list of all available steps on
your machine by running the following:

```shell-session
$ crank registry:steps
```

Run `crank registry:steps --help` for more information.

---

## Basic Structure

Scenarios are just yaml files that are named a certain way and conform to a
specificiation. All Scenario file names should end with `.crank.yml` and must
include these three properties:

- **scenario**: A string naming the scenario. This is printed out at the top of
  test runs for your convenience.
- **description**: A string documenting the intention behind the scenario. This
  property isn't used anywhere currently, but it's sure useful for your future
  self.
- **steps**: A list of step objects, each containing, at a minimum, a **step**
  property.

```yaml
scenario: Contact Us Form Creates SalesForce Leads
description: >
  As a website visitor,
  When I fill out the Contact Us form
  Then a Lead record should be created for me in Salesforce

steps:
- step: Given I navigate to https://www.example.com/contact
- step: When I fill out input[name="EmailAddress"] with test@e.com
- step: And I fill out input[name="FirstName"] with Test
- step: And I submit the form by clicking button[type="submit"]
- step: Then the FirstName field on Salesforce Lead test@e.com should be Test
- step: Finally, delete the test@e.com Salesforce Lead
```

---

## Tokens

Crank scenarios can include tokens (prefixed/affixed with `{{` and `}}` as a
way to improve readability, maintainability, and portability of test scenarios.

```yaml
tokens:
  testEmail: atommy@example.com

steps:
- step: The FirstName field on Salesforce Lead {{testEmail}} should be Test
- step: Delete the {{testEmail}} Salesforce Lead
```

You can also override tokens at run-time:

```shell-session
$ crank run scenario.yml --token "testEmail=zjimmy@example.com"
```

---

## Non-Scalar Data

Sometimes, a test scenario requires data that cannot easily or concisely be
expressed in a sentence: for example, setting up a fixture for an object in a
SaaS platform (e.g. a Salesforce Lead).

In situations like this, you can specify these complex objects on a **data**
property associated with a given step.

```yaml
tokens:
  test:
    email: atommy@example.com
    first: Atoma
    last: Tommy

steps:
- step: Given I create a Salesforce Lead
  data:
    lead:
      Email: '{{test.email}}'
      FirstName: '{{test.first}}'
      LastName: '{{test.last}}'
- step: Then the FirstName field on Salesforce Lead {{test.email}} should be {{test.first}}
```

---

## Retries

It's common for systems tested by Crank to be integrated in asynchronous ways.
For example, object sync time between a CRM like Salesforce and a MAP like
Marketo may be non-deterministic (but finite), depending on the exact
configuration of each system.

By default, `crank run` will execute every step in the `steps` list in
sequence, one immediately after another; if a step's outcome is not a pass,
no retry is attempted.

In order to account for asynchronous system integrations, you can use the
`failAfter` property on a given step. When present, Crank will re-attempt step
execution after any non-passing outcome for as many seconds as is configured on
this `failAfter` property.

```yaml
steps:
- step: Given I create or update a Marketo Lead
  data:
    lead:
      email: test@e.com
      firstName: Example
- step: Then the FirstName field on Salesforce Lead test@e.com should be Example
  failAfter: 90 # Will retry this step for up to 90s if it does not pass
```

---

## Explicit Waits

It's also common to configure explicit delays in workflows in the systems that
Crank is used to test (e.g. waiting a specific amount of time before sending a
communication to a user).

In these situations, you can use the `waitFor` property on any step to pause
step execution for a certain number of seconds before proceeding.

```yaml
steps:
- waitFor: 60 # Will wait 60s before executing this step
  step: Then the FirstName field on Salesforce Lead test@e.com should be Example
```

Note that it's possible `waitFor` can be used in combination with `failAfter`.
If both are used, a step will wait until after the `waitFor` duration elapses,
then execute the step; if it does not pass, it will retry the step for up to
the `failAfter` duration, using the initial step execution as the starting time
for comparison.

---

## Dynamic Tokens

After each step, Cogs may also expose contextual details dynamically as tokens.
Use these dynamic tokens in Scenarios that rely on details that could only be
known at run-time, for instance...

**Test fixtures with run-time interdependencies**
```yaml
steps:
- step: Given I create a Salesforce Account
  data: {account: {Name: 'Fixture Account'}}
- step: And I create a Salesforce Contact assigned to the above Account
  data:
    contact:
      Email: 'atommy@example.com'
      LastName: Tommy
      # Assign using the dynamic token supplied by the above step.
      AccountId: '{{salesforce.account.Id}}'
```

**Assertions using run-time data**
```yaml
steps:
- step: When I navigate to https://example.com
- step: Then Google Analytics should have tracked a pageview for tracking ID UA-98765-43
- step: When I click the page element button.cta
- step: Then Google Analytics should have tracked an event with category cta and action click for tracking ID UA-98765-43
  data:
    withParameters:
      # CD10 should match the GA Client ID supplied by the pageview check.
      cd10: '{{web.googleAnalyticsRequest.cid}}'
```

Use the [VS Code Extension](#vs-code-extension) for intellisense and hints that
expose what dynamic tokens are exposed by each step.

---

## Config Over BDD

Under the hood, Crank does the work to translate your scenario file's step
text into something more machine-readable (a series of cogs, stepIds, and data
objects).

If for some reason you want to sacrifice human-readability for performance, you
can also define your steps more purely as configuration:

```yaml
steps:
- cog: automatoninc/web
  stepId: NavigateToPage
  data:
    webPageUrl: https://example.com/contact
- cog: automatoninc/web
  stepId: EnterValueIntoField
  data:
    domQuerySelector: input[name="EmailAddress"]
    value: test@example.com
```

Notice here, each step object, instead of containing a **step** property that
matches a known step expression, contains the three aforementioned properties:

- **cog**: The name of the Cog that provides the step (e.g. what you used to
  `crank cog:install` the Cog in the first place).
- **stepId**: A unique ID for the step provided by the Cog.
- **data**: Similar to the above, a map/dictionary/object encoding all of the
  data that the step expects.

You can find the information you need for each step in this format by running
the following command:

```shell-session
$ crank registry:steps --columns="cog,id,expected fields"
```

---

## VS Code Extension

The [Crank Scenario Language extension][vscode-extension] simplifies the
Scenario authoring process by embuing the editor with knowledge of...

- **a)** The scenario format (e.g. available and required yaml keys),
- **b)** Deep knowledge of the Cogs installed on the current system.

This knowledge is used to power IntelliSense features like...

#### Auto-completion of steps
<img src="/img/intro/step-intellisense.gif" alt="Step Auto-Complete" loading="lazy" /><br />

#### Auto-completion of step data attributes
<img src="/img/intro/data-intellisense.gif" alt="Data Auto-Complete" loading="lazy" /><br />

#### Auto-completion of dynamic tokens
<img src="/img/intro/dynamic-token-intellisense.gif" alt="Dynamic Auto-Complete" loading="lazy" /><br />

#### Contextual links for running scenarios
<img src="/img/intro/run-scenario.gif" alt="Run Scenario" loading="lazy" /><br />

[vscode]: https://code.visualstudio.com/download
[vscode-extension]: https://marketplace.visualstudio.com/items?itemName=run-crank.crank-scenario-language
[web-cog]: https://github.com/run-crank/cog-web

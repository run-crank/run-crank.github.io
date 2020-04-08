---
section: "intro"
navOrder: 1
path: "/intro"
title: "Introduction"
summary: "An introductory guide to Crank, the open BDD test automation framework for business technology."
---

Crank is a BDD test automation framework for validating workflows, apps, and
experiences that are at least partially defined, configured, or built in a SaaS
platform.

It's never been easier to create complex customer experiences and data flows
without having to write a single line of code. Crank aims to make it just as
easy to validate that those experiences actually work.

Put succinctly:

- **Crank** is a CLI tool for running test scenarios and Cogs.
- **Cogs** are a standard way to encapsulate actions and validations for SaaS
  platforms, exposing them as composable steps.
- **Scenarios** are a way to describe the order and substance of steps to be
  executed across any number of Cogs.

---

## Getting Set Up

**Open up your terminal and install Crank.**

```shell-session
$ curl -s https://get.crank.run/install.sh | sh
$ crank -v
crank/x.y.z darwin-x64 node-vA.B.C

$ docker -v
Docker version j.k.l, build 123xyz
```

Validate that it was installed successfully by running `crank -v`, and make
sure Docker is installed by running `docker -v`.

Further details on installation can be found on the [installation][install]
page.

**Install a couple of Cogs**

```shell-session
$ crank cog:install automatoninc/web
$ crank registry:steps
```

A Cog is just a Docker container; the above command installs a container
encapsulating steps for performing basic actions in a web browser. You can
validate that the Cog was installed correctly by running `crank registry:steps`.
You should see output like the following:

```shell-session
System     Expression                                               
A Browser  fill out (?<domQuerySelector>.+) with (?<value>.+)       
A Browser  navigate to (?<webPageUrl>.+)                            
A Browser  submit the form by clicking (?<domQuerySelector>.+)  
```

Looking for more Cogs?

<a class="btn btn-secondary" role="button" href="/discover-cogs">Discover More Cogs Here</a>

---

## Writing Your First Scenario

A Scenario file is just a `yaml` file adhering to a specific format. If you've
done BDD before, it should look pretty familiar.

Copy this scenario and save it somewhere on your computer, naming it something
like `my-first-scenario.crank.yml`:

```yml
scenario: Your First Scenario
description: This scenario demonstrates the basics of Crank scenario files.

steps:
- step: Navigate to https://www.example.com/contact
- step: Fill out input[name="EmailAddress"] with test@example.com
- step: Submit the form by clicking button[type="submit"]
```
**Metadata**

At a minimum, you'll want to define a name for your scenario on the
**scenario** key. You should also provide a **description**, documenting the
intention behind your scenario.

**Steps**

Next, you'll see **steps**, which is a list of steps to execute. You'll notice
the **step** text looks quite familiar: each string matches a step expression
from the list you printed to your console earlier when you ran
`crank registry:steps`.

As you install more Cogs, that command will return more steps for you to use in
your scenario files. Find more info by running

```shell-session
$ crank registry:steps --help
```

---

## Running Your Scenario

Execute the scenario file you saved to your computer using the `crank run`
command.

```shell-session
$ crank run path/to/your/scenario.yml

Your First Scenario

  ✓ Navigate to https://www.example.com/contact
  ✘ Fill out input[name="EmailAddress"] with test@example.com

    There was a problem filling out input[name="EmailAddress"] with
    test@example.com: Error: ...

  ✀  Submit the form by clicking button[type="submit"]


1 passing (1.20s)
1 failing
1 skipped
```

...Naturally, since there is no Contact Us form on `example.com`, your first
scenario will fail. But the point wasn't to get a passing scenario, it was to
understand how to use Crank!

<a class="btn btn-secondary mb-2" role="button" href="/intro/scenarios">Learn More About Scenarios</a>
<a class="btn btn-outline-secondary mb-2" role="button" href="/discover-cogs">Find Cogs for Your Stack</a>
<a class="btn btn-outline-secondary mb-2" role="button" href="https://crank.automatoninc.com">Build a Cog</a>

[install]: /intro/install
[scenarios-in-detail]: /intro/scenarios
[discover-more-cogs]: /discover-cogs
[build-a-cog]: https://crank.automatoninc.com

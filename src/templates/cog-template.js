import React from "react"
import { graphql, Link } from "gatsby"
import Prism from 'prismjs';
import Icon from '../components/icon';
import GitHub from '../components/icon/github.icon';
import Layout from '../components/layout'

import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-shell-session';
import '../../node_modules/prismjs/themes/prism-tomorrow.css';
import './_doc-template.scss';

export default class Template extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.cog = props.data.cog;
    this.state.cogs = props.data.cogs;
    this.state.cogExtras = props.pageContext.extras;

    if (typeof window !== `undefined` && window.location.hash && window.location.hash.startsWith('#step:')) {
      this.state.stepFilter = window.location.hash.replace('#step:', '');
    } else {
      this.state.stepFilter = "";
    }

    this.handleStepFilterChange = this.handleStepFilterChange.bind(this);
  }

  componentDidMount() {
    if (typeof window !== `undefined` && window.location.hash && window.location.hash.startsWith('#step:')) {
      try {
        const elem = document.getElementById('steps');
        elem.scrollIntoView({behavior: 'smooth'});
      } catch (e) {}
    }
    Prism.highlightAll();
  }

  render() {
    const cog = this.state.cog;
    const cogx = this.state.cogExtras
    return (
      <Layout subTitle={`${cogx.lpLabel || cogx.label} QA Automation`} activeTrail='/discover-cogs'><main>
        <div className="cog-hero jumbotron jumbotron-fluid text-center mb-5" id="top">
          <div className="container">
            <h1 className="display-4">{cogx.lpLabel || cogx.label} QA Automation</h1>
            <h3 className="lead">Run {cogx.lpLabel || cogx.label} test scenarios using the Crank BDD framework.</h3>
            <img src={this.state.cogExtras.img} alt={cogx.label + ' Logo'} style={{maxHeight: '75px'}} />
          </div>
        </div>
        {cogx.lpDescription ? (<section className="container">
          <div className="card bg-light mb-5">
            <div className="card-body">
              <p className="card-text lead">{cogx.lpDescription}</p>
            </div>
          </div>
        </section>) : ''}
        {cogx.useCases.length ? (<section className="container mb-5">
          <div className="row">
            {cogx.useCases.map((useCase, i) => (
              <div className="col-12 col-lg-6 mb-4 mb-lg-0" key={`UseCase__${i}`}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">{useCase.title}</h5>
                    <p className="card-text small">{useCase.description}</p>
                    <pre className="language-yaml" style={{fontSize: '0.6em'}}>
                      <code className="language-yaml">
                        {useCase.steps}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>) : ''}
        {cogx.useCases.length || cogx.lpDescription ? (<section className="mb-5 p-5 bg-light" id="what-is-crank">
          <div className="container">
            <h2>What is Crank?</h2>
            <div className="card-body">
              <p className="card-text">Crank is a BDD test automation framework for SaaS-based business technology.</p>
              <Link to="/intro" className="btn btn-secondary mr-2 mb-2 mb-md-0">Developer Getting Started</Link>
              <a href={`https://app.automatoninc.com/signup?utm_medium=referral&utm_source=crank&utm_campaign=${encodeURIComponent(`cogs/${cog.name}`)}`} className="btn btn-outline-secondary" target="_blank">Hosted QA Automation for Business Users</a>
            </div>
          </div>
        </section>) : ''}
        <section className="container small mb-5" id="installation">
          <h2>Installing{cog.authFieldsList.length ? ' and Authenticating' : ''} this Cog</h2>
          <p>
            Once you've successfully <Link to="/intro/install">installed Crank</Link> you
            can install this Cog by running the following:
          </p>
          <pre className="language-shell-session mb-3" style={{fontSize: '0.8em'}}>
            <code className="language-shell-session">
              $ crank cog:install {cog.name}
            </code>
          </pre>
          {cog.authFieldsList.length ? (
            <div className="table-responsive">
              <p>
                You will be asked for the following authentication details on installation.
                To avoid prompts in a CI/CD context, you can provide the same details as environment
                variables.
              </p>
              <table className="table table-striped small">
                <caption className="h5" style={{captionSide: 'top'}}>Expected Authentication Details</caption>
                <thead>
                  <tr className="d-flex">
                    <th scope="col" className="col-md-2">Field</th>
                    <th scope="col" className="col-md-5">Install-Time Environment Variable</th>
                    <th scope="col" className="col-md-5">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {cog.authFieldsList.map((field, i) => (
                    <tr className="d-flex" key={`AuthField__${field.key}`}>
                      <th className="col-md-2" scope="row"><code>{field.key} {field.optionality === 1 ? (<sup title="Required Input" className="text-danger">*</sup>) : ''}</code></th>
                      <td className="col-md-5"><code>{this.getFieldEnvironmentVariable(field)}</code></td>
                      <td className="col-md-5">{field.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>You can always re-authenticate by running the following command.</p>
              <pre className="language-shell-session mb-3" style={{fontSize: '0.8em'}}>
                <code className="language-shell-session">
                  $ crank cog:auth {cog.name}
                </code>
              </pre>
              {cog.authHelpUrl ? (
                <a href={cog.authHelpUrl} target="_blank" className="btn btn-secondary">Further Auth Details Here</a>
              ) : ''}
              <hr className="my-5" />
            </div>
          ) : (<p>That's it!  No further installation steps.</p>)}
        </section>
        <section className="bg-light py-3 mb-3 sticky-top">
          <div className="container">
            <div className="row px-3">
              <h2 className="col-12 col-md-8 pl-0 mb-0 h3">{cogx.lpLabel || cogx.label} Test Steps</h2>
              <select value={this.state.stepFilter} className="col-12 col-md-4 form-control small mt-2 mt-md-0" onChange={this.handleStepFilterChange}>
                <option value="">Show All Steps</option>
                {cog.stepDefinitionsList.map((step, i) => (
                  <option value={step.stepId} key={`StepOption__${step.stepId}`}>{step.name}</option>
                ))}
              </select>
            </div>
          </div>
        </section>
        <a id="steps" className="invisible"></a>
        <section className="container small mb-5 mt-5">
          {cog.stepDefinitionsList.filter(s => this.state.stepFilter === s.stepId || this.state.stepFilter === '').map((step, i) => (
            <div className="my-4" id={step.stepId} key={`Step__${step.stepId}`}>
              <h3 className="h4">{step.name} <sup className={`badge badge-pill badge-${step.type === 0 ? 'success' : 'warning'}`} style={{fontSize: '0.5em'}}>{step.type === 0 ? 'Action' : 'Assertion'}</sup></h3>
              {step.help ? (<p>{step.help}</p>) : ''}
              <p>Use this step in a Scenario file like this:</p>
              <pre className="language-yaml" style={{fontSize: '0.8em'}}>
                <code className="language-yaml">
                  - step: {this.getStepExpression(step)}{this.getStepData(step)}
                </code>
              </pre>
              <div className="table-responsive small">
                <table className="table table-striped">
                  <caption className="h5" style={{captionSide: 'top'}}>Expected Step Input</caption>
                  <thead>
                    <tr className="d-flex">
                      <th scope="col" className="col-md-3">ID</th>
                      <th scope="col" className="col-md-2">Type</th>
                      <th scope="col" className="col-md-7">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {step.expectedFieldsList.map((field, i) => (
                      <tr className="d-flex" key={`StepField__${step.stepId}__${field.key}`}>
                        <th className="col-md-3" scope="row"><code>{field.key} {field.optionality === 1 ? (<sup title="Required Input" className="text-danger">*</sup>) : ''}</code></th>
                        <td className="col-md-2">{this.getFieldType(field)}</td>
                        <td className="col-md-7">{field.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {step.expectedRecordsList.filter(r => [0, 1].includes(r.type)).length ? (<div className="table-responsive small">
                <table className="table table-striped">
                  <caption className="h5" style={{captionSide: 'top'}}>Exposed Dynamic Tokens</caption>
                  <thead>
                    <tr className="d-flex">
                      <th scope="col" className="col-md-4">Token</th>
                      <th scope="col" className="col-md-2">Type</th>
                      <th scope="col" className="col-md-6">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {step.expectedRecordsList.filter(r => [0, 1].includes(r.type)).map((record, i) => record.guaranteedFieldsList.map((field, j) => (
                      <tr className="d-flex" key={`RecordField__${record.id}__${field.key}`}>
                        <th className="col-md-4" scope="row"><code>{this.getRecordToken(record, field)}</code></th>
                        <td className="col-md-2">{this.getFieldType(field)}</td>
                        <td className="col-md-6">{field.description} {field.help ? (<span className="d-block mt-2">{field.help}</span>) : ''}</td>
                      </tr>
                    )))}
                    {step.expectedRecordsList.filter(r => r.mayHaveMoreFields).map((record, i) => (
                      <tr className="d-flex" key={`RecordField__${record.id}__Asterisk`}>
                        <th className="col-md-4" scope="row"><code>{this.getRecordToken(record, '*')}</code></th>
                        <td className="col-md-2">*</td>
                        <td className="col-md-6">This step may expose additional dynamic tokens representing values on the {record.id}, depending on how you've configured the underlying system.</td>
                      </tr>
                      ))}
                  </tbody>
                </table>
              </div>) : ''}
              <hr className="my-5" />
            </div>
          ))}
        </section>
        {cogx.homepage ? (<section className="mb-5 p-5 bg-light" id="get-involved">
          <div className="container">
            <h2>Contribute</h2>
            <div className="card-body">
              <p className="card-text">This Cog is open source.</p>
              <a href={cogx.homepage} target="_blank" className="btn btn-secondary mr-2 mb-2 mb-md-0"><Icon className="mr-1 align-text-top" icon={GitHub} width={18} height={18} fill="#fff" />Contribute on GitHub</a>
              <a href="https://spectrum.chat/crank" target="_blank" className="btn btn-outline-secondary">Join the Crank Spectrum Community</a>
            </div>
          </div>
        </section>) : ''}
      </main></Layout>
    )
  }

  handleStepFilterChange(event) {
    this.setState({stepFilter: event.target.value}, () => {
      Prism.highlightAll();
    });
    history.replaceState(null, null, event.target.value.length ? `#step:${event.target.value}` : '#');
  }

  getStepExpression(step) {
    let keyword = step.type === 0 ? 'When I' : 'Then';
    if (step.expression.includes('delete') || step.stepId.toLowerCase().includes('delete')) {
      keyword = 'Finally,';
    }

    let expression = step.expression;

    // Remove the trailing/preceding slashes (from the regex).
    expression = expression.substr(1, expression.length - 2);

    // Remove any non-capture-group question marks in the expression.
    expression = expression.replace(/([^\(])\?/gi, '$1');
    var matchRegex = /\(\?<([a-zA-Z_-]+)>[^\)]+\)/gmi;
    var replaceMap = {};
    var matchedFields;

    // Build a map of strings to replace and the values to replace them with.
    while ((matchedFields = matchRegex.exec(expression)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (matchedFields.index === matchRegex.lastIndex) {
        matchRegex.lastIndex++;
      }

      replaceMap[matchedFields[0]] = `{{${matchedFields[1]}}}`;
    }

    // Iterate through replacements, modifying the expression each time.
    Object.keys(replaceMap).forEach((replace) => {
      expression = expression.replace(replace, replaceMap[replace]);
    });

    // Remove any remaining capture groups (they are optional)
    expression = expression.replace(/\(\?\:.*?\) /gi, ' ');

    return `${keyword} ${expression}`.trim()
  }

  getStepData(step) {
    const expression = this.getStepExpression(step);
    let missingFieldCount = 0;
    let dataString = "\n  data:\n";

    // If there are required fields that are not contained within the expression
    step.expectedFieldsList.forEach(f => {
      if (f.optionality === 1 && !expression.includes(`{{${f.key}}}`)) {
        missingFieldCount++;

        switch (f.type) {
          case 1: // String
            dataString += `    ${f.key}: string value\n`;
            break;
          case 2: // Boolean
            dataString += `    ${f.key}: true\n`;
            break;
          case 3: // Numeric
            dataString += `    ${f.key}: 123\n`;
            break;
          case 4: // Date
          case 5: // Datetime
            dataString += `    ${f.key}: 2020-01-01\n`;
            break;
          case 6: // Email
            dataString += `    ${f.key}: ab@example.com\n`;
            break;
          case 7: // Phone
            dataString += `    ${f.key}: 555-555-5555\n`;
            break;
          case 10: // URL
            dataString += `    ${f.key}: https://example.com\n`;
            break;
          case 8: // Any non-scalar
          case 9: // Map
            dataString += `    ${f.key}:\n      field: value\n`;
            break;
          default:
            dataString += `    ${f.key}: value\n`;
        }
      }
    })

    if (missingFieldCount === 0) {
      return '';
    }

    return dataString;
  }

  getFieldType(step) {
    switch (step.type) {
      case 0:
        return 'Any Scalar';
      case 1:
        return 'String';
      case 2:
        return 'Boolean';
      case 3:
        return 'Number';
      case 4:
        return 'ISO 8601 Date';
      case 5:
        return 'ISO 8601 Datetime';
      case 6:
        return 'Email Address';
      case 7:
        return 'Phone Number';
      case 8:
        return 'Any Non-Scalar';
      case 9:
        return 'Map/Object';
      case 10:
        return 'URL';
    }
  }

  getFieldEnvironmentVariable(field) {
    return `crank_${this.state.cog.name}__${field.key}`.replace(/[^a-zA-Z0-9_]+/g, '_').toUpperCase();
  }

  getRecordToken(record, field = null) {
    const cogPart = this.state.cog.name.split('/')[1];
    let token = `${cogPart}.${record.id}`;

    // If this is a Table record, append a row token part.
    if (record.type === 1) {
      token += '.0';
    }

    if (field) {
      if (field === '*') {
        token += `.*`;
      } else {
        token += `.${field.key}`;
      }
    }

    return `{{${token}}}`;
  }
}

export const pageQuery = graphql`
  query($name: String!) {
    cog: cogRegistryJson(name: {eq: $name}) {
      label
      homepage
      authFieldsList {
        description
        help
        key
        optionality
        type
      }
      authHelpUrl
      version
      name
      stepDefinitionsList {
        help
        name
        stepId
        type
        expression
        expectedFieldsList {
          description
          help
          key
          optionality
          type
        }
        expectedRecordsList {
          id
          type
          mayHaveMoreFields
          guaranteedFieldsList {
            description
            help
            key
            optionality
            type
          }
        }
      }
    }
    cogs: allCogRegistryJson(
      sort: {fields: label, order: ASC},
      limit: 1000
    ) {
      edges {
        node {
          label
          name
        }
      }
    }
  }
`

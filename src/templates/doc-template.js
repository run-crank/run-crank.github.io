import React from "react"
import { graphql, Link } from "gatsby"
import * as Slugger from 'github-slugger'
import Prism from 'prismjs';
import Layout from '../components/layout'

import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-shell-session';
import 'prismjs/components/prism-yaml';
import '../../node_modules/prismjs/themes/prism-tomorrow.css';
import './_doc-template.scss';

export default class Template extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.pageContent = props.data.pageContent;
    this.state.navBar = props.data.navBar;
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const slugger = new Slugger()
    const frontmatter = this.state.pageContent.frontmatter;
    const html = this.state.pageContent.html;
    const navBar = this.state.navBar;
    const toc = this.state.pageContent.headings.map((heading) => {
      return {
        anchor: '#' + slugger.slug(heading.value),
        title: heading.value,
      }
    });

    return (
      <Layout subTitle={frontmatter.title} activeTrail={frontmatter.path} location={this.props.location}><main>
        <div className="doc-content container small">
          <div className="row">
            <div className="col-12 col-lg-3 nav-column">
              <ul className="nav flex-lg-column">
                {navBar.edges.map((item, i) => (
                  <li className={"nav-item" + (item.node.frontmatter.path === frontmatter.path ? ' active' : '')} key={item.node.frontmatter.path}>
                    <Link to={item.node.frontmatter.path}>
                      {item.node.frontmatter.title}
                    </Link>
                    {toc.length > 0 && item.node.frontmatter.path === frontmatter.path &&
                      <ul className="nav flex-column">
                        {toc.map((heading, i) => (
                          <li className="nav-item" key={heading.anchor}>
                            <a href={heading.anchor}>{heading.title}</a>
                          </li>
                        ))}
                      </ul>
                    }
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-lg-9">
            <h1>{frontmatter.title}</h1>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            </div>
          </div>
        </div>
      </main></Layout>
    )
  }
}

export const pageQuery = graphql`
  query($path: String!, $section: String!) {
    pageContent: markdownRemark(frontmatter: {path: {eq: $path}}) {
      frontmatter {
        section
        path
        title
      }
      headings(depth: h2) {
        value
      }
      html
    }
    navBar: allMarkdownRemark(
      sort: {fields: frontmatter___navOrder, order: ASC}
      limit: 1000,
      filter: {frontmatter: {
        section: {eq: $section}
        navOrder: {gt: -1}
      }}
    ) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`

import React from 'react';
import Prism from 'prismjs';
import { Link } from "gatsby"

import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-shell-session';

import './_cog-card.scss';


export default class CogCard extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="card cog-card">
        <Link to={`/discover-cogs/${this.props.cog.name}`}>
          <div className="cog-image" style={{backgroundImage: `url(${this.props.cog.img})`}} />
        </Link>
        <div className="card-body">
          <h3 className="features-title mt-2 mb-3">{this.props.cog.label}</h3>
          <Link to={`/discover-cogs/${this.props.cog.name}`} className="btn btn-outline-secondary btn-sm- mt-2">{this.props.cog.lpLabel || this.props.cog.label} QA Automation</Link>
        </div>
      </div>
    )
  }
}

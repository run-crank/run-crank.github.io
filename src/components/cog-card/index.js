import React from 'react';

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
        <div className="cog-image" style={{backgroundImage: `url(${this.props.cog.img})`}} />
        <div className="card-body">
          <h3 className="features-title mt-2 mb-3">{this.props.cog.label}</h3>
          <pre className="language-shell-session">
            <code className="language-shell-session">crank cog:install {this.props.cog.name}</code>
          </pre>
          <a href={this.props.cog.homepage} className="btn btn-outline-secondary btn-sm mt-2" role="button">More Info</a>
        </div>
      </div>
    )
  }
}

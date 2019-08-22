import React from 'react';
import './_features.scss';

import { StaticQuery, graphql } from 'gatsby';

const Features = () => (
    <StaticQuery
        query={ graphql`
        query FeaturesQuery {
          allDataJson(filter: {features: {elemMatch: {title: {regex: "/.*/"}}}}) {
            edges {
              node {
                features {
                  copy
                  img
                  subHead
                  title
                }
              }
            }
          }
        }        
    ` }
        render={ (data) => (
            <section className="features" id="features">
              {data.allDataJson.edges[0].node.features.map((item, i) => (
                <div className="container-wrapper" key={i}>
                    <div className="container">
                        <div className="row pt-5 pb-5">
                            <div className={"col-6" + (i % 2 ? ' order-2' : '')}>
                                <span className="badge badge-secondary">{item.title}</span>
                                <h3 className="features-title mt-2 mb-3">{item.subHead}</h3>
                                <p dangerouslySetInnerHTML={{__html: item.copy}} />
                            </div>
                            <div className="col-6">
                                <img className="feature-image" src={item.img} />
                            </div>
                        </div>
                    </div>
                </div>
              ))}
            </section>
        ) } />
);

export default Features;

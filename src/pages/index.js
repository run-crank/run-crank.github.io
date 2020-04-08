import React from 'react';
import Features from '../components/features';
import HomepageHero from '../components/homepage-hero';
import Layout from '../components/layout';

const IndexPage = ({ location }) => (
  <Layout
    invertHeaderColors={true}
    metaDescription="Crank is BDD Test Automation for Integrated Business Technology"
    location={location}
  >
    <main>
      <HomepageHero />
      <Features />
    </main>
  </Layout>
);

export default IndexPage;

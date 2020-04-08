import React from 'react';
import CogHero from '../components/cog-hero';
import CogList from '../components/cog-list';
import Layout from '../components/layout';

const DiscoverCogsPage = ({ location }) => (
    <Layout subTitle="Discover Cogs" activeTrail="/discover-cogs" location={location}>
        <main>
          <CogHero />
          <CogList />
        </main>
    </Layout>
);

export default DiscoverCogsPage;

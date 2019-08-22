import React from 'react';
import CogHero from '../components/cog-hero';
import CogList from '../components/cog-list';
import Layout from '../components/layout';

const IndexPage = () => (
    <Layout subTitle="Discover Cogs">
        <main>
          <CogHero />
          <CogList />
        </main>
    </Layout>
);

export default IndexPage;

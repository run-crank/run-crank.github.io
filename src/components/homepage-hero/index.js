import React from 'react';
import './_homepage-hero.scss';
import { Link } from 'gatsby';

const HomepageHero = () => (
    <div className="homepage-hero jumbotron jumbotron-fluid text-center">
        <div className="container">
            <img src="/img/crank-logo.png" className="logo" alt="Crank Logo" />
            <h3 className="lead">BDD Test Automation for Integrated Business Technology</h3>
            <Link to="/intro" className="btn btn-secondary" role="button">Get Started</Link>
            <Link to="/intro/install" className="btn btn-outline-secondary" role="button">Install</Link>
            <Link to="/discover-cogs" className="btn btn-outline-secondary" role="button">Find Cogs</Link>
        </div>
    </div>
);

export default HomepageHero;

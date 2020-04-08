import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../header';
import Footer from '../footer';

import '../../../sass/style.scss';
import './_layout.scss'

const TemplateWrapper = ({ children, activeTrail, subTitle, invertHeaderColors, location, metaDescription, metaImage, twCardType, ogType }) => (
    <div className="app-wrapper">
        <Helmet title={"Crank - " + (subTitle || 'BDD Test Automation for Integrated SaaS')}>
        <meta name="og:title" content={subTitle || 'BDD Test Automation for Integrated SaaS'}></meta>
        <meta name="twitter:title" content={subTitle || 'BDD Test Automation for Integrated SaaS'}></meta>
        <meta name="twitter:card" content={twCardType || 'summary'}></meta>
        <meta name="og:type" content={ogType || 'website'}></meta>
        <meta name="twitter:image" content={metaImage || 'https://crank.run/img/crank-logo.png'}></meta>
        <meta name="og:image" content={metaImage || 'https://crank.run/img/crank-logo.png'}></meta>
        <meta name="twitter:site" content="@RunCrank"></meta>
        <meta name="og:url" content={`https://crank.run${location ? location.pathname : '/'}`}></meta>
        {metaDescription ? (<meta name="description" content={metaDescription}></meta>) : ''}
        {metaDescription ? (<meta name="twitter:description" content={metaDescription}></meta>) : ''}
        {metaDescription ? (<meta name="og:description" content={metaDescription}></meta>) : ''}
        {/* Global site tag (gtag.js) - Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-75228722-5"></script>
            <script>{`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  // Initial config/pageview call performed in gatsby-browser.js
                  // onRouteUpdate() implementation. Works on built version, but
                  // not in dev.
            `}</script>
        </Helmet>
        <Header invertColors={invertHeaderColors} activeTrail={activeTrail} />
        {children}
        <Footer />
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    subTitle: PropTypes.string,
    activeTrail: PropTypes.string,
    invertHeaderColors: PropTypes.bool,
    location: PropTypes.object,
    metaDescription: PropTypes.string,
    metaImage: PropTypes.string,
    twCardType: PropTypes.string,
    ogType: PropTypes.string,
};

export default TemplateWrapper;

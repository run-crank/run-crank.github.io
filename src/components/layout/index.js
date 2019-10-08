import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../header';
import Footer from '../footer';

import '../../../sass/style.scss';
import './_layout.scss'

const TemplateWrapper = ({ children, activeTrail, subTitle, invertHeaderColors }) => (
    <div className="app-wrapper">
        <Helmet title={"Crank - " + (subTitle || 'BDD Test Automation for Integrated SaaS')}>
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
};

export default TemplateWrapper;

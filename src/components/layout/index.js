import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../header';
import Footer from '../footer';

import '../../../sass/style.scss';
import './_layout.scss'

const TemplateWrapper = ({ children, activeTrail, subTitle, invertHeaderColors }) => (
    <div className="app-wrapper">
        <Helmet title={"Crank - " + (subTitle || 'BDD Test Automation for Integrated SaaS')} />
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

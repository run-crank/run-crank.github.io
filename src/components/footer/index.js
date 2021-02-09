import React from 'react';
import { Link } from 'gatsby';
import './_footer.scss';
import Icon from '../icon';
import Download from '../icon/download.icon';
import Pineapple from '../icon/pineapple.icon'

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-content row small">
                <div className="col-12 col-lg-7">
                    <div className="footer-nav">
                        <Link className="footer-link" to="/intro">Getting Started</Link>
                        <Link className="footer-link" to="/discover-cogs">Cogs</Link>
                        <Link className="footer-link" to="/intro/community">Community</Link>
                        <Link className="footer-link" to="/intro/install"><Icon className="mr-1 align-text-top" icon={Download} width={16} height={16} fill="#fff" />Install</Link>
                    </div>
                </div>
                <div className="footer-by col-12 col-lg-5">
                    <span className="by-automaton">Made with radical hospitality by <a href="https://www.stackmoxie.com/?utm_source=crank"><Icon className="mr-1 align-text-top" icon={Pineapple} width={16} height={16} fill="#b69d65" />Stack Moxie</a></span>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;

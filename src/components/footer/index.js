import React from 'react';
import { Link } from 'gatsby';
import './_footer.scss';
import Icon from '../icon';
import Download from '../icon/download.icon';
import Pineapple from '../icon/pineapple.icon'

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-content small">
                        <Link className="footer-link" to="/intro">Getting Started</Link>
                        <Link className="footer-link" to="/discover-cogs">Cogs</Link>
                        <Link className="footer-link" to="/intro/community">Community</Link>
                        <Link className="footer-link" to="/intro/install"><Icon className="mr-1 align-text-top" icon={Download} width={16} height={16} fill="#fff" />Install</Link>
                        <span className="by-automaton">Made with radical hospitality by <a href="https://www.automatoninc.com?utm_source=crank"><Icon className="mr-1 align-text-top" icon={Pineapple} width={16} height={16} fill="#b69d65" />Automaton</a></span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;

import React from 'react';
import { Link } from "gatsby"
import Icon from '../icon';
import GitHub from '../icon/github.icon';
import Download from '../icon/download.icon';
import './_header.scss';

const Header = ({ invertColors }) => (
    <header className={'header' + (invertColors ? ' inverted' : '')}>
        <div className="above">
            <div className="container">
                <a href="https://www.automatoninc.com?utm_source=crank">
                    <img src="/img/automaton-logo.png" className="parent-logo" />
                </a>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="header-content">
                        <span className="header-logo">
                            <Link to="/">[Wide Logo Here]</Link>
                        </span>
                        <nav className="header-nav">
                            <ul className="header-nav-list">
                                <li className="header-nav-list-item small">
                                    <Link to="/intro">Getting Started</Link>
                                </li>
                                <li className="header-nav-list-item small">
                                    <Link to="/discover-cogs">Cogs</Link>
                                </li>
                                <li className="header-nav-list-item small">
                                    <Link to="/intro/community">Community</Link>
                                </li>
                                <li className="header-nav-list-item small">
                                    <Link to="/intro/install"><Icon className="mr-1 align-text-top" icon={Download} width={16} height={16} fill="#fff" />Install</Link>
                                </li>
                                <li className="header-nav-list-item small">
                                    <a href="https://github.com/run-crank/cli"><Icon className="mr-1 align-text-top" icon={GitHub} width={18} height={18} fill="#fff" />GitHub</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;

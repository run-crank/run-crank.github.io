import React from 'react';
import { Link } from "gatsby"
import Icon from '../icon';
import GitHub from '../icon/github.icon';
import Download from '../icon/download.icon';

import '../../../node_modules/jquery/dist/jquery.slim.js';
import '../../../node_modules/popper.js/dist/popper.js';
import '../../../node_modules/bootstrap/dist/js/bootstrap.js'
import './_header.scss';

const Header = ({ invertColors, activeTrail }) => (
    <header className={'header' + (invertColors ? ' inverted' : '')}>
        <div className="above">
            <div className="container">
                <a href="https://www.stackmoxie.com/?utm_source=crank">
                    <img src="/img/stack-moxie-logo.png" className="parent-logo" />
                </a>
            </div>
        </div>
        <div className="container">
        <nav className="navbar navbar-expand-md navbar-light">
            <span className="header-logo">
                <Link to="/"><img src="/img/crank-horizontal-white.png" /></Link>
            </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className={"nav-item" + (activeTrail === '/intro' ? ' active' : '')}>
                        <Link className="nav-link" to="/intro">Getting Started</Link>
                    </li>
                    <li className={"nav-item" + (activeTrail === '/discover-cogs' ? ' active' : '')}>
                        <Link className="nav-link" to="/discover-cogs">Cogs</Link>
                    </li>
                    <li className={"nav-item" + (activeTrail === '/intro/community' ? ' active' : '')}>
                        <Link className="nav-link"to="/intro/community">Community</Link>
                    </li>
                    <li className={"nav-item" + (activeTrail === '/intro/install' ? ' active' : '')}>
                        <Link className="nav-link" to="/intro/install"><Icon className="mr-1 align-text-top" icon={Download} width={16} height={16} fill="#fff" />Install</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/run-crank/cli"><Icon className="mr-1 align-text-top" icon={GitHub} width={18} height={18} fill="#fff" />GitHub</a>
                    </li>
                </ul>
            </div>
        {/*<div className="above">
            <div className="container">
                <a href="https://www.stackmoxie.com/?utm_source=crank">
                    <img src="/img/stack-moxie-logo.png" className="parent-logo" />
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
        </div>*/}
        </nav>
        </div>
    </header>
);

export default Header;

import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "./sidebar.css";

export default props => {
    return (
        <Menu>
            <a className="My Project" href="/project">
                My Project
            </a>
            <a className="Billing" href="/Billing">
                Billing
            </a>
            <a className="Support" href="/Support">
                Support
            </a>
        </Menu>
    );
};
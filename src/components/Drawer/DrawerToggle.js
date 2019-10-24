import React from 'react';

import './DrawerToggle.css';

const drawerToggle = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle_line"></div>
        <div className="toggle_line"></div>
        <div className="toggle_line"></div>
    </button>
);

export default drawerToggle;

import React from 'react';

function Navbar({totalCounters}) {
    console.log('NavBar - Rendered')
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="navbar.jsx">Navbar <span
                    className="badge rounded-pill bg-secondary text-white">{totalCounters}</span></a>
            </div>
        </nav>
    );
}

export default Navbar;
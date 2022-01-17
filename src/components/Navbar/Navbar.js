import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css'
import Button from '@mui/material/Button';
class Navbar extends Component {
    state = {clicked: false} 
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavbarItems">
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <h2 className="navbar-logo">SynthData</h2>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        ) 
                    })}
                </ul>
                <div className="search">
                    <div className="searchInputs">
                        <input type="text" placeholder="Searching for...">
                        </input>
                    </div>
                </div>
                <Button variant="contained">Let's Connect</Button>;
               
            </nav>
        )
    }
}
export default Navbar
import React, { Component } from 'react';


import './Header.css';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "aa" }; // Par défaut France
        this.ip = this.ip.bind(this);
    }
    ip(value) {
        this.setState({ name: value });
    }
    render() {
        return (
            <header class="gradient">
                <span class="text">

                    <p>IP Address Tracker</p>
                </span>



            </header>
        );
    }
}

export default Header;
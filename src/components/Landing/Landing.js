import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import Info from '../Info/Info';
import Map from '../Map/Map';

import './Landing.css';
class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
        this.ip = this.ip.bind(this);
    }
    ip(value) {
        this.setState({ name: value });
    }

    render() {
        return (
            <div>

                <div className="landing-div">
                    <Searchbar ip={this.ip} />
                </div>
                <div className="landing-map">
                    <Map name={this.state.name} />

                </div>
                <div className="landing-info">
                    <Info name={this.state.name} />

                </div>


            </div>
        );
    }
}

export default Landing;
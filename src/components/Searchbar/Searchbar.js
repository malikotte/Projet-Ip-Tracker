import React, { Component } from 'react';
import './Searchbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";




class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        this.props.ip(this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <span className="box-div">
                <form onSubmit={this.handleSubmit}>
                    <input className="searchbar-Input" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search for any IP address or domain" />
                    <button className="searchbar-bouton">
                        <FontAwesomeIcon icon={faAngleRight} size="lg" />
                    </button>
                </form>

            </span>

        );
    }
}

export default Searchbar;
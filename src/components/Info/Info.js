import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }
    componentDidMount() {
        fetch(`http://ip-api.com/json/${this.props.name}`)
            .then((response) => {
                return response.json()
            })

            .then((result) => {
                this.setState({ data: result });
                // console.log(result);
            })


    }
    componentDidUpdate(prevProps) {
        if (this.props.name !== prevProps.name) {
            fetch(`http://ip-api.com/json/${this.props.name}`)
                .then((response) => {
                    return response.json()
                })

                .then((result) => {

                    this.setState({ data: result });
                    //console.log(result);
                })
        }

    }

    render() {
        return (
            <span className="box-info">
                <div className="container">
                    <div className="container-item">
                        <p><b>IP ADDRESS</b></p>
                        <div className="info">
                            {this.state.data.query}
                        </div>

                    </div>
                    <div className="container-item">
                        <p><b>LOCATION</b></p>
                        <div className="info">
                            Pays : {this.state.data.country}<br />
                            Région : {this.state.data.regionName}<br />
                            Ville : {this.state.data.city}
                        </div>
                    </div>
                    <div className="container-item">
                        <p><b>TIMEZONE</b></p>
                        <div className="info">
                            {this.state.data.timezone}
                        </div>
                    </div>
                    <div className="container-item">
                        <p><b>ISP</b></p>
                        <div className="info">
                            {this.state.data.isp}
                        </div>
                    </div>
                </div >
            </span >
        );
    }
}

export default Info;
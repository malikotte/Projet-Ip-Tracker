import React, { Component } from 'react';
import './Map.css';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

class Map extends Component {
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
                if (this.state.data.status === "success") {
                    this.map(this.state.data.lat, this.state.data.lon)
                } else {

                }

            })



    }
    componentDidUpdate(prevprops) {
        if (this.props.name !== prevprops.name) {
            fetch(`http://ip-api.com/json/${this.props.name}`)
                .then((response) => {
                    return response.json()
                })

                .then((result) => {
                    this.setState({ data: result });
                    var container = L.DomUtil.get('map');
                    if (container !== undefined || container !== null) {
                        container._leaflet_id = null;
                    }


                    if (this.state.data.status === "success") {
                        this.map(this.state.data.lat, this.state.data.lon)
                    } else {
                        alert("wesh");
                    }
                })
        }


    }


    map(lat, long) {
        var map = L.map('map');

        map.dragging.disable();
        L.circle([lat, long], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 9000
        }).addTo(map).bindPopup("⚠️ La localisation est approximative, seul les forces de l'ordre 👮 peuvent obtenir cette information via une réquisition auprès de l'opérateur 📱");


        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        map.setView([lat, long], 11);


    }
    render() {
        return (
            <div id="container">
                <div id="map"></div>
            </div>
        )
    }

};

export default Map;
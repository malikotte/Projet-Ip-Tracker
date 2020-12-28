import React, { useEffect, useState, useRef } from 'react';
import { TileLayer, MapContainer, Marker, Popup, useMap } from 'react-leaflet'
import './Map.css';
import "leaflet/dist/leaflet.css";
import { map } from 'leaflet';
import axios from 'axios';


const Map = (props) => {

    const [deals, setDeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://ip-api.com/json/${props.name}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();

                }
            }).then(data => {
                setDeals(data);
                setIsLoading(false);

            })


    }, [props.name])

    function MyComponent(props) {
        const map = useMap();

        map.setView([3, 6], 13);


        return null
    }



    return (
        <div>
            <h1>{deals.lat}</h1>
            <h1>{deals.lon}</h1>
            <MapContainer center={[3, 6]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MyComponent />
                <Marker position={[3, 6]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
                </Marker>
            </MapContainer>
        </div>
    )

};

export default Map;
import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import s from "./map.module.css";






const MapContainer = withScriptjs(withGoogleMap(
    (props) => {

        return <GoogleMap className={s.map} defaultZoom={props.defaultZoom} defaultCenter={props.defaultCenter} />
    }
))


export default MapContainer;


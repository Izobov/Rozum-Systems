import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from 'react-google-maps';







const Map = withScriptjs(withGoogleMap(
    (props) => {
        return (
            <GoogleMap defaultZoom={props.defaultZoom} defaultCenter={props.defaultCenter} center={props.center} zoom={props.zoom}>
                < Marker position={props.markerPosition} defaultPosition={props.markerPosition} />
            </GoogleMap >
        )
    }
))


export default Map;


import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from 'react-google-maps';







const Map = withScriptjs(withGoogleMap(
    (props) => {
        return (
            <GoogleMap defaultZoom={props.defaultZoom} defaultCenter={props.defaultCenter} >
                < Marker position={props.markerPosition} noRedraw={true} />
            </GoogleMap >
        )
    }
))


export default Map;


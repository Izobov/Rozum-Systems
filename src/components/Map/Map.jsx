import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';






const Map = withScriptjs(withGoogleMap(
    (props) => {

        return <GoogleMap defaultZoom={props.defaultZoom} defaultCenter={props.defaultCenter} />
    }
))


export default Map;


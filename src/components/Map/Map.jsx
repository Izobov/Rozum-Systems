import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from 'react-google-maps';






const Map = withScriptjs(withGoogleMap(
    (props) => {

        return <GoogleMap defaultZoom={props.zoom || props.defaultZoom} defaultCenter={props.defaultCenter} >
            {props.isMarkerShown && < Marker position={props.markerPosition} />}
        </GoogleMap>
    }
))


export default Map;


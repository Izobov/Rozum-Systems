import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from 'react-google-maps';
import { compose, withProps, withHandlers, withState } from 'recompose';






const MapContainer = (props) =>
    <GoogleMap defaultZoom={this.props.defaultZoom} defaultCenter={this.props.defaultCenter}  >
        < Marker position={this.props.markerPosition} />
    </GoogleMap >


let mapStateToProps = (state) => ({
    defaultCenter: state.map.coords,
    defaultZoom: state.map.defaultZoom,
    zoom: state.map.zoom,
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDQUk3fIGUDtRFnOMFVipKS2yYPZKZfHp4&v=3.exp&libraries=geometry,drawing,places",
    isMarkerShown: state.map.isMarkerShown,
    markerPosition: state.map.markerPosition

})

export default compose(
    withProps({
        mapStateToProps, loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100vh` }} />
    }),
    withState('zoom', 'onZoomChange', 8),
    withHandlers(() => {
        const refs = {
            map: undefined,
        }

        return {
            onMapMounted: () => ref => {
                refs.map = ref
            },
            onZoomChanged: ({ onZoomChange }) => () => {
                onZoomChange(refs.map.getZoom())
            }
        }
    }),
    withGoogleMap,
    withScriptjs)(MapContainer);


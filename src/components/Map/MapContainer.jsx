import React from 'react';
import { connect } from 'react-redux';
import Map from './Map';




class MapContiner extends React.Component {
    componentDidMount() { };


    render() {
        console.log('render')
        return (
            <Map {...this.props}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100vh` }} />}
                mapElement={<div style={{ height: `100vh` }} />}
            />
        )

    }
}
let mapStateToProps = (state) => ({
    defaultCenter: state.map.coords,
    defaultZoom: state.map.defaultZoom,
    zoom: state.map.zoom,
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDQUk3fIGUDtRFnOMFVipKS2yYPZKZfHp4&v=3.exp&libraries=geometry,drawing,places",
    isMarkerShown: state.map.isMarkerShown,
    markerPosition: state.map.markerPosition

})
export default connect(mapStateToProps)(MapContiner)
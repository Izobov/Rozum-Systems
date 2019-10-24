import React from 'react';
import { connect } from 'react-redux';
import Map from './Map';


class MapContiner extends React.Component {
    componentDidMount() { };
    componentDidUpdate() { };

    render() {
        return (
            <Map {...this.props} />
        )

    }
}
let mapStateToProps = (state) => ({
    coords: state.map.coords,
    zoom: state.map.defaultZoom,
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDQUk3fIGUDtRFnOMFVipKS2yYPZKZfHp4&v=3.exp&libraries=geometry,drawing,places",
    // loadingElement: {< div style={{ height: `100%` }} />},
    // containerElement: { <div style={{ height: `100%` }} /> },
    // mapElement: { <div style={{ height: `100%` }} /> },
})

export default connect(mapStateToProps)(MapContiner)
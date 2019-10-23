import React from 'react';
import './App.css';
import MapContainer from './components/Map/MapContainer';

function App() {
  return (
    <div className="app_wrapper">
      <div className="map_wrapper">
        <MapContainer
          isMarkerShown
          defaultZoom={18}
          defaultCenter={{ lat: 53.93604672, lng: 27.48154342 }}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div className="cards"></div>

    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Map from './components/Map/Map';
import CardsContainer from './components/Cards/CardContainer';
import { CardsAPI } from './api/api';
import { setCoordinats } from './redux/reducers/cards_reducer';

function App() {
  return (
    <div className="app_wrapper">
      <div className="map_wrapper">
        <Map
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div className="cards">

        <CardsContainer />
      </div>


    </div>
  );
}

export default App;

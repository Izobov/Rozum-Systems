import React from 'react';
import './App.css';
import CardsContainer from './components/Cards/CardContainer';
import MapContainer from './components/Map/MapContainer';

function App() {
  return (
    <div className="app_wrapper">
      <div className="map_wrapper">
        <MapContainer
        />
      </div>
      <div className="cards">

        <CardsContainer />
      </div>


    </div>
  );
}

export default App;

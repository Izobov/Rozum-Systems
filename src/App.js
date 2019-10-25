import React from 'react';
import './App.css';
import CardsContainer from './components/Cards/CardContainer';
import MapContainer from './components/Map/MapContainer';
import { Route } from 'react-router-dom'

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
      <Route path='/login' render={() => <CardsContainer />} />

    </div>
  );
}

export default App;

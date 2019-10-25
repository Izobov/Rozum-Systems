import React from 'react';
import './App.css';
import CardsContainer from './components/Cards/CardContainer';
import MapContainer from './components/Map/MapContainer';
import { connect } from 'react-redux';
import LoginContainer from './components/Login/LoginContainer';

function App(props) {

  if (!props.isAuth) {
    return <LoginContainer />
  }

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

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth

})

export default connect(mapStateToProps)(App);

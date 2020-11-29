import * as React from 'react';
import { Component } from 'react';
import ReactMapGL from 'react-map-gl';
// import ControlPanel from './components/ControlPanel';


export default class App extends Component {
  state = {
    mapStyle: 'mapbox://styles/mapbox/dark-v9',
    viewport: {
      latitude: 13.0827,
      longitude: 80.2707,
      zoom: 20,
      bearing: 0,
      pitch: 60
    }
  };

  MAPBOX_TOKEN = 'pk.eyJ1IjoibmlybWFsa3Jpc2huYXYiLCJhIjoiY2tpMnQzangxMGwyeDJwbXZvb3E4MGo0eiJ9.r20QCVA6NHzcX4TsXzzJgw'; // Set your mapbox token here


  setViewport = viewport => this.setState({ viewport });

  render() {
    const { viewport, mapStyle } = this.state;

    return (
      <div className="App">

        <ReactMapGL {...viewport}
          width={'100vw'}
          height={'100vh'}
          mapStyle={mapStyle}
          onViewportChange={nextViewport => this.setViewport(nextViewport)}
          mapboxApiAccessToken={this.MAPBOX_TOKEN}
        />
      </div>
    );
  }
}

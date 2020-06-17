import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Maps = props => {

const defaultvalues = {
    center: {
        lat: props.lat,
        lng: props.lng
    },
    zoom: 11
}

//   render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%', minHeight: '60vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
               key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
               language: 'en'
               }}
          defaultCenter={defaultvalues.center}
          defaultZoom={defaultvalues.zoom}
        >
          <AnyReactComponent
            lat={props.lat}
            lng={props.lng}
            text={props.text}
          />
        </GoogleMapReact>
      </div>
    );
  }


export default Maps;
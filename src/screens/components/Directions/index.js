import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apiKey='AIzaSyAtuG77eNLPhsO28nm5Ua_DDSClMxYypdA'
        strokeWidth={3}
        strokeColor="#222"
    />
);

export default Directions;
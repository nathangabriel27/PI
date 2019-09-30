import React, { Component, Fragment } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";
import MapView, { Marker } from 'react-native-maps';
import GeoCoder from 'react-native-geocoding';
import Search from '../Serarch';
import Direction from '../Directions';
import Directions from '../Directions';
import { getPixelSize } from '../utils';
import markerImage from "../../../../assets/marker.png";
import { LocationBox, LocationText, LocationTimeBox, LocationTimeText, LocationTimeTextSmall } from './styles';
import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyB8H6wnED0kHxo5dDOeFqwIh1I6bc30BVk');

export default class Map extends Component {

    state = {
        region: null,
    };

    async componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                this.setState({ 
                    region: {
                        latitude, 
                        longitude,   
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134
                    }
                })
            }, //SUCESSO
            () => {}, //ERRO
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000,
            }
        )
    }

    render() {
        const { region } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    region={{ region }}
                    showsUserLocation
                    loadingEnabled
                />
            </View>
        );
    }
}
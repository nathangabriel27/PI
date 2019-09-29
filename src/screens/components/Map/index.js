import React, { Component, Fragment } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";
import MapView, {Marker} from 'react-native-maps';
import GeoCoder from 'react-native-geocoding';
import Search from '../Serarch';
import Direction from '../Directions';
import Directions from '../Directions';
import { getPixelSize } from '../utils';
import markerImage from '../../../../assets/marker.png';
import { LocationBox, LocationText, LocationTimeBox, LocationTimeText, LocationTimeTextSmall } from './styles';
import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyB8H6wnED0kHxo5dDOeFqwIh1I6bc30BVk');


export default class Map extends Component {

    state = {
        region: null,
        destination: null,
        duration: null,
        location: null
    };

    async componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            async ({ coords: { latitude, longitude } }) => {
                const response = await Geocoder.from({ latitude, longitude });
                const addres = response.results[0].formatted_address;
                const location = addres.substring(0, addres.indexOf(','));

                this.setState({
                    location,
                    region:{
                    latitude,
                    longitude,
                    latitudeDelta: 0.0143,
                    longitudeDelta: 0.0134
                }
                })
            }, //sucesso
            () => {}, //erro
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000,
            }
        )
    }


    handleLocationSelected = (data, { geometry }) => {
        const { location: { lat: latitude, lng: longitude } } = geometry;

        this.setState({
            destination: {
                latitude,
                longitude,
                title: data.structured_formatting.main_text,
            }
        })
    }

    render() {

        const { region, destination, duration, location } = this.state;

        return (
    
          <View style={{flex: 1}}>
            <MapView
              style={{flex: 1}}
              region={ region }
              showsUserLocation
              loadingEnabled
              ref={el => this.MapView = el}
            >
                { destination && (
                    <Fragment>
                        <Directions
                            origin={region}
                            destination={destination}
                            onReady={(result) => {
                                this.setState({ duration: Math.floor(resu.duration) })

                                this.MapView.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        right: getPixelSize(50),
                                        left: getPixelSize(50),
                                        top: getPixelSize(50),
                                        bottom: getPixelSize(50)
                                    }
                                });
                            }}
                        />

                        <Marker
                            coordinate={destination}
                            anchor={{ x: 0, y: 0 }}
                            image={markerImage}
                        >
                             <LocationBox>
                                 <LocationText>
                                     {destination.title}
                                 </LocationText>
                             </LocationBox>
                        </Marker>

                        <Marker
                            coordinate={region}
                            anchor={{ x: 0, y: 0 }}
                        >
                             <LocationBox>
                                 <LocationTimeBox>
                                     <LocationTimeText>{duration}</LocationTimeText>
                                     <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                                 </LocationTimeBox>
                                 <LocationText>
                                        {location}
                                 </LocationText>
                             </LocationBox>
                        </Marker>
                    </Fragment>
                )}
            </MapView>

            <Search
                onLocationSelected={this.handleLocationSelected}
            />
          </View>
        );
      }
}
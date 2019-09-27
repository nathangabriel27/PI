import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

console.disableYellowBox = true;
console . ignoredYellowBox  = [' Configurando um timer ']

//import { Actions } from 'router-native-router-flux';
var { height, width } = Dimensions.get('window');
import firebase from 'firebase';


import Router from './Router';

const instructions = Platform.select({
  ios: 'Texto IOS',
  android:
    'Texto Android',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      text: "Menu texto aqui",
      deviceWidth: width,
      deviceHeight: height
    };
  }


  componentWillMount() {
    //Posso Fazer qualquer tipo de configuração global aqui como por exemplo o Firebase
    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        /*
        Firebase do cabaço
        apiKey: "AIzaSyDgaCFXCapkNEC4daieScKGIRCTbouWxuM",
        authDomain: "doc-pi.firebaseapp.com",
        databaseURL: "https://doc-pi.firebaseio.com",
        projectId: "doc-pi",
        storageBucket: "",
        messagingSenderId: "784412510062",
        appId: "1:784412510062:web:234500d8917c637c7fe37f",
        measurementId: "G-T5BK0MYR4G"
        */

        apiKey: "AIzaSyB8H6wnED0kHxo5dDOeFqwIh1I6bc30BVk",
        authDomain: "projetopi-1567619287933.firebaseapp.com",
        databaseURL: "https://projetopi-1567619287933.firebaseio.com",
        projectId: "projetopi-1567619287933",
        storageBucket: "",
        messagingSenderId: "478223848222",
        appId: "1:478223848222:web:1af3866a6784781bee2f0f",
        measurementId: "G-2WW4D4N5T7"
      })
    }
  }
  render() {
    return (
      <Router></Router>
    );
  }

  openAskCadastro() {
    Alert.alert(
      'Cadastrar',
      'Você quer mesmo se cadastrar?',
      [
        { text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => this.openSimpleAlert() },
      ],
      { cancelable: false }
    )
  }
}





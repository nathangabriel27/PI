import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";
import Map from "./components/Map";

//Linha estranha 
const App = () => <Map />;

export default App;
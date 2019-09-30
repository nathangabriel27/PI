import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions, ScrollView, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";
import { Icon } from 'react-native-elements';
import Map from "./components/Map";

const App = () => <Map />

export default App;


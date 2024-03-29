import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";

var { height, width } = Dimensions.get('window');

export default class ListaProdutos extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            deviceWidth: width,
            deviceHeight: height,
        };
    }

    /*  componentDidMount() {
   
     } */

    render() {
        return (

            <View style={styles.container}>

                <Text style={styles.welcome}>Welcome to React Native! Lista de produtos </Text>

                <TouchableOpacity onPress={() => this.abrirDashboard()} style={styles.loginButton} >
                    <Text style={styles.buttonText}>go to dashboard</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.abriProdutos()} style={styles.loginButton} >
                    <Text style={styles.buttonText}>go to Produtos</Text>
                </TouchableOpacity>


            </View>
        );
    }


    cadastroProdutos() {
        Actions.cadastroProdutos();
    }
    abrirDashboard() {
        Actions.dashboard();
    }
    abriProdutos() {
        Actions.produtos();
    }

    abrirRota() {
        Actions.rota();
    }

    cadastroProdutos() {
        Actions.rota();
    }

    logout() {
        firebase.auth().signOut()
            .then(function () {
                // Sign-out successful.
                Actions.login();
            })
            .catch(function (error) {
                // An error happened
            });
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    backButton: {
        backgroundColor: "gray",
        borderRadius: 10,
        padding: 10,
        margin: 20,
        alignSelf: "flex-start"
    },
    registerButton: {
        backgroundColor: "green",
        borderRadius: 10,
        padding: 10,
        margin: 20,
        width: width * 0.8,
        alignItems: 'center'
    },
    buttonText: {
        color: "white"
    },
    inputStyle: {
        height: height * 0.06,
        width: width * 0.85,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        margin: width * 0.04
    },
    titleText: {
        fontSize: 30,
        alignItems: 'center',
        textAlign: 'center',
        color: "#039BE5"

    },
    loginButton: {
        backgroundColor: "#23541b",
        borderRadius: 10,
        padding: 10,
        margin: 20,
        width: width * 0.5,
        alignItems: 'center'
    },

});

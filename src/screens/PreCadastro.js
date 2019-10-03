import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions, TextInput, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styled, { css } from "styled-components/native";
import firebase from "firebase";


var { height, width } = Dimensions.get('window');

console.disableYellowBox = true;
console.ignoredYellowBox = [' Configurando um timer ']


export default class Cadastro extends Component<Props> {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }} >
                <View style={{ width: '100%', height: '70%', backgroundColor: '#90CAF9' }} >

                    <Text style={styles.titleText}>PiTruck</Text>

                    <View style={styles.viewText}>
                        <Text style={styles.textOrientacao}>
                            Prezado usuário,
                        {"\n"}{"\n"}
                            para garantir o melhor funcionamento do nosso sitema,
                            escolha a baixo o perfil de usário que se adeque melhor ao seu cenário.
                        {"\n"}
                            Leve a seguinte questão em consideração:
                        {"\n"}{"\n"}
                            Cliente: Se você deseja enviar produtos para outros lugeres.
                        {"\n"}{"\n"}
                            Transportadora: Se você que fornecer o serviço de transporte.
                        </Text>
                    </View>
                </View>

                <View style={{ width: '100%', height: '30%', backgroundColor: '#75C1FF' }}>

                    <View View style={{ flex: 1, flexDirection: 'row' }} >

                        <View style={{ width: '50%', height: '100%', backgroundColor: '#75C1FF' }}>
                            <Image style={styles.iconPleople} source={require('../../assets/pleoples.png')} />

                            <TouchableOpacity onPress={() => this.abrirCadastro()} style={styles.transportadoraButton} >
                                <Text style={styles.buttonText}> Cliente </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '50%', height: '100%', backgroundColor: '#75C1FF', borderColor: '#222', borderLeftWidth: '0.5' }}>
                            <Image style={styles.iconCompany} source={require('../../assets/company.png')} />

                            <TouchableOpacity onPress={() => this.abrirCadastro()} style={styles.transportadoraButton} >
                                <Text style={styles.buttonText}> Transportadora </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({

    titleText: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 30,
        alignItems: 'center',
        textAlign: 'center',
        color: "#005796"
    },

    viewText: {
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
    },

    textOrientacao: {
        fontSize: 20,
        textAlign: 'center',
    },

    iconCompany: {
        marginTop: 15,
        marginLeft: 60,
        width: 58,
        height: 56,
        
    },

    iconPleople: {
        marginTop: 15,
        marginLeft: 60,
        width: 58,
        height: 56,
        
    }, 

    transportadoraButton: {
        backgroundColor: "#50c878",
        borderWidth: 0.5,
        borderColor: '#222',
        borderRadius: 10,
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
        alignItems: 'center'
      },
})

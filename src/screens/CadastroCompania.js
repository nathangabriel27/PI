import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions, TextInput, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";

var { height, width } = Dimensions.get('window');

export default class CadastroProdutos extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            deviceWidth: width,
            deviceHeight: height,
            nomeFantasia: "teste empresa ",
            CNPJ: "12324342353",
            razaoSocial: "teste LTDA",
            CEP: "1234567890",
            UF: "MG",
            cidade: "BH",
            bairro: "bairro",
            rua: "ruaa tal",
            numero: "123",
        };
    }

    componentDidMount() {
        const { currentUser } = firebase.auth();
        if (currentUser) {
            console.log("Estou logado: ", currentUser.uid)
        }
        //Buscar os dados do usuário logado no banco (depois de ter aprendido a fazer push no banco e criar auth)
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.titleText}>Cadastro de Compania</Text>


                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({ nomeFantasia: text })}
                        placeholder="Nome da empresa"
                        value={this.state.nomeFantasia}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({ tipo: text })}
                        placeholder="CNPJ"
                        value={this.state.CNPJ}
                    />

                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({ razaoSocial: text })}
                        placeholder="Razão social"
                        value={this.state.razaoSocial}
                    />

                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({ CEP: text })}
                        placeholder="CEP"
                        value={this.state.CEP}
                    />

                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({ uf: text })}
                        placeholder="Estado"
                        value={this.state.UF}
                    />

                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({ cidade: text })}
                        placeholder="Cidade"
                        value={this.state.cidade}
                    />

                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({ bairro: text })}
                        placeholder="Bairro"
                        value={this.state.bairro}
                    />

                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({ rua: text })}
                        placeholder="Rua"
                        value={this.state.rua}
                    />

                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({ numero: text })}
                        placeholder="Numero"
                        value={this.state.numero}
                    />

                    <TouchableOpacity onPress={() => this.cadastroProduto()} style={styles.registerButton} >
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }

    cadastroProduto() {
        Alert.alert(
            'Cadastrar produto',
            'Confirma o seu cadastro?',
            [
                { text: 'Cancelar e corrigir', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'sim', onPress: () =>
                        this.registraProduto()
                },
            ],
            { cancelable: false }
        )
    }

    registraProduto() {
        const placeData = {
            nomeFantasia: this.state.nomeFantasia,
            CNPJ: this.state.CNPJ,
            razaoSocial: this.state.razaoSocial,
            CEP: this.state.CEP,
            UF: this.state.UF,
            cidade: this.state.cidade,
            bairro: this.state.bairro,
            rua: this.state.rua,
            nume: this.state.numero
        }
        const { currentUser } = firebase.auth();
        if (currentUser) {
            console.log("Estou logado: ", currentUser.uid)
        }
        firebase.database().ref(`Users/Company`)
            .push(placeData)
            .then((snapshot) => {
                const placeId = snapshot.key;
                firebase.database().ref(`Users/Company`)
                    .update({
                        uid: placeId
                    })
                Alert.alert("Sucesso", "Empresa cadastrada!");
                console.log("currenteUser", currentUser);
            })
    }

    askRegisterPlace() {
        Alert.alert(
            'Registrar Local',
            'Confirma o seu registo do local?',
            [
                { text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'OK', onPress: () =>
                        this.registerPlace()
                },
            ],
            { cancelable: false }
        )
    }


    voltaTela() {
        Actions.pop()
    }

    abrirDashboard() {
        Actions.dashboard();
    }

    abrirRota() {
        Actions.rota();
    }

    cadastroProdutos() {
        Actions.rota();
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
        margin: width * 0.04,
        justifyContent: 'center',

    },

    titleText: {
        marginTop: 45,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 30,
        alignItems: 'center',
        textAlign: 'center',
        color: "#008B8B",
        fontStyle: 'italic',

    },

});

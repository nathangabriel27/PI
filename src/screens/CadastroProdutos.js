import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";

var { height, width } = Dimensions.get('window');

export default class CadastroProdutos extends Component<Props> {

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

             {/*   
                <TouchableOpacity onPress={() => this.voltaTela()} style={styles.backButton} >
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>

                <Text style={styles.titleText}>Cadastro de Produtos</Text>


                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => this.setState({ nome: text })}
                    placeholder="Nome do produto"
                    value={this.state.nome}
                />

                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => this.setState({ tipoCarga: text })}
                    placeholder="Tipo De Carga"
                    value={this.state.tipoCarga}
                />

                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => this.setState({ endereco: text })}
                    placeholder="Endereço"
                    value={this.state.endereco}
                />

                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => this.setState({ telefone: text })}
                    placeholder="Telefone"
                    value={this.state.telefone}
                />

                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => this.setState({ abertura: text })}
                    placeholder="Abertura"
                    value={this.state.abertura}
                />

                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => this.setState({ fechamento: text })}
                    placeholder="Fechamento"
                    value={this.state.fechamento}
                />


                <TouchableOpacity onPress={() => this.askRegisterPlace()} style={styles.registerButton} >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity> */}
            </View>
        );
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

    registerPlace() {
        const placeData = {
            nome: this.state.nome,
            cidade: this.state.cidade,
            endereco: this.state.endereco,
            telefone: this.state.telefone,
            abertura: this.state.abertura,
            fechamento: this.state.fechamento
        }
        firebase.database().ref("Places/")
            .push(placeData)
            .then((snapshot) => {
                const placeId = snapshot.key;
                firebase.database().ref("Places/" + placeId)
                    .update({
                        uid: placeId
                    })
                Alert.alert("Sucesso", "Local criado!");
            })
    }

    confirmRegister() {
        const userData = {
            nome: this.state.nome,
            email: this.state.email,
            cidade: this.state.cidade,
            telefone: this.state.telefone,
            idade: this.state.idade,
            altura: 170,
        }
        firebase.database().ref("Shops/").push(userData)
            .then((snapshot) => {
                Alert.alert("Sucesso!", "Usuário criado");
                Actions.pop();
            })
            .catch((error) => {
                console.log("Error: ", error);
                Alert.alert("Errou na persistência!", error.code)
            })

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

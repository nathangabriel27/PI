import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions, TextInput, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";

var { height, width } = Dimensions.get('window');

console.disableYellowBox = true;
console.ignoredYellowBox = [' Configurando um timer ']


export default class Login extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
      nome: "",
      email: "",
      password: "",
      // cidade: "",
      //endereco: "",
      //telefone: "",
      //abertura: "",
      //fechamento: ""
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

          <TouchableOpacity onPress={() => this.voltaLogin()} style={styles.backButton} >
            <Text style={styles.buttonText}>Voltar para Login</Text>
          </TouchableOpacity>

          <Text style={styles.titleText}>Cadastro</Text>

          <TextInput
            style={styles.inputStyle}
            onChangeText={(text) => this.setState({ nome: text })}
            placeholder="Nome"
            value={this.state.nome}
          />

          <TextInput
            style={styles.inputStyle}
            onChangeText={(text) => this.setState({ email: text })}
            placeholder="transportadora@pi.com.br"
            value={this.state.email}
          />

          <TextInput
            style={styles.inputStyle}
            onChangeText={(text) => this.setState({ password: text })}
            placeholder="senha aqui"
            secureTextEntry
            value={this.state.password}
          />



          <TouchableOpacity onPress={() => this.desejaRegistra()} style={styles.registerButton} >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </ScrollView>

      </View>
    );
  }

  voltaLogin() {
    Actions.login();
  }
  desejaRegistra() {
    Alert.alert(
      'Registrar',
      'Confirma o seu registo com os seguintes dados?\nNome: ' + this.state.nome + "\nEmail: " + this.state.email,
      [
        { text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        {
          text: 'OK', onPress: () =>
            //this.confirmRegister()
            this.registerUser(this.state.email, this.state.password, this.state.nome)
        },
      ],
      { cancelable: false }
    )
  }

  registerUser(email, password, nome) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((currentUser) => {
        firebase.database().ref("Users/" + currentUser.user.uid).update({
          uid: currentUser.user.uid,
          email: email,
          nome: nome,

        });
        Alert.alert("Sucesso!", "Usuário criado");
        Actions.pop();
      })
      .catch((error) => {
        // Tratando erros de cadastro
        if (error.code == "auth/invalid-email") {
          console.log(error);
          Alert.alert("Opa!", "Email ou senha de usuario esta invalido, tente novamente");
        } else {
          if (error.code == "auth/weak-password") {
            console.log(error);
            Alert.alert("Quaaaaaseee....  ", "Sua senha tem que ter pelo menos 6 caracteres, Tente novamente ");
          } else {
            if (error.code == "auth/email-already-in-use") {
              console.log(error);
              Alert.alert("Ue", "O endereço de email já está sendo usado por outra conta, tente redefinir a senha ou criar com outro email.");
            } else {

              console.log(error);
              Alert.alert(error.code, 'teste')
            }


          }

        }
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
  }

});

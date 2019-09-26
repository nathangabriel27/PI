import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";

var { height, width } = Dimensions.get('window');

export default class Login extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
      email: "",
      senha: ""
    };
  }

  componentDidMount() {
    //const currentUser = firebase.auth().currentUser;
    /*     firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            console.log("Current user ")
            console.log(JSON.stringify(user))
            if (user){//Se é diferente de null, se é true, se é diferente de vazio, se é diferente de undefind
              Actions.dashboard();
            }
          } else {
            // No user is signed in.
          }
        }); */
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.titleText}>PI = 3,14 </Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({ email: text })}
          placeholder="Ex: fulano@gmail.com"
          value={this.state.email}
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({ senha: text })}
          placeholder="Senha aqui"
          secureTextEntry
          value={this.state.senha}
        />



        <TouchableOpacity onPress={() => this.loginUser(this.state.email, this.state.senha)} style={styles.loginButton} >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => this.esqueciMinhaSenha()} style={styles.forgotButton} >
          <Text style={styles.forgotText}>Esqueci minha senha</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => this.abrirCadastro()} style={styles.askButton} >
          <Text style={styles.buttonText}>Cadastro</Text>
        </TouchableOpacity>

      </View>
    );
  }

  esqueciMinhaSenha() {
    if (this.state.email == "") {
      Alert.alert("Erro", "Você precisa informar o seu e-mail");
    }
    else {
      Alert.alert(
        'Recuperar senha',
        'Deseja realmente recuperar a senha do e-mail?\n' + this.state.email + '?',
        [
          { text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          {
            text: 'OK', onPress: () =>
              this.resetPassword()

          },
        ],

        { cancelable: false }
      )
    }
  }



  openAskAlert() {
    Alert.alert(
      'Título do Alerta',
      'Você quer mesmo confirmar?',
      [
        { text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        {
          text: 'OK', onPress: () =>
            this.openSimpleAlert()
        },
      ],
      { cancelable: false }
    )
  }

  voltaLogin() {
    Actions.Login();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    backgroundColor: "gray",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    alignSelf: "flex-start"
  },

});

import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Tela de CADASTRO </Text>

      <Text>teste</Text>
      <TextInput
        placeholder="Ex: fulano@gmail.com"
      />
      <TouchableOpacity >
        <Text >TELA DO CADASTRO.JS</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

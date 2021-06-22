import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {styles} from './styles';

export  function SignIn() {
  return (
    <View style={styles.container} >
      <Text>Componente</Text>
      <TextInput style={styles.input}/>
    </View>
  );
}

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔐 CONTROL-SEGURITY</Text>
      <Text style={styles.welcome}>Bienvenido al sistema</Text>

      <TouchableOpacity 
  style={styles.button}
  onPress={() => router.push('/register')}
>
  <Text style={styles.buttonText}>Crear Cuenta</Text>
</TouchableOpacity>
    </View>
);
    
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#FF0000',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  welcome: {
    color: '#FF0000',
    fontSize: 18,
  },
  button: {
  backgroundColor: '#FF0000',
  padding: 12,
  borderRadius: 8,
  marginTop: 20,
},

buttonText: {
  color: '#000',
  fontWeight: 'bold',
},

});
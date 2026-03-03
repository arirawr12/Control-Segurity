import React from 'react'; 
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {

  return (
    <View style={styles.container}>

      {/* HEADER: LOGO + TITULO ARRIBA IZQUIERDA */}
      <View style={styles.header}>
        <Image
          source={require('@/assets\images/image/logo.jpeg')} // tu logo
          style={styles.appLogo}
        />
        <Text style={styles.title}>CONTROL-SEGURITY</Text>
      </View>

      {/* MENSAJE CENTRAL */}
      <Text style={styles.welcome}>Bienvenido al sistema</Text>

      {/* BOTON CREAR CUENTA */}
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
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100, // espacio para el header
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 20,
  },

  appLogo: {
    width: 35,
    height: 35,
    marginRight: 10,
  },

  title: {
    color: '#FF0000',
    fontSize: 24,
    fontWeight: 'bold',
  },

  welcome: {
    color: '#FF0000',
    fontSize: 18,
    marginBottom: 40,
    textAlign: 'center',
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
    textAlign: 'center',
  },
});
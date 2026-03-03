
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* HEADER: LOGO + TITULO ARRIBA IZQUIERDA */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logoo.jpeg')}
          style={styles.logo}
        />
      </View>

      {/* MENSAJE CENTRAL */}
      <Text style={styles.title}>Bienvenido a Control Segurity</Text>

      {/* BOTÓN CREAR CUENTA */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/register')}
      >
        <Text style={styles.buttonText}>Registrarse</Text>
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
    paddingTop: 80,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 20,
  },

 logo: {
  width: 120,        // ancho grande
  height: 120,       // alto grande
  resizeMode: 'contain', // mantiene proporción de la imagen
  position: 'absolute',  // lo colocamos arriba
  top: 40,               // distancia desde el borde superior
  left: 20,              // distancia desde el borde izquierdo
}

  appName: {
    color: '#FF0000',
    fontSize: 24,
    fontWeight: 'bold',
  },

  title: {
    color: '#FF0000',
    fontSize: 24,
    fontWeight: '600',
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
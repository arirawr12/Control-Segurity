import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* HEADER: TITULO ARRIBA IZQUIERDA */}
      <View style={styles.header}>
        <Text style={styles.appName}>Control-Segurity</Text>
      </View>

      {/* MENSAJE CENTRAL */}
      <Text style={styles.title}>Bienvenido al sistema</Text>

      {/* BOTÓN CREAR CUENTA */}
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
    paddingTop: 80, // espacio para el header
  },

  header: {
    position: 'absolute',
    top: 40,
    left: 20,
  },

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
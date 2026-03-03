import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* HEADER CON NOMBRE DE LA APP E IMAGEN */}
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/partial-react-logo.png')} // tu logo pequeño
          style={styles.appLogo}
        />
        <Text style={styles.appName}>Control-Segurity</Text>
      </View>

      {/* MENSAJE PRINCIPAL */}
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
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80, // deja espacio para header
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

  appName: {
    color: '#FF0000',
    fontSize: 20,
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
}
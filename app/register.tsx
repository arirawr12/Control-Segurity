import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';

export default function RegisterScreen() {
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const handleRegister = () => {
  if (!name || !email || !password) {
    Alert.alert('Error', 'Todos los campos son obligatorios');
    return;
  }

  Alert.alert('Cuenta creada', `Bienvenido, ${name}!`);

  // Enviamos el nombre al Home usando query params
  router.replace({
    pathname: '/',
    params: { userName: name },
  });
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>

      

      <TextInput
        placeholder="Nombre"
        placeholderTextColor="#888"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Correo electrónico"
        placeholderTextColor="#888"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#888"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity 
  style={styles.button}
  onPress={() => router.back()}
>
  <Text style={styles.buttonText}>Regresar</Text>
</TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 30,
  },
  title: {
    color: '#FF0000',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#111',
    color: '#FF0000',
    borderWidth: 1,
    borderColor: '#FF0000',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
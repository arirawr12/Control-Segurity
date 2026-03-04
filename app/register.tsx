import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';

export default function RegisterScreen() {
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {

    // VALIDAR CAMPOS VACÍOS
    if (!name || !email || !phone || !password) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    // VALIDAR NOMBRE (mínimo 8 caracteres)
    if (name.length < 8) {
      Alert.alert('Error', 'El nombre debe tener al menos 8 caracteres');
      return;
    }

    // VALIDAR CORREO (solo gmail)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'El correo debe ser válido y terminar en @gmail.com');
      return;
    }

    // VALIDAR TELÉFONO (exactamente 10 números)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      Alert.alert('Error', 'El teléfono debe tener exactamente 10 dígitos');
      return;
    }

    // VALIDAR CONTRASEÑA
    if (password.length < 6) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // SI TODO ESTÁ CORRECTO
    Alert.alert('Cuenta creada', `Bienvenido, ${name}!`);

    router.replace({
      pathname: '/',
      params: { userName: name },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>

      <TextInput
        placeholder="Nombre (mínimo 8 caracteres)"
        placeholderTextColor="#888"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Correo electrónico (@gmail.com)"
        placeholderTextColor="#888"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Teléfono (10 dígitos)"
        placeholderTextColor="#888"
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
        maxLength={10}
      />

      <TextInput
        placeholder="Contraseña (mínimo 6 caracteres)"
        placeholderTextColor="#888"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
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
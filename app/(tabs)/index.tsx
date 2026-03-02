import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔐 CONTROL-SEGURITY</Text>
      <Text style={styles.welcome}>Bienvenido al sistema</Text>
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
});
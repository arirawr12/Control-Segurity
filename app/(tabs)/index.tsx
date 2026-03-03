import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(glowAnim, {
          toValue: 0.3,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  // Interpolamos el valor para sombra y color
  const animatedStyle = {
    textShadowRadius: glowAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [5, 20],
    }),
    textShadowColor: '#FF0000',
    color: glowAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['#FF4C4C', '#FF0000'],
    }),
  };

  return (
    <View style={styles.container}>

      {/* HEADER CON LOGO Y NOMBRE ANIMADO */}
      <View style={styles.header}>
        <Animated.Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={[styles.appLogo, { opacity: glowAnim }]}
        />
        <Animated.Text style={[styles.appName, animatedStyle]}>
          Control-Segurity
        </Animated.Text>
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
}
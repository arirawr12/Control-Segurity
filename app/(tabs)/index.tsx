import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return ( <ParallaxScrollView
    headerBackgroundColor={{ light: '#0F2027', dark: '#0F2027' }}
    headerImage={
      <Image
        source={require('@/assets/images/partial-react-logo.png')}
        style={styles.reactLogo}
      />
    }>

    {/* TÍTULO PRINCIPAL */}
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">🔐 Control-Segurity</ThemedText>
      <ThemedText>Monitoreo y Control de Accesos</ThemedText>
    </ThemedView>

    {/* SECCIÓN 1 - ACCESOS */}
    <ThemedView style={styles.stepContainer}>
      <ThemedText type="subtitle">📋 Registro de Accesos</ThemedText>
      <ThemedText>
        Administra entradas y salidas del personal en tiempo real.
      </ThemedText>
    </ThemedView>

    {/* SECCIÓN 2 - USUARIOS */}
    <ThemedView style={styles.stepContainer}>
      <ThemedText type="subtitle">👤 Gestión de Usuarios</ThemedText>
      <ThemedText>
        Crea, edita y controla permisos de usuarios (Admin, Guardia, Empleado).
      </ThemedText>
    </ThemedView>

    {/* SECCIÓN 3 - REPORTES */}
    <ThemedView style={styles.stepContainer}>
      <ThemedText type="subtitle">📊 Reportes</ThemedText>
      <ThemedText>
        Visualiza reportes diarios, semanales y mensuales de actividad.
      </ThemedText>
    </ThemedView>

  </ParallaxScrollView>
);

}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

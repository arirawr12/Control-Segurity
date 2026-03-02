import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
return (
  <ParallaxScrollView
    headerBackgroundColor={{ light: '#000000', dark: '#000000' }}
    style={{ backgroundColor: '#000000' }}
  >
    <ThemedView style={styles.container}>
      
      <ThemedText style={styles.title}>
        🔐 CONTROL-SEGURITY
      </ThemedText>

      <ThemedText style={styles.subtitle}>
        Sistema de Monitoreo y Control de Accesos
      </ThemedText>

      <ThemedText style={styles.welcome}>
        Bienvenido al sistema
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
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000000',
  padding: 20,
},

title: {
  color: '#FF0000',
  fontSize: 32,
  fontWeight: 'bold',
  letterSpacing: 2,
  marginBottom: 10,
  textShadowColor: '#8B0000',
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: 15,
},

subtitle: {
  color: '#FF4C4C',
  fontSize: 16,
  marginBottom: 30,
  textAlign: 'center',
},

welcome: {
  color: '#FF0000',
  fontSize: 20,
  fontWeight: '600',
  textAlign: 'center',
  marginTop: 20,
}
});

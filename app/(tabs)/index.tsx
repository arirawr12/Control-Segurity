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
});

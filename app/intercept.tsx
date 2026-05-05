import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { SoftButton } from '../components/SoftButton';
import { PathLogo } from '../components/PathLogo';
import { FooterIllustration } from '../components/FooterIllustration';

const { height } = Dimensions.get('window');

export default function Intercept() {
  const router = useRouter();

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: '#F9F7F2' }}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <PathLogo size={100} />
          </View>
          
          <Text style={styles.serifText}>
            Take 10 seconds{"\n"}before you scroll.
          </Text>
          
          <Text style={styles.bodyText}>
            A gentle pause can change{"\n"}your entire day.
          </Text>

          <View style={styles.buttonGap}>
            <SoftButton 
              title="Pause & Pray" 
              onPress={() => router.push('/player')} 
            />
            <SoftButton 
              title="Skip for now" 
              variant="secondary"
              onPress={() => router.push('/dashboard')} 
              style={{ borderWidth: 0 }}
              textStyle={{ color: 'rgba(58, 82, 68, 0.5)' }}
            />
          </View>
        </View>

        <FooterIllustration />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    marginTop: -height * 0.1, // Slight pull up for better balance
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  serifText: {
    fontFamily: 'serif',
    fontSize: 32,
    color: '#3A5244',
    textAlign: 'center',
    lineHeight: 40,
    marginBottom: 24,
  },
  bodyText: {
    fontSize: 18,
    color: 'rgba(58, 82, 68, 0.6)',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 64,
  },
  buttonGap: {
    gap: 16,
  }
});

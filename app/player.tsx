import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { FooterIllustration } from '../components/FooterIllustration';

export default function PrayerPlayer() {
  const router = useRouter();

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>let's pray</Text>
          <Text style={styles.subtitle}>tap 'i've prayed today 🙏' once the{"\n"}prayer is complete</Text>
          
          <View style={styles.prayerBox}>
            <Text style={styles.prayerText}>
              Your word says that if I am weary, I can come to You and find rest (Matthew 11:28).{"\n\n"}
              I hold on to Your promise that if I don't give up, I will see a harvest at the right time (Galatians 6:9).{"\n\n"}
              Teach me to run with perseverance the race You have set before me (Hebrews 12:1).{"\n\n"}
              I walk by faith today and trust that You will provide everything I need.{"\n\n"}
              Amen.
            </Text>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.orangeButton}
            onPress={() => router.push('/reflection')}
          >
            <Text style={styles.orangeButtonText}>i've prayed today 🙏</Text>
          </TouchableOpacity>
        </View>

        <FooterIllustration />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { paddingHorizontal: 32, paddingTop: 60, paddingBottom: 100 },
  title: { fontSize: 48, fontWeight: 'bold', color: '#000', textAlign: 'center', marginBottom: 24 },
  subtitle: { fontSize: 18, color: 'rgba(0,0,0,0.4)', textAlign: 'center', marginBottom: 48, lineHeight: 24 },
  prayerBox: { marginTop: 20 },
  prayerText: { fontSize: 22, color: '#000', fontWeight: '500', lineHeight: 32 },
  
  footer: { paddingHorizontal: 32, paddingBottom: 48 },
  orangeButton: { backgroundColor: '#F2994A', borderRadius: 25, height: 65, alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 0, elevation: 4 },
  orangeButtonText: { color: '#FFF', fontSize: 20, fontWeight: 'bold' }
});

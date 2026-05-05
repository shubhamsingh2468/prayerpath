import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { SoftButton } from '../components/SoftButton';
import { PathLogo } from '../components/PathLogo';
import { FooterIllustration } from '../components/FooterIllustration';
import { Check } from 'lucide-react-native';

const { height } = Dimensions.get('window');

const APPS = [
  { id: 'tiktok', name: 'TikTok', icon: 'https://cdn-icons-png.flaticon.com/512/3046/3046121.png' },
  { id: 'instagram', name: 'Instagram', icon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png' },
  { id: 'youtube', name: 'YouTube', icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png' },
  { id: 'facebook', name: 'Facebook', icon: 'https://cdn-icons-png.flaticon.com/512/124/124010.png' },
  { id: 'twitter', name: 'X / Twitter', icon: 'https://cdn-icons-png.flaticon.com/512/3256/3256013.png' },
  { id: 'snapchat', name: 'Snapchat', icon: 'https://cdn-icons-png.flaticon.com/512/174/174870.png' },
  { id: 'safari', name: 'Safari / browser', icon: 'https://cdn-icons-png.flaticon.com/512/1051/1051264.png' },
];

export default function AppSelection() {
  const router = useRouter();
  const [selectedApps, setSelectedApps] = useState<string[]>(['tiktok', 'instagram', 'youtube']);

  const toggleApp = (id: string) => {
    setSelectedApps(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: '#F9F7F2' }}>
      <View style={{ flex: 1 }}>
        {/* Pagination Header */}
        <View style={styles.header}>
          {[0, 1, 2, 3].map((i) => (
            <View 
              key={i} 
              style={[
                styles.dot, 
                { backgroundColor: i === 3 ? '#3A5244' : 'rgba(58, 82, 68, 0.2)' },
                i === 3 ? { width: 32 } : { width: 24 }
              ]} 
            />
          ))}
        </View>

        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 32, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: 'center', marginBottom: 24 }}>
            <PathLogo size={80} />
            <Text style={styles.serifText}>
              Which apps would you like{"\n"}Prayer Path to interrupt?
            </Text>
            <Text style={styles.subtitle}>
              We'll gently remind you to pause and turn to prayer instead.
            </Text>
          </View>

          <Text style={styles.sectionTitle}>
            Select the apps you want to limit
          </Text>

          <View style={{ gap: 12, marginBottom: 40 }}>
            {APPS.map(app => (
              <TouchableOpacity 
                key={app.id}
                onPress={() => toggleApp(app.id)}
                style={styles.appItem}
                activeOpacity={0.7}
              >
                <Image source={{ uri: app.icon }} style={styles.appIcon} />
                <Text style={styles.appName}>{app.name}</Text>
                <View 
                  style={[
                    styles.checkbox, 
                    selectedApps.includes(app.id) ? styles.checkboxChecked : styles.checkboxUnchecked
                  ]}
                >
                  {selectedApps.includes(app.id) && <Check size={16} color="white" strokeWidth={3} />}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <SoftButton 
            title="Continue" 
            onPress={() => router.push('/intercept')} 
            disabled={selectedApps.length === 0}
          />
          <Text style={styles.footerNote}>
             🔒 You can change this anytime in settings.
          </Text>
        </ScrollView>

        <FooterIllustration />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    gap: 8,
  },
  dot: {
    height: 6,
    borderRadius: 3,
  },
  serifText: {
    fontFamily: 'serif',
    fontSize: 28,
    color: '#3A5244',
    textAlign: 'center',
    marginTop: 24,
    lineHeight: 34,
  },
  subtitle: {
    color: 'rgba(58, 82, 68, 0.5)',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 22,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    color: 'rgba(58, 82, 68, 0.4)',
    fontWeight: 'bold',
    fontSize: 10,
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  appItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(58, 82, 68, 0.05)',
  },
  appIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginRight: 16,
  },
  appName: {
    flex: 1,
    fontSize: 18,
    color: '#3A5244',
    fontWeight: '500',
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#3A5244',
    borderColor: '#3A5244',
  },
  checkboxUnchecked: {
    borderColor: 'rgba(58, 82, 68, 0.2)',
  },
  footerNote: {
    textAlign: 'center',
    color: 'rgba(58, 82, 68, 0.4)',
    fontSize: 12,
    marginTop: 16,
    marginBottom: 20,
  }
});

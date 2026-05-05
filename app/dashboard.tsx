import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { PathLogo } from '../components/PathLogo';
import { FooterIllustration } from '../components/FooterIllustration';

export default function Dashboard() {
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: '#F9F7F2' }}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
           <PathLogo size={60} />
           <Text style={styles.username}>shubham singh</Text>
        </View>

        <View style={styles.impactContainer}>
           <Text style={{ fontSize: 100, marginBottom: 24 }}>🌟</Text>
           <Text style={styles.impactText}>
              so far, you've saved <Text style={{ color: '#F2994A' }}>14 days</Text> of your life by choosing prayer over scrolling.
           </Text>
        </View>

        <View style={styles.statsGrid}>
           <View style={styles.statCard}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Today's Prayers</Text>
           </View>
           <View style={styles.statCard}>
              <Text style={styles.statValue}>8h</Text>
              <Text style={styles.statLabel}>Time Saved</Text>
           </View>
        </View>

        <TouchableOpacity style={styles.actionCard}>
           <Text style={styles.actionText}>View your full journey path →</Text>
        </TouchableOpacity>
      </ScrollView>

      <FooterIllustration />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 32, paddingTop: 60, paddingBottom: 100 },
  header: { alignItems: 'center', marginBottom: 60 },
  username: { fontSize: 24, fontWeight: 'bold', color: '#000', marginTop: 16 },
  impactContainer: { alignItems: 'center', marginBottom: 60 },
  impactText: { fontSize: 32, fontWeight: 'bold', color: '#000', textAlign: 'center', lineHeight: 44 },
  
  statsGrid: { flexDirection: 'row', gap: 16, marginBottom: 24 },
  statCard: { flex: 1, backgroundColor: '#FFF', borderRadius: 20, padding: 20, borderWidth: 2, borderColor: '#000', alignItems: 'center' },
  statValue: { fontSize: 32, fontWeight: 'bold', color: '#3A5244' },
  statLabel: { fontSize: 12, color: 'rgba(0,0,0,0.4)', fontWeight: '600', marginTop: 4 },
  
  actionCard: { backgroundColor: '#3A5244', borderRadius: 20, padding: 24, alignItems: 'center' },
  actionText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});

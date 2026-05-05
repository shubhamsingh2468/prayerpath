import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useRouter } from 'expo-router';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { SoftButton } from '../components/SoftButton';
import { SoftCard } from '../components/SoftCard';
import { PathLogo } from '../components/PathLogo';
import { FooterIllustration } from '../components/FooterIllustration';
import { Check, Lock, Leaf } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export default function Onboarding() {
  const router = useRouter();
  const pagerRef = useRef<PagerView>(null);
  const [activePage, setActivePage] = useState(0);
  const [mode, setMode] = useState<'soft' | 'strict'>('soft');
  
  // Quiz State
  const [ageRange, setAgeRange] = useState('');
  const [usage, setUsage] = useState('');

  const nextStep = () => {
    if (activePage < 5) {
      pagerRef.current?.setPage(activePage + 1);
    } else {
      router.push('/app-selection');
    }
  };

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: '#F9F7F2' }}>
      <View style={styles.mainContainer}>
        {/* Pagination Header */}
        <View style={styles.header}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <View 
              key={i} 
              style={[
                styles.dot, 
                { backgroundColor: activePage === i ? '#3A5244' : 'rgba(58, 82, 68, 0.1)' },
                activePage === i ? { width: 24 } : { width: 12 }
              ]} 
            />
          ))}
        </View>

        <View style={{ flex: 1 }}>
          <PagerView 
            ref={pagerRef}
            style={styles.pager} 
            initialPage={0}
            onPageSelected={(e) => setActivePage(e.nativeEvent.position)}
          >
            {/* Slide 1: Welcome */}
            <View key="0" style={styles.slide}>
              <View style={{ alignItems: 'center', marginTop: 40 }}>
                <PathLogo size={140} />
                <Text style={styles.serifText}>
                  Welcome to{"\n"}Prayer Path
                </Text>
                <View style={styles.divider} />
                <Text style={styles.bodyText}>
                  A calmer way to stop{"\n"}doom scrolling and{"\n"}return to prayer.
                </Text>
              </View>
            </View>

            {/* Slide 2: Age Quiz */}
            <View key="1" style={styles.slide}>
              <View style={styles.slideContent}>
                 <Text style={styles.quizTitle}>how old are you?</Text>
                 <View style={styles.quizOptions}>
                   {['14-24', '25-34', '35-44', '45-54', '55+'].map(range => (
                     <TouchableOpacity 
                       key={range} 
                       onPress={() => setAgeRange(range)}
                       style={[styles.quizCard, ageRange === range && styles.quizCardSelected]}
                     >
                       <Text style={styles.quizText}>{range}</Text>
                     </TouchableOpacity>
                   ))}
                 </View>
              </View>
            </View>

            {/* Slide 3: Phone Usage Quiz */}
            <View key="2" style={styles.slide}>
              <View style={styles.slideContent}>
                 <Text style={styles.quizTitle}>how long are you on your phone each day?</Text>
                 <Text style={styles.quizSubtitle}>be honest</Text>
                 <View style={styles.quizOptions}>
                   {['1-2 hours', '2-3 hours', '3-4 hours', '4-5 hours', '5-6 hours', '6+ hours'].map(time => (
                     <TouchableOpacity 
                       key={time} 
                       onPress={() => setUsage(time)}
                       style={[styles.quizCard, usage === time && styles.quizCardSelected]}
                     >
                       <Text style={styles.quizText}>{time}</Text>
                     </TouchableOpacity>
                   ))}
                 </View>
              </View>
            </View>

            {/* Slide 4: Impact Screen */}
            <View key="3" style={styles.slide}>
              <View style={[styles.slideContent, { justifyContent: 'center', alignItems: 'center' }]}>
                 <Text style={{ fontSize: 80, marginBottom: 40 }}>🤯</Text>
                 <Text style={styles.impactText}>
                    at this rate you're going to spend <Text style={{ color: '#F2994A' }}>9 years</Text> of your life on your phone.
                 </Text>
              </View>
            </View>

            {/* Slide 5: Mode Selection */}
            <View key="4" style={styles.slide}>
              <View style={styles.slideContent}>
                <View style={{ alignItems: 'center', marginBottom: 24 }}>
                  <PathLogo size={80} />
                  <Text style={[styles.serifText, { fontSize: 28, marginTop: 24 }]}>
                    How would you like{"\n"}Prayer Path to work?
                  </Text>
                </View>

                <View style={{ gap: 12 }}>
                  <TouchableOpacity onPress={() => setMode('soft')} activeOpacity={0.8}>
                    <SoftCard style={[styles.modeCard, mode === 'soft' && styles.selectedCard]}>
                      <View style={styles.modeRow}>
                        <View style={styles.iconCircle}><Leaf size={24} color="#3A5244" /></View>
                        <View style={{ flex: 1 }}>
                          <View style={styles.modeHeader}>
                            <Text style={styles.modeTitle}>Soft Mode</Text>
                            {mode === 'soft' && <View style={styles.checkCircle}><Check size={14} color="white" /></View>}
                          </View>
                          <Text style={styles.modeDesc}>Gentle reminders to pause and pray.</Text>
                        </View>
                      </View>
                    </SoftCard>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => setMode('strict')} activeOpacity={0.8}>
                    <SoftCard style={[styles.modeCard, mode === 'strict' && styles.selectedCard]}>
                      <View style={styles.modeRow}>
                        <View style={styles.iconCircle}><Lock size={24} color="#3A5244" /></View>
                        <View style={{ flex: 1 }}>
                          <View style={styles.modeHeader}>
                            <Text style={styles.modeTitle}>Strict Mode</Text>
                            {mode === 'strict' && <View style={styles.checkCircle}><Check size={14} color="white" /></View>}
                          </View>
                          <Text style={styles.modeDesc}>Complete a prayer before unlocking.</Text>
                        </View>
                      </View>
                    </SoftCard>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Slide 6: First Step (Prayer) */}
            <View key="5" style={styles.slide}>
               <View style={styles.slideContent}>
                 <Text style={styles.quizTitle}>Let's take your{"\n"}first step together.</Text>
                 <SoftCard style={styles.prayerCard}>
                    <Text style={styles.prayerText}>
                      Heavenly Father, help me to pause, turn away from distractions, and draw near to You.{"\n\n"}
                      Guide my mind, calm my heart, and fill me with Your peace.
                    </Text>
                 </SoftCard>
               </View>
            </View>
          </PagerView>
        </View>

        {/* Persistent Bottom Action */}
        <View style={styles.footerAction}>
          <TouchableOpacity 
            style={[styles.orangeButton, (activePage === 1 && !ageRange) || (activePage === 2 && !usage) ? { opacity: 0.5 } : {}]}
            onPress={nextStep}
            disabled={(activePage === 1 && !ageRange) || (activePage === 2 && !usage)}
          >
            <Text style={styles.orangeButtonText}>continue</Text>
          </TouchableOpacity>
        </View>

        <FooterIllustration />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 24, gap: 8 },
  dot: { height: 6, borderRadius: 3 },
  pager: { flex: 1 },
  slide: { flex: 1, paddingHorizontal: 32 },
  slideContent: { flex: 1, paddingTop: 40 },
  serifText: { fontFamily: 'serif', fontSize: 36, color: '#3A5244', textAlign: 'center', marginTop: 40, lineHeight: 44 },
  divider: { width: 48, height: 1, backgroundColor: 'rgba(197, 177, 141, 0.4)', alignSelf: 'center', marginVertical: 32 },
  bodyText: { fontSize: 20, color: 'rgba(58, 82, 68, 0.7)', textAlign: 'center', lineHeight: 30 },
  
  quizTitle: { fontSize: 32, fontWeight: 'bold', color: '#000', marginBottom: 8 },
  quizSubtitle: { fontSize: 18, color: 'rgba(0,0,0,0.3)', marginBottom: 24 },
  quizOptions: { gap: 12 },
  quizCard: { backgroundColor: '#FFF', borderRadius: 20, padding: 20, borderWidth: 2, borderColor: '#000', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 1, shadowRadius: 0, elevation: 4 },
  quizCardSelected: { backgroundColor: '#F2994A20' },
  quizText: { fontSize: 20, fontWeight: '600', color: '#000' },
  
  impactText: { fontSize: 28, fontWeight: 'bold', color: '#000', textAlign: 'center', lineHeight: 40 },
  
  modeCard: { borderWidth: 2, borderColor: 'transparent' },
  selectedCard: { borderColor: 'rgba(58, 82, 68, 0.4)' },
  modeRow: { flexDirection: 'row', alignItems: 'start' },
  iconCircle: { width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(58, 82, 68, 0.1)', alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  modeHeader: { flexDirection: 'row', justifyContent: 'between', alignItems: 'center', marginBottom: 4 },
  modeTitle: { fontSize: 20, fontWeight: '600', color: '#3A5244', flex: 1 },
  checkCircle: { backgroundColor: '#3A5244', borderRadius: 10, padding: 2 },
  modeDesc: { color: 'rgba(58, 82, 68, 0.6)', lineHeight: 20 },
  
  prayerCard: { paddingVertical: 40, backgroundColor: '#FFF', marginTop: 24 },
  prayerText: { fontSize: 18, color: '#000', textAlign: 'center', fontStyle: 'italic', lineHeight: 28 },
  
  footerAction: { paddingHorizontal: 32, paddingBottom: 48 },
  orangeButton: { backgroundColor: '#F2994A', borderRadius: 25, height: 60, alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 0, elevation: 4 },
  orangeButtonText: { color: '#FFF', fontSize: 20, fontWeight: 'bold' }
});

import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useRouter } from 'expo-router';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { PathLogo } from '../components/PathLogo';
import { Check, Lock, Leaf, ChevronRight, ArrowLeft } from 'lucide-react-native';
import { SoftCard } from '../components/SoftCard';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
  const router = useRouter();
  const pagerRef = useRef<PagerView>(null);
  const [activePage, setActivePage] = useState(0);
  const [mode, setMode] = useState<'soft' | 'strict'>('soft');
  
  // Quiz & App Selection State
  const [ageRange, setAgeRange] = useState('');
  const [usage, setUsage] = useState('');
  const [selectedApps, setSelectedApps] = useState<string[]>(['TikTok', 'Instagram', 'YouTube']);

  const APPS = [
    { id: 'TikTok', name: 'TikTok', color: '#000000' },
    { id: 'Instagram', name: 'Instagram', color: '#E1306C' },
    { id: 'YouTube', name: 'YouTube', color: '#FF0000' },
    { id: 'Facebook', name: 'Facebook', color: '#1877F2' },
    { id: 'X', name: 'X / Twitter', color: '#000000' },
    { id: 'Snapchat', name: 'Snapchat', color: '#FFFC00' },
    { id: 'Safari', name: 'Safari / browser', color: '#007AFF' },
  ];

  const toggleApp = (id: string) => {
    setSelectedApps(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const nextStep = () => {
    if (activePage < 6) {
      pagerRef.current?.setPage(activePage + 1);
    } else {
      router.replace('/(tabs)');
    }
  };

  const prevStep = () => {
    if (activePage > 0) {
      pagerRef.current?.setPage(activePage - 1);
    }
  };

  return (
    <ScreenWrapper className="px-8" useSafeArea={true}>
      <View style={{ flex: 1 }}>
        {/* Back Button */}
        <View className="absolute top-6 left-0 z-10">
          {activePage > 0 && (
            <TouchableOpacity onPress={prevStep} className="p-2">
              <ArrowLeft size={24} color="#2D4F36" />
            </TouchableOpacity>
          )}
        </View>
        {/* Pagination Header */}
        <View className="flex-row justify-center items-center py-6 gap-2">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <View 
              key={i} 
              className={`h-1.5 rounded-full ${activePage === i ? 'bg-primary w-6' : 'bg-primary/10 w-3'}`}
            />
          ))}
        </View>

        <PagerView 
          ref={pagerRef}
          style={{ flex: 1 }}
          initialPage={0}
          onPageSelected={(e) => setActivePage(e.nativeEvent.position)}
        >
          {/* Slide 1: Welcome */}
          <View key="0" className="flex-1 items-center justify-center">
            <PathLogo size={140} />
            <Text className="font-serif text-4xl text-primary text-center mt-10 leading-tight">
              Welcome to{"\n"}Prayer Path
            </Text>
            <View className="w-12 h-[1px] bg-primary/10 my-8" />
            <Text className="font-sans text-muted text-xl text-center leading-relaxed">
              A calmer way to stop{"\n"}doom scrolling and{"\n"}return to prayer.
            </Text>
          </View>

          {/* Slide 2: App Selection (NEW) */}
          <View key="1" className="flex-1">
            <View className="items-center mb-6">
              <PathLogo size={80} />
              <Text className="font-serif text-3xl text-primary text-center mt-6 leading-tight">
                Which apps would you like Prayer Path to interrupt?
              </Text>
              <Text className="font-sans text-muted text-center mt-2">
                We'll gently remind you to pause and turn to prayer instead.
              </Text>
            </View>

            <View className="mb-4">
              <Text className="font-sans-bold text-muted text-[10px] uppercase tracking-widest mb-4">
                Select the apps you want to limit
              </Text>
              <ScrollView showsVerticalScrollIndicator={false} className="h-[40%]">
                {APPS.map(app => (
                  <TouchableOpacity 
                    key={app.id} 
                    onPress={() => toggleApp(app.id)}
                    activeOpacity={0.7}
                    className="mb-3"
                  >
                    <SoftCard className={`p-4 py-3 flex-row items-center justify-between ${selectedApps.includes(app.id) ? 'border-primary/20' : 'bg-white/50 border-transparent'}`}>
                      <View className="flex-row items-center">
                        <View 
                          className="w-10 h-10 rounded-xl mr-4 items-center justify-center"
                          style={{ backgroundColor: app.color + '20' }}
                        >
                          <Text className="font-sans-bold text-primary text-xs">{app.name[0]}</Text>
                        </View>
                        <Text className="font-serif text-lg text-primary">{app.name}</Text>
                      </View>
                      <View className={`w-6 h-6 rounded-full items-center justify-center border ${selectedApps.includes(app.id) ? 'bg-primary border-primary' : 'border-primary/20'}`}>
                        {selectedApps.includes(app.id) && <Check size={14} color="white" />}
                      </View>
                    </SoftCard>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <Text className="font-sans text-muted text-center text-xs">
              🔒 You can change this anytime in settings.
            </Text>
          </View>

          {/* Slide 3: Age Quiz */}
          <View key="2" className="flex-1 pt-4">
            <Text className="font-serif text-3xl text-primary mb-2">How old are you?</Text>
            <Text className="font-sans text-muted text-lg mb-8">This helps us tailor your experience.</Text>
            
            <View className="gap-3">
              {['14-24', '25-34', '35-44', '45-54', '55+'].map(range => (
                <TouchableOpacity 
                  key={range} 
                  onPress={() => setAgeRange(range)}
                  activeOpacity={0.7}
                >
                  <SoftCard className={`p-5 ${ageRange === range ? 'border-2 border-primary bg-primary/5' : 'bg-white border-primary/5'}`}>
                    <Text className={`font-sans-bold text-lg ${ageRange === range ? 'text-primary' : 'text-primary/60'}`}>{range}</Text>
                  </SoftCard>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Slide 4: Phone Usage Quiz */}
          <View key="3" className="flex-1 pt-4">
            <Text className="font-serif text-3xl text-primary mb-2">How long are you on your phone each day?</Text>
            <Text className="font-sans text-muted text-lg mb-8 italic">Be honest with yourself.</Text>
            
            <View className="gap-3">
              {['1-2 hours', '2-3 hours', '3-4 hours', '4-5 hours', '5-6 hours', '6+ hours'].map(time => (
                <TouchableOpacity 
                  key={time} 
                  onPress={() => setUsage(time)}
                  activeOpacity={0.7}
                >
                  <SoftCard className={`p-5 ${usage === time ? 'border-2 border-primary bg-primary/5' : 'bg-white border-primary/5'}`}>
                    <Text className={`font-sans-bold text-lg ${usage === time ? 'text-primary' : 'text-primary/60'}`}>{time}</Text>
                  </SoftCard>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Slide 5: Impact Screen */}
          <View key="4" className="flex-1 items-center justify-center">
            <Text className="text-8xl mb-10">🤯</Text>
            <Text className="font-serif text-3xl text-primary text-center leading-tight">
              At this rate, you're going to spend <Text className="text-[#F2994A]">9 years</Text> of your life on your phone.
            </Text>
            <Text className="font-sans text-muted text-lg text-center mt-6">
              Small changes today can save years of your life.
            </Text>
          </View>

          {/* Slide 6: Mode Selection */}
          <View key="5" className="flex-1 pt-4">
            <View className="items-center mb-8">
              <PathLogo size={80} />
              <Text className="font-serif text-2xl text-primary text-center mt-6">
                How would you like{"\n"}Prayer Path to work?
              </Text>
            </View>

            <View className="gap-4">
              <TouchableOpacity onPress={() => setMode('soft')} activeOpacity={0.8}>
                <SoftCard className={`p-5 ${mode === 'soft' ? 'border-2 border-primary' : 'bg-white'}`}>
                  <View className="flex-row">
                    <View className="w-12 h-12 rounded-full bg-primary/10 items-center justify-center mr-4">
                      <Leaf size={24} color="#2D4F36" />
                    </View>
                    <View className="flex-1">
                      <View className="flex-row justify-between items-center mb-1">
                        <Text className="font-sans-bold text-lg text-primary">Soft Mode</Text>
                        {mode === 'soft' && <View className="bg-primary rounded-full p-1"><Check size={12} color="white" /></View>}
                      </View>
                      <Text className="font-sans text-muted text-sm">Gentle reminders to pause and pray.</Text>
                    </View>
                  </View>
                </SoftCard>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setMode('strict')} activeOpacity={0.8}>
                <SoftCard className={`p-5 ${mode === 'strict' ? 'border-2 border-primary' : 'bg-white'}`}>
                  <View className="flex-row">
                    <View className="w-12 h-12 rounded-full bg-primary/10 items-center justify-center mr-4">
                      <Lock size={24} color="#2D4F36" />
                    </View>
                    <View className="flex-1">
                      <View className="flex-row justify-between items-center mb-1">
                        <Text className="font-sans-bold text-lg text-primary">Strict Mode</Text>
                        {mode === 'strict' && <View className="bg-primary rounded-full p-1"><Check size={12} color="white" /></View>}
                      </View>
                      <Text className="font-sans text-muted text-sm">Complete a prayer before unlocking.</Text>
                    </View>
                  </View>
                </SoftCard>
              </TouchableOpacity>
            </View>
          </View>

          {/* Slide 7: First Step */}
          <View key="6" className="flex-1 pt-10">
            <Text className="font-serif text-3xl text-primary mb-6">Let's take your{"\n"}first step together.</Text>
            <SoftCard className="bg-white p-8 py-12">
              <Text className="font-serif text-xl text-primary text-center italic leading-relaxed">
                "Heavenly Father, help me to pause, turn away from distractions, and draw near to You.{"\n\n"}
                Guide my mind, calm my heart, and fill me with Your peace."
              </Text>
            </SoftCard>
          </View>
        </PagerView>

        {/* Persistent Bottom Action */}
        <View className="pb-12 pt-6">
          <TouchableOpacity 
            className={`bg-primary h-16 rounded-2xl items-center justify-center flex-row shadow-lg ${
              (activePage === 2 && !ageRange) || (activePage === 3 && !usage) ? 'opacity-50' : ''
            }`}
            onPress={nextStep}
            disabled={(activePage === 2 && !ageRange) || (activePage === 3 && !usage)}
          >
            <Text className="text-white font-sans-bold text-xl mr-2">Continue</Text>
            <ChevronRight size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}

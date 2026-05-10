import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { PathLogo } from '../../components/PathLogo';
import { ArrowLeft, Coffee, Activity, Brain, Repeat, Ghost } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

const TRIGGERS = [
  { id: 'bored', label: 'Bored', icon: Coffee },
  { id: 'anxious', label: 'Anxious', icon: Activity },
  { id: 'overthinking', label: 'Overthinking', icon: Brain },
  { id: 'habit', label: 'Habit', icon: Repeat },
  { id: 'avoiding', label: 'Avoiding something', icon: Ghost },
];

export default function InterceptScreen() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(10);
  const [selectedTrigger, setSelectedTrigger] = useState('');

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [seconds]);

  return (
    <View className="flex-1">
      <ImageBackground 
        source={require('../../assets/social_icons_blurred_bg_1778026401193.png')}
        className="flex-1"
        resizeMode="cover"
      >
        <View style={styles.overlay} className="flex-1 px-8 justify-between pt-20 pb-12">
          <TouchableOpacity 
            onPress={() => router.replace('/(tabs)')} 
            className="absolute top-14 left-6 z-10 p-2"
          >
            <ArrowLeft size={24} color="white" />
          </TouchableOpacity>

          <View className="items-center">
            <View className="relative items-center justify-center mb-8">
              {/* Glowing circle timer */}
              <View className="w-40 h-40 rounded-full border-2 border-white/20 items-center justify-center">
                <View 
                  className="absolute w-44 h-44 rounded-full border-2 border-white/10" 
                  style={{ transform: [{ scale: 1.1 }] }} 
                />
                <Text className="text-white font-serif text-6xl">{seconds}</Text>
              </View>
            </View>

            <Text className="font-serif text-3xl text-white text-center mb-4">
              Take 10 seconds before you scroll.
            </Text>
            
            <Text className="font-sans text-white/80 text-lg text-center mb-12">
              What pulled you here?
            </Text>

            <View className="flex-row flex-wrap justify-center gap-3">
              {TRIGGERS.map(trigger => (
                <TouchableOpacity 
                  key={trigger.id}
                  onPress={() => setSelectedTrigger(trigger.id)}
                  className={`flex-row items-center px-4 py-2.5 rounded-full border ${
                    selectedTrigger === trigger.id 
                      ? 'bg-white border-white' 
                      : 'bg-white/10 border-white/20'
                  }`}
                >
                  <trigger.icon 
                    size={18} 
                    color={selectedTrigger === trigger.id ? '#3E5846' : 'white'} 
                    className="mr-2"
                  />
                  <Text className={`font-sans text-sm ${
                    selectedTrigger === trigger.id ? 'text-[#3E5846]' : 'text-white'
                  }`}>
                    {trigger.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View className="gap-4">
            <TouchableOpacity 
              className={`bg-[#F9F7F2] p-5 rounded-3xl items-center justify-center ${
                seconds > 0 || !selectedTrigger ? 'opacity-50' : ''
              }`}
              onPress={() => router.push('/intercept/prayer-card')}
              disabled={seconds > 0 || !selectedTrigger}
            >
              <Text className="text-[#3E5846] font-sans-bold text-lg">
                {seconds > 0 ? `Wait ${seconds}s` : 'Continue to App'}
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              className="items-center"
              onPress={() => router.replace('/(tabs)')}
            >
              <Text className="text-white/40 font-sans text-base">Skip for now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(62, 88, 70, 0.85)', // Deep Sage Green with opacity
  },
});

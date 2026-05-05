import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { PathLogo } from '../../components/PathLogo';
import { ChevronRight, ArrowLeft } from 'lucide-react-native';

const { height } = Dimensions.get('window');

export default function InterceptScreen() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedTrigger, setSelectedTrigger] = useState('');

  const TRIGGERS = [
    { id: 'bored', label: 'Bored' },
    { id: 'anxious', label: 'Anxious' },
    { id: 'overthinking', label: 'Overthinking' },
    { id: 'habit', label: 'Habit' },
    { id: 'avoiding', label: 'Avoiding something' },
  ];

  if (step === 1) {
    return (
      <ScreenWrapper className="flex-1 justify-center px-10">
        <TouchableOpacity 
          onPress={() => router.replace('/(tabs)')} 
          className="absolute top-6 left-6 z-10 p-2"
        >
          <ArrowLeft size={24} color="#2D4F36" />
        </TouchableOpacity>

        <View className="items-center mb-12">
          <PathLogo size={100} />
        </View>
        
        <Text className="font-serif text-4xl text-primary text-center leading-tight mb-6">
          Take 10 seconds{"\n"}before you scroll.
        </Text>
        
        <Text className="font-sans text-muted text-lg text-center leading-relaxed mb-16">
          A gentle pause can change{"\n"}your entire day.
        </Text>

        <TouchableOpacity 
          className="bg-primary p-5 rounded-2xl items-center justify-center"
          onPress={() => setStep(2)}
        >
          <Text className="text-white font-sans-bold text-lg">Continue</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="mt-6 items-center"
          onPress={() => router.replace('/(tabs)')}
        >
          <Text className="text-primary/40 font-sans text-base">Skip for now</Text>
        </TouchableOpacity>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper className="flex-1 justify-center px-8">
      <TouchableOpacity 
        onPress={() => setStep(1)} 
        className="absolute top-6 left-6 z-10 p-2"
      >
        <ArrowLeft size={24} color="#2D4F36" />
      </TouchableOpacity>

      <View className="items-center mb-10">
        <PathLogo size={60} />
      </View>
      
      <Text className="font-serif text-3xl text-primary text-center mb-8">
        What pulled you here?
      </Text>

      <View className="gap-3 mb-10">
        {TRIGGERS.map(trigger => (
          <TouchableOpacity 
            key={trigger.id}
            onPress={() => setSelectedTrigger(trigger.id)}
            className={`p-4 rounded-xl border ${selectedTrigger === trigger.id ? 'bg-primary border-primary' : 'bg-white border-primary/10'}`}
          >
            <Text className={`font-sans text-center text-lg ${selectedTrigger === trigger.id ? 'text-white' : 'text-primary'}`}>
              {trigger.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity 
        className={`bg-primary p-5 rounded-2xl items-center justify-center ${!selectedTrigger ? 'opacity-50' : ''}`}
        onPress={() => router.push('/intercept/prayer-card')}
        disabled={!selectedTrigger}
      >
        <Text className="text-white font-sans-bold text-lg">Continue to Prayer</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        className="mt-4 items-center"
        onPress={() => router.replace('/(tabs)')}
      >
        <Text className="text-primary/40 font-sans text-base">Skip</Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
}

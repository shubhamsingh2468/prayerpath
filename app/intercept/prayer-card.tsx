import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { PathLogo } from '../../components/PathLogo';
import { Play, ChevronRight, X, ArrowLeft } from 'lucide-react-native';
import { SoftCard } from '../../components/SoftCard';

export default function PrayerCardScreen() {
  const router = useRouter();

  return (
    <ScreenWrapper className="px-5">
      <View className="flex-row justify-between items-center pt-2 mb-10">
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#2D4F36" />
        </TouchableOpacity>
        <PathLogo size={60} />
        <TouchableOpacity onPress={() => router.replace('/(tabs)')}>
          <X size={24} color="#2D4F36" />
        </TouchableOpacity>
      </View>

      <View className="flex-1 justify-center">
        <Text className="font-serif text-3xl text-primary text-center mb-12">Take a moment to reset</Text>
        
        <SoftCard className="bg-white p-10 mb-10 items-center">
          <TouchableOpacity className="bg-[#F4F1EA] w-16 h-16 rounded-full items-center justify-center mb-10">
            <Play size={24} color="#2D4F36" fill="#2D4F36" />
          </TouchableOpacity>
          
          <Text className="font-serif text-2xl text-primary text-center leading-relaxed">
            "Lord, grant me the peace to accept the things I cannot change, courage to change the things I can, and wisdom to know the difference."
          </Text>
        </SoftCard>

        <View className="gap-4">
          <TouchableOpacity 
            className="bg-primary p-5 rounded-2xl flex-row items-center justify-center"
            onPress={() => router.push('/intercept/reflection')}
          >
            <Text className="text-white font-sans-bold text-lg">Go to Reflection</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="p-4 items-center"
            onPress={() => router.push('/intercept/reflection')}
          >
            <Text className="text-primary/60 font-sans text-base">Reflect first</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}

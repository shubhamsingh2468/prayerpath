import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { PathLogo } from '../../components/PathLogo';
import { CheckCircle, Lock, ChevronRight, ArrowLeft } from 'lucide-react-native';
import { SoftCard } from '../../components/SoftCard';

export default function UnlockScreen() {
  const router = useRouter();

  return (
    <ScreenWrapper className="px-5 justify-center">
      <TouchableOpacity 
        onPress={() => router.back()} 
        className="absolute top-6 left-6 z-10 p-2"
      >
        <ArrowLeft size={24} color="#2D4F36" />
      </TouchableOpacity>

      <View className="items-center mb-12">
        <PathLogo size={100} />
      </View>
      
      <View className="items-center mb-16">
        <View className="bg-[#E8F1E8] w-24 h-24 rounded-full items-center justify-center mb-8">
          <CheckCircle size={48} color="#2D4F36" />
        </View>
        <Text className="font-serif text-4xl text-primary text-center leading-tight mb-4">
          Well done, Jordan.
        </Text>
        <Text className="font-sans text-muted text-lg text-center">
          You paused before scrolling.{"\n"}That matters.
        </Text>
      </View>

      <View className="gap-4">
        <TouchableOpacity 
          className="bg-primary p-5 rounded-2xl flex-row items-center justify-center"
          onPress={() => router.replace('/(tabs)')}
        >
          <Text className="text-white font-sans-bold text-lg mr-2">Continue to App</Text>
          <ChevronRight size={20} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="p-4 items-center"
          onPress={() => router.replace('/(tabs)')}
        >
          <Text className="text-primary/60 font-sans text-base">Go back home</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}

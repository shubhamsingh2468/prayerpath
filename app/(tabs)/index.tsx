import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { PathLogo } from '../../components/PathLogo';
import { useRouter } from 'expo-router';
import { Bell, Pause, HandMetal, FileText, ChevronRight, Sun, BookOpen, PlayCircle, ArrowLeft, Activity } from 'lucide-react-native';
import { SoftCard } from '../../components/SoftCard';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ScreenWrapper className="px-5">
      <ScrollView showsVerticalScrollIndicator={false} className="pt-2">
        <View className="flex-row justify-between items-center mb-6">
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowLeft size={24} color="#2D4F36" />
          </TouchableOpacity>
          <PathLogo size={60} />
          <TouchableOpacity className="bg-white/50 p-2 rounded-full">
            <Bell size={24} color="#2D4F36" />
          </TouchableOpacity>
        </View>

        <View className="mb-6">
          <Text className="font-serif text-3xl text-[#3E5846] mb-1">Good morning, Jordan.</Text>
          <Text className="font-sans text-[#3E5846]/60 text-lg">You're building something that lasts.</Text>
        </View>

        <TouchableOpacity activeOpacity={0.9} className="mb-8">
          <View className="bg-[#3E5846] rounded-[32px] p-8 shadow-2xl shadow-[#3E5846]/40 relative overflow-hidden">
            {/* Decorative elements for glassmorphism feel */}
            <View className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
            <View className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#D98A6C]/20 rounded-full" />
            
            <View className="flex-row justify-between items-center mb-8">
              <Text className="text-white font-serif text-xl">Today's Progress</Text>
              <View className="bg-white/20 px-3 py-1 rounded-full">
                <Text className="text-white/90 font-sans text-xs">Keep going 🌿</Text>
              </View>
            </View>

            <View className="flex-row justify-between items-center mb-8">
              <View className="items-center">
                <View className="w-16 h-16 bg-white/10 rounded-full items-center justify-center mb-3 border border-white/20">
                  <Pause size={28} color="white" />
                </View>
                <Text className="text-white font-serif text-2xl">5</Text>
                <Text className="text-white/60 font-sans text-[10px] uppercase tracking-widest mt-1">Pauses</Text>
              </View>
              
              <View className="items-center">
                <View className="w-16 h-16 bg-white/10 rounded-full items-center justify-center mb-3 border border-white/20">
                  <HandMetal size={28} color="white" />
                </View>
                <Text className="text-white font-serif text-2xl">3</Text>
                <Text className="text-white/60 font-sans text-[10px] uppercase tracking-widest mt-1">Prayers</Text>
              </View>
              
              <View className="items-center">
                <View className="w-16 h-16 bg-white/10 rounded-full items-center justify-center mb-3 border border-white/20">
                  <FileText size={28} color="white" />
                </View>
                <Text className="text-white font-serif text-2xl">2</Text>
                <Text className="text-white/60 font-sans text-[10px] uppercase tracking-widest mt-1">Reflections</Text>
              </View>
            </View>
            
            <Text className="text-white/50 font-sans text-center text-sm italic">
              "Every pause is a step closer to growth."
            </Text>
          </View>
        </TouchableOpacity>

        <View className="mb-8">
          <View className="flex-row items-center mb-4 justify-between">
            <View className="flex-row items-center">
              <Sun size={20} color="#D98A6C" />
              <Text className="font-serif text-2xl text-[#3E5846] ml-2">Today's Prayer</Text>
            </View>
            <TouchableOpacity>
              <Text className="text-[#3E5846]/60 font-sans text-sm">View All</Text>
            </TouchableOpacity>
          </View>
          
          <View className="bg-white rounded-3xl p-6 flex-row border border-[#E8E4D9]">
            <View className="flex-1 pr-4">
              <Text className="font-sans text-[#3E5846]/70 text-base leading-relaxed mb-6">
                A short prayer to center your heart and mind today.
              </Text>
              <View className="flex-row gap-3">
                <TouchableOpacity 
                  className="bg-[#3E5846] px-5 py-2.5 rounded-xl flex-row items-center"
                  onPress={() => router.push('/intercept')}
                >
                  <BookOpen size={16} color="white" />
                  <Text className="text-white font-sans-bold ml-2">Read</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-[#F4F1EA] px-5 py-2.5 rounded-xl flex-row items-center">
                  <PlayCircle size={16} color="#3E5846" />
                  <Text className="text-[#3E5846] font-sans-bold ml-2">Listen</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="w-20 h-20 items-center justify-center bg-[#F9F7F2] rounded-2xl border border-[#E8E4D9]">
              <BookOpen size={32} color="#D98A6C" />
            </View>
          </View>
        </View>

        <View className="bg-white rounded-3xl p-6 mb-8 flex-row items-center justify-between border border-[#E8E4D9]">
          <View className="flex-row items-center flex-1">
            <View className="bg-[#F9F1E8] w-14 h-14 rounded-2xl items-center justify-center mr-4">
              <Activity size={28} color="#D98A6C" />
            </View>
            <View className="flex-1">
              <Text className="font-sans text-[#3E5846]/40 text-xs uppercase tracking-widest mb-1">Top Trigger This Week</Text>
              <View className="flex-row items-baseline">
                <Text className="font-serif text-2xl text-[#3E5846]">Anxiety</Text>
                <Text className="font-sans text-[#3E5846]/60 text-sm ml-2">(8 times)</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity className="bg-[#F4F1EA] p-3 rounded-xl">
            <ChevronRight size={20} color="#3E5846" />
          </TouchableOpacity>
        </View>

        <View className="mb-12">
          <Text className="font-serif text-xl text-[#3E5846] mb-4">Quick Start</Text>
          <TouchableOpacity 
            className="bg-white rounded-3xl p-6 flex-row items-center justify-between border border-[#E8E4D9]"
            onPress={() => router.push('/intercept')}
          >
            <View className="flex-row items-center">
              <View className="bg-[#3E5846]/10 w-12 h-12 rounded-full items-center justify-center mr-4">
                <HandMetal size={24} color="#3E5846" />
              </View>
              <View>
                <Text className="text-[#3E5846] font-sans-bold text-lg">Start a Prayer</Text>
                <Text className="text-[#3E5846]/60 font-sans text-sm">Take a moment anytime</Text>
              </View>
            </View>
            <ChevronRight size={24} color="#3E5846" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

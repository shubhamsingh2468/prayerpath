import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { PathLogo } from '../../components/PathLogo';
import { useRouter } from 'expo-router';
import { Bell, Pause, HandMetal, FileText, ChevronRight, Sun, BookOpen, PlayCircle, ArrowLeft } from 'lucide-react-native';
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
          <Text className="font-serif text-3xl text-primary mb-1">Good morning, Jordan.</Text>
          <Text className="font-sans text-muted text-lg">You're building something that lasts.</Text>
        </View>

        <SoftCard className="bg-primary p-6 mb-6">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-white font-sans-bold text-lg">Today's Progress</Text>
            <TouchableOpacity>
              <Text className="text-white/70 font-sans text-sm">Keep going 🌿</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-around items-center mb-4">
            <View className="items-center">
              <View className="w-14 h-14 bg-white/20 rounded-full items-center justify-center mb-2"><Pause size={24} color="white" /></View>
              <Text className="text-white font-serif-bold text-2xl">5</Text>
              <Text className="text-white/70 font-sans text-sm">Pauses</Text>
            </View>
            <View className="items-center">
              <View className="w-14 h-14 bg-white/20 rounded-full items-center justify-center mb-2"><HandMetal size={24} color="white" /></View>
              <Text className="text-white font-serif-bold text-2xl">3</Text>
              <Text className="text-white/70 font-sans text-sm">Prayers</Text>
            </View>
            <View className="items-center">
              <View className="w-14 h-14 bg-white/20 rounded-full items-center justify-center mb-2"><FileText size={24} color="white" /></View>
              <Text className="text-white font-serif-bold text-2xl">2</Text>
              <Text className="text-white/70 font-sans text-sm">Reflections</Text>
            </View>
          </View>
          <Text className="text-white/60 font-sans text-center text-sm">Every pause is a step closer to growth.</Text>
        </SoftCard>

        <View className="mb-6">
          <View className="flex-row items-center mb-4">
            <Sun size={20} color="#C5B18D" />
            <Text className="font-serif-bold text-2xl text-primary ml-2">Today's Prayer</Text>
          </View>
          <SoftCard className="bg-white p-5 flex-row">
            <View className="flex-1 pr-4">
              <Text className="font-sans text-muted text-base mb-4">A short prayer to center your heart and mind today.</Text>
              <View className="flex-row gap-3">
                <TouchableOpacity className="bg-primary px-4 py-2 rounded-lg flex-row items-center">
                  <BookOpen size={16} color="white" /><Text className="text-white font-sans-bold ml-2">Read</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-[#F4F1EA] px-4 py-2 rounded-lg flex-row items-center">
                  <PlayCircle size={16} color="#2D4F36" /><Text className="text-primary font-sans-bold ml-2">Listen</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="w-24 h-24 items-center justify-center">
              <View className="bg-accent/10 w-24 h-24 rounded-full items-center justify-center">
                <BookOpen size={48} color="#A8B5A3" />
              </View>
            </View>
          </SoftCard>
        </View>

        <SoftCard className="bg-[#E8EADE] p-5 mb-6 flex-row items-center">
          <View className="bg-white/50 p-2 rounded-full mr-4"><Sun size={24} color="#2D4F36" /></View>
          <View className="flex-1">
            <Text className="font-sans text-muted text-sm">You've chosen intention</Text>
            <Text className="font-serif-bold text-xl text-primary">23 times this week.</Text>
            <Text className="font-sans text-muted text-xs">Amazing commitment!</Text>
          </View>
          <View className="flex-row items-end gap-1 h-12">
            {[2, 4, 3, 5, 8, 6, 5].map((h, i) => (
              <View key={i} className="w-1.5 bg-primary/30 rounded-t-sm" style={{ height: h * 4 }} />
            ))}
          </View>
        </SoftCard>

        <SoftCard className="bg-white p-5 mb-6 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <View className="bg-[#F4F1EA] p-2 rounded-full mr-4"><Pause size={24} color="#2D4F36" /></View>
            <View>
              <Text className="font-sans text-muted text-sm">Top Trigger This Week</Text>
              <Text className="font-serif-bold text-xl text-primary">Anxiety</Text>
              <Text className="font-sans text-muted text-xs">8 times</Text>
            </View>
          </View>
          <TouchableOpacity className="bg-[#F4F1EA] px-3 py-2 rounded-lg flex-row items-center">
            <Text className="text-primary font-sans-bold text-sm mr-1">View Insights</Text><ChevronRight size={14} color="#2D4F36" />
          </TouchableOpacity>
        </SoftCard>

        <View className="mb-10">
          <Text className="font-sans-bold text-lg text-primary mb-3">Quick Start</Text>
          <TouchableOpacity className="bg-primary p-5 rounded-2xl flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="bg-white/20 p-2 rounded-full mr-4"><HandMetal size={24} color="white" /></View>
              <View>
                <Text className="text-white font-sans-bold text-lg">Start a Prayer</Text>
                <Text className="text-white/60 font-sans text-sm">Take a moment anytime</Text>
              </View>
            </View>
            <ChevronRight size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

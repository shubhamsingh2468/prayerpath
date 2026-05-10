import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { PathLogo } from '../../components/PathLogo';
import { useRouter } from 'expo-router';
import { Calendar, ChevronRight, Pause, HandMetal, FileText, Zap, Brain, Clock, ArrowLeft } from 'lucide-react-native';
import { SoftCard } from '../../components/SoftCard';

export default function StatsScreen() {
  const router = useRouter();
  return (
    <ScreenWrapper className="px-5">
      <ScrollView showsVerticalScrollIndicator={false} className="pt-2">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-6">
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowLeft size={24} color="#2D4F36" />
          </TouchableOpacity>
          <PathLogo size={60} />
          <TouchableOpacity className="bg-white/50 p-2 rounded-full">
            <Calendar size={24} color="#2D4F36" />
          </TouchableOpacity>
        </View>

        {/* Title */}
        <View className="mb-6">
          <Text className="font-serif text-3xl text-primary mb-1">Your Journey</Text>
          <Text className="font-sans text-muted text-lg">Awareness. Intention. Growth.</Text>
        </View>

        {/* Period Selector */}
        <View className="bg-[#E8EADE]/40 rounded-full flex-row p-1 mb-6">
          {['Week', 'Month', '3 Months', 'Year'].map((period, i) => (
            <TouchableOpacity 
              key={period} 
              className={`flex-1 py-2 rounded-full items-center ${i === 0 ? 'bg-primary' : ''}`}
            >
              <Text className={`font-sans-bold text-sm ${i === 0 ? 'text-white' : 'text-primary/60'}`}>
                {period}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Overview Cards */}
        <SoftCard className="bg-white p-5 mb-6">
          <Text className="font-sans-bold text-primary mb-4">This Week Overview</Text>
          <View className="flex-row justify-between">
            <View className="items-center flex-1">
              <View className="bg-[#F4F1EA] p-2 rounded-full mb-2">
                <Pause size={18} color="#2D4F36" />
              </View>
              <Text className="font-serif-bold text-xl text-primary">23</Text>
              <Text className="font-sans text-muted text-xs">Pauses</Text>
              <Text className="font-sans text-primary text-[10px] mt-1">↗ 15%</Text>
            </View>
            <View className="items-center flex-1">
              <View className="bg-[#F4F1EA] p-2 rounded-full mb-2">
                <HandMetal size={18} color="#2D4F36" />
              </View>
              <Text className="font-serif-bold text-xl text-primary">14</Text>
              <Text className="font-sans text-muted text-xs">Prayers</Text>
              <Text className="font-sans text-primary text-[10px] mt-1">↗ 27%</Text>
            </View>
            <View className="items-center flex-1">
              <View className="bg-[#F4F1EA] p-2 rounded-full mb-2">
                <FileText size={18} color="#2D4F36" />
              </View>
              <Text className="font-serif-bold text-xl text-primary">9</Text>
              <Text className="font-sans text-muted text-xs">Reflections</Text>
              <Text className="font-sans text-primary text-[10px] mt-1">↗ 12%</Text>
            </View>
            <View className="items-center flex-1">
              <View className="bg-[#F4F1EA] p-2 rounded-full mb-2">
                <Zap size={18} color="#2D4F36" />
              </View>
              <Text className="font-serif-bold text-xl text-primary">5</Text>
              <Text className="font-sans text-muted text-xs">Days Active</Text>
              <Text className="font-sans text-primary text-[10px] mt-1">↗ 1 day</Text>
            </View>
          </View>
        </SoftCard>

        {/* Pauses Per Day Graph */}
        <SoftCard className="bg-white p-5 mb-6">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="font-sans-bold text-primary">Pauses Per Day</Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="font-sans text-primary text-xs mr-1">View Details</Text>
              <ChevronRight size={14} color="#2D4F36" />
            </TouchableOpacity>
          </View>
          
          <View className="flex-row items-end justify-between h-40 mb-2 px-2">
            {[2, 4, 7, 3, 8, 6, 5].map((val, i) => (
              <View key={i} className="items-center">
                <Text className="font-sans text-muted text-[10px] mb-1">{val}</Text>
                <View className="w-6 bg-primary/60 rounded-t-sm" style={{ height: val * 12 }} />
                <Text className="font-sans text-muted text-[10px] mt-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                </Text>
              </View>
            ))}
          </View>
          
          <View className="bg-[#F4F1EA] p-3 rounded-xl flex-row items-center mt-4">
            <Text className="text-xl mr-3">🌿</Text>
            <Text className="font-sans text-primary text-xs flex-1">
              Great consistency! You're showing up for your growth.
            </Text>
          </View>
        </SoftCard>

        {/* Insights */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="font-sans-bold text-primary text-lg">Insights</Text>
            <TouchableOpacity>
              <Text className="font-sans text-primary text-sm">View All</Text>
            </TouchableOpacity>
          </View>
          
          <View className="flex-row gap-4 mb-4">
            <SoftCard className="bg-white p-4 flex-1">
              <Text className="font-sans text-muted text-[10px] mb-1">Top Trigger This Week</Text>
              <Text className="font-serif-bold text-lg text-primary">Anxiety</Text>
              <Text className="font-sans text-muted text-[10px] mb-2">8 times</Text>
              <View className="bg-[#F4F1EA] w-10 h-10 rounded-full items-center justify-center self-end">
                <Brain size={20} color="#2D4F36" />
              </View>
            </SoftCard>
            <SoftCard className="bg-white p-4 flex-1">
              <Text className="font-sans text-muted text-[10px] mb-1">Most Active Day</Text>
              <Text className="font-serif-bold text-lg text-primary">Friday</Text>
              <Text className="font-sans text-muted text-[10px] mb-2">8 pauses</Text>
              <View className="bg-[#F4F1EA] w-10 h-10 rounded-full items-center justify-center self-end">
                <Calendar size={20} color="#2D4F36" />
              </View>
            </SoftCard>
          </View>
          
          <SoftCard className="bg-white p-4 flex-row items-center justify-between">
            <View>
              <Text className="font-sans text-muted text-[10px] mb-1">Average Prayer Time</Text>
              <Text className="font-serif-bold text-lg text-primary">1m 12s</Text>
              <Text className="font-sans text-muted text-[10px]">per prayer</Text>
            </View>
            <View className="bg-accent/10 w-12 h-12 rounded-full items-center justify-center">
              <Clock size={24} color="#2D4F36" />
            </View>
          </SoftCard>
        </View>

        {/* Your Progress */}
        <SoftCard className="bg-white p-5 mb-10">
          <Text className="font-sans-bold text-primary mb-1">Your Progress</Text>
          <Text className="font-sans text-muted text-xs mb-4">Keep going, Jordan. Small steps lead to big change.</Text>
          
          <View className="bg-[#F4F1EA] h-2 rounded-full overflow-hidden mb-2">
            <View className="bg-primary h-full" style={{ width: '77%' }} />
          </View>
          
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="font-sans-bold text-primary text-sm">23 / 30</Text>
              <Text className="font-sans text-muted text-[10px]">Pauses Goal</Text>
            </View>
            <View className="items-end">
              <Text className="font-sans-bold text-primary text-sm">77%</Text>
              <Text className="font-sans text-muted text-[10px]">This Week</Text>
            </View>
          </View>
        </SoftCard>
      </ScrollView>
    </ScreenWrapper>
  );
}

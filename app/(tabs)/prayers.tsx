import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { PathLogo } from '../../components/PathLogo';
import { useRouter } from 'expo-router';
import { Search, Bookmark, Play, Clock, Heart, ArrowLeft } from 'lucide-react-native';
import { SoftCard } from '../../components/SoftCard';
import { Chip } from '../../components/Chip';

const CATEGORIES = ['All', 'Anxiety', 'Focus', 'Discipline', 'Gratitude', 'Peace'];

const PRAYERS = [
  { id: '1', title: 'Finding Peace in Chaos', category: 'Anxiety', duration: '15s', saved: true },
  { id: '2', title: 'A Morning Start', category: 'Morning', duration: '20s', saved: false },
  { id: '3', title: 'Focus for the Task', category: 'Focus', duration: '10s', saved: false },
  { id: '4', title: 'Strength in Temptation', category: 'Discipline', duration: '25s', saved: true },
  { id: '5', title: 'Heart of Gratitude', category: 'Gratitude', duration: '15s', saved: false },
  { id: '6', title: 'Calm for Sleep', category: 'Night', duration: '30s', saved: false },
];

export default function PrayersScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPrayers = selectedCategory === 'All' 
    ? PRAYERS 
    : PRAYERS.filter(p => p.category === selectedCategory);

  return (
    <ScreenWrapper className="px-5">
      <View className="pt-2 flex-1">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-6">
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowLeft size={24} color="#2D4F36" />
          </TouchableOpacity>
          <PathLogo size={60} />
          <TouchableOpacity className="bg-white/50 p-2 rounded-full">
            <Search size={24} color="#2D4F36" />
          </TouchableOpacity>
        </View>

        {/* Title */}
        <View className="mb-6">
          <Text className="font-serif text-3xl text-primary mb-1">Prayer Library</Text>
          <Text className="font-sans text-muted text-lg">Words to anchor your soul.</Text>
        </View>

        {/* Categories */}
        <View className="mb-6">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-5 px-5">
            {CATEGORIES.map(cat => (
              <Chip 
                key={cat} 
                label={cat} 
                selected={selectedCategory === cat} 
                onPress={() => setSelectedCategory(cat)} 
              />
            ))}
            <View className="w-10" />
          </ScrollView>
        </View>

        {/* Prayer List */}
        <FlatList
          data={filteredPrayers}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <SoftCard className="bg-white p-4 mb-4 flex-row items-center">
              <TouchableOpacity className="bg-[#F4F1EA] w-12 h-12 rounded-full items-center justify-center mr-4">
                <Play size={20} color="#2D4F36" fill="#2D4F36" />
              </TouchableOpacity>
              
              <View className="flex-1">
                <Text className="font-serif-bold text-lg text-primary mb-1">{item.title}</Text>
                <View className="flex-row items-center">
                  <Text className="font-sans text-muted text-xs mr-3">{item.category}</Text>
                  <View className="flex-row items-center">
                    <Clock size={12} color="rgba(45, 79, 54, 0.5)" />
                    <Text className="font-sans text-muted text-xs ml-1">{item.duration}</Text>
                  </View>
                </View>
              </View>
              
              <TouchableOpacity>
                <Bookmark 
                  size={24} 
                  color={item.saved ? "#2D4F36" : "rgba(45, 79, 54, 0.2)"} 
                  fill={item.saved ? "#2D4F36" : "transparent"}
                />
              </TouchableOpacity>
            </SoftCard>
          )}
          ListFooterComponent={<View className="h-20" />}
        />
      </View>
    </ScreenWrapper>
  );
}

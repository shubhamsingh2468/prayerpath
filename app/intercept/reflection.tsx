import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { PathLogo } from '../../components/PathLogo';
import { X, Lock, Brain, Cloud, Frown, RefreshCcw, Footprints, MoreHorizontal, Clock, ArrowLeft } from 'lucide-react-native';
import { SoftCard } from '../../components/SoftCard';

const EMOTIONS = [
  { id: 'stress', label: 'Stress', icon: Brain, color: '#E8EADE' },
  { id: 'overthinking', label: 'Overthinking', icon: Cloud, color: '#E8F1F2' },
  { id: 'procrastination', label: 'Procrastination', icon: Clock, color: '#F9F1E8' },
  { id: 'anxiety', label: 'Anxiety', icon: Frown, color: '#F1F1F1' },
];

export default function ReflectionScreen() {
  const router = useRouter();
  const [text, setText] = useState('');
  const [selectedEmotion, setSelectedEmotion] = useState('');

  return (
    <ScreenWrapper className="px-5">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex-row justify-between items-center pt-2 mb-6">
            <TouchableOpacity onPress={() => router.back()}>
              <ArrowLeft size={24} color="#2D4F36" />
            </TouchableOpacity>
            <PathLogo size={60} />
            <TouchableOpacity onPress={() => router.replace('/(tabs)')}>
              <X size={24} color="#2D4F36" />
            </TouchableOpacity>
          </View>

          <View className="items-center mb-8">
            <Text className="font-sans text-muted text-[10px] uppercase tracking-widest mb-4">Reflection</Text>
            <Text className="font-serif text-3xl text-primary text-center leading-tight">
              What were you trying to escape or avoid just now?
            </Text>
            <View className="flex-row items-center mt-4">
              <Lock size={12} color="rgba(45, 79, 54, 0.4)" />
              <Text className="font-sans text-muted text-xs ml-1">
                Be honest with yourself. This is just for you.
              </Text>
            </View>
          </View>

          <SoftCard className="bg-white p-4 mb-8">
            <TextInput
              multiline
              placeholder="Type your thoughts..."
              placeholderTextColor="rgba(45, 79, 54, 0.3)"
              className="font-sans text-primary text-lg h-32"
              textAlignVertical="top"
              maxLength={200}
              value={text}
              onChangeText={setText}
            />
            <Text className="font-sans text-muted text-xs self-end mt-2">
              {text.length}/200
            </Text>
          </SoftCard>

          <Text className="font-serif text-lg text-primary mb-4">Or choose what fits best</Text>
          
          <View className="flex-row flex-wrap justify-between mb-8">
            {EMOTIONS.map(emotion => (
              <TouchableOpacity 
                key={emotion.id}
                onPress={() => setSelectedEmotion(emotion.id)}
                className="w-[48%] mb-4"
              >
                <SoftCard 
                  className={`p-4 items-center ${selectedEmotion === emotion.id ? 'border-2 border-primary' : ''}`}
                  style={{ backgroundColor: emotion.color }}
                >
                  <emotion.icon size={24} color="#2D4F36" className="mb-2" />
                  <Text className="font-sans text-primary text-sm">{emotion.label}</Text>
                </SoftCard>
              </TouchableOpacity>
            ))}
          </View>

          <SoftCard className="bg-[#E8EADE]/40 p-4 flex-row items-center mb-8">
            <View className="bg-primary w-10 h-10 rounded-full items-center justify-center mr-4">
              <Lock size={20} color="white" />
            </View>
            <View className="flex-1">
              <Text className="font-sans-bold text-primary text-sm">Your reflection is private</Text>
              <Text className="font-sans text-muted text-xs">Only you can see this. It helps you grow.</Text>
            </View>
          </SoftCard>

          <TouchableOpacity 
            className="bg-primary p-5 rounded-2xl flex-row items-center justify-center mb-4"
            onPress={() => router.push('/intercept/unlock')}
          >
            <Lock size={20} color="white" className="mr-2" />
            <Text className="text-white font-sans-bold text-lg">Save Reflection</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="items-center mb-10"
            onPress={() => router.push('/intercept/unlock')}
          >
            <Text className="font-sans text-muted text-sm">You can always <Text className="underline">skip</Text></Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}

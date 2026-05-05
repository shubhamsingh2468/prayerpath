import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { PathLogo } from '../../components/PathLogo';
import { Settings, Shield, Clock, Volume2, PenTool, User as UserIcon, Bell, HelpCircle, ChevronRight, Pause, HandMetal, FileText, Calendar, Heart, ArrowLeft } from 'lucide-react-native';
import { SoftCard } from '../../components/SoftCard';

export default function ProfileScreen() {
  const router = useRouter();
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [reflectionEnabled, setReflectionEnabled] = useState(true);

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
            <Settings size={24} color="#2D4F36" />
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View className="flex-row items-center mb-8">
          <View className="w-20 h-20 bg-[#E8EADE] rounded-full items-center justify-center mr-5 border-2 border-white">
            <Text className="font-serif-bold text-3xl text-primary">J</Text>
            <View className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full">
              <Text className="text-xs">🌿</Text>
            </View>
          </View>
          <View>
            <Text className="font-serif text-3xl text-primary mb-1">Jordan</Text>
            <Text className="font-sans text-muted text-sm mb-2">Walking in faith. Growing in purpose.</Text>
            <View className="bg-[#F4F1EA] px-3 py-1 rounded-full flex-row items-center self-start">
              <Text className="text-sm mr-1">🔥</Text>
              <Text className="font-sans-bold text-primary text-xs">7 Day Streak</Text>
            </View>
          </View>
        </View>

        {/* Your Progress All Time */}
        <SoftCard className="bg-white p-5 mb-8">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="font-sans-bold text-primary">Your Progress</Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="font-sans text-primary text-xs mr-1">View Stats</Text>
              <ChevronRight size={14} color="#2D4F36" />
            </TouchableOpacity>
          </View>
          
          <View className="flex-row justify-between">
            <View className="items-center flex-1">
              <View className="bg-[#F4F1EA] p-2 rounded-full mb-2">
                <Pause size={18} color="#2D4F36" />
              </View>
              <Text className="font-serif-bold text-xl text-primary">128</Text>
              <Text className="font-sans text-muted text-[10px]">Pauses</Text>
              <Text className="font-sans text-muted text-[10px]">All time</Text>
            </View>
            <View className="items-center flex-1">
              <View className="bg-[#F4F1EA] p-2 rounded-full mb-2">
                <HandMetal size={18} color="#2D4F36" />
              </View>
              <Text className="font-serif-bold text-xl text-primary">74</Text>
              <Text className="font-sans text-muted text-[10px]">Prayers</Text>
              <Text className="font-sans text-muted text-[10px]">All time</Text>
            </View>
            <View className="items-center flex-1">
              <View className="bg-[#F4F1EA] p-2 rounded-full mb-2">
                <FileText size={18} color="#2D4F36" />
              </View>
              <Text className="font-serif-bold text-xl text-primary">42</Text>
              <Text className="font-sans text-muted text-[10px]">Reflections</Text>
              <Text className="font-sans text-muted text-[10px]">All time</Text>
            </View>
            <View className="items-center flex-1">
              <View className="bg-[#F4F1EA] p-2 rounded-full mb-2">
                <Calendar size={18} color="#2D4F36" />
              </View>
              <Text className="font-serif-bold text-xl text-primary">15</Text>
              <Text className="font-sans text-muted text-[10px]">Days Active</Text>
              <Text className="font-sans text-muted text-[10px]">This month</Text>
            </View>
          </View>
        </SoftCard>

        {/* Settings Sections */}
        <View className="mb-8">
          <Text className="font-sans-bold text-muted text-xs uppercase tracking-wider mb-4 px-1">App Control</Text>
          <SoftCard className="bg-white p-4 flex-row items-center mb-6">
            <View className="bg-[#F4F1EA] p-2 rounded-xl mr-4">
              <Settings size={20} color="#2D4F36" />
            </View>
            <View className="flex-1">
              <Text className="font-sans-bold text-primary">Manage Apps</Text>
              <Text className="font-sans text-muted text-xs">Choose which apps Prayer Path will interrupt.</Text>
            </View>
            <ChevronRight size={20} color="#2D4F36" />
          </SoftCard>

          <Text className="font-sans-bold text-muted text-xs uppercase tracking-wider mb-4 px-1">Mode & Frequency</Text>
          <SoftCard className="bg-white p-0 overflow-hidden mb-6">
            <TouchableOpacity className="flex-row items-center p-4 border-b border-[#F4F1EA]">
              <View className="bg-[#F4F1EA] p-2 rounded-xl mr-4">
                <Shield size={20} color="#2D4F36" />
              </View>
              <View className="flex-1">
                <Text className="font-sans-bold text-primary">Mode</Text>
                <Text className="font-sans text-muted text-xs">You're in Soft Mode</Text>
              </View>
              <View className="bg-[#F4F1EA] px-2 py-1 rounded-full flex-row items-center mr-2">
                <View className="w-1.5 h-1.5 bg-primary rounded-full mr-1.5" />
                <Text className="font-sans-bold text-primary text-[10px]">Soft Mode</Text>
              </View>
              <ChevronRight size={20} color="#2D4F36" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center p-4">
              <View className="bg-[#F4F1EA] p-2 rounded-xl mr-4">
                <Clock size={20} color="#2D4F36" />
              </View>
              <View className="flex-1">
                <Text className="font-sans-bold text-primary">Frequency</Text>
                <Text className="font-sans text-muted text-xs">Every time you open selected apps</Text>
              </View>
              <ChevronRight size={20} color="#2D4F36" />
            </TouchableOpacity>
          </SoftCard>

          <Text className="font-sans-bold text-muted text-xs uppercase tracking-wider mb-4 px-1">Preferences</Text>
          <SoftCard className="bg-white p-0 overflow-hidden mb-6">
            <View className="flex-row items-center p-4 border-b border-[#F4F1EA]">
              <View className="bg-[#F4F1EA] p-2 rounded-xl mr-4">
                <Volume2 size={20} color="#2D4F36" />
              </View>
              <View className="flex-1">
                <Text className="font-sans-bold text-primary">Audio</Text>
                <Text className="font-sans text-muted text-xs">Play audio for prayers</Text>
              </View>
              <Switch 
                value={audioEnabled} 
                onValueChange={setAudioEnabled} 
                trackColor={{ false: '#D1D1D1', true: '#2D4F36' }}
              />
            </View>
            <TouchableOpacity className="flex-row items-center p-4 border-b border-[#F4F1EA]">
              <View className="bg-[#F4F1EA] p-2 rounded-xl mr-4">
                <Clock size={20} color="#2D4F36" />
              </View>
              <View className="flex-1">
                <Text className="font-sans-bold text-primary">Prayer Length</Text>
                <Text className="font-sans text-muted text-xs">Short (10-20 seconds)</Text>
              </View>
              <ChevronRight size={20} color="#2D4F36" />
            </TouchableOpacity>
            <View className="flex-row items-center p-4">
              <View className="bg-[#F4F1EA] p-2 rounded-xl mr-4">
                <PenTool size={20} color="#2D4F36" />
              </View>
              <View className="flex-1">
                <Text className="font-sans-bold text-primary">Reflection</Text>
                <Text className="font-sans text-muted text-xs">Ask for reflection after prayer</Text>
              </View>
              <Switch 
                value={reflectionEnabled} 
                onValueChange={setReflectionEnabled} 
                trackColor={{ false: '#D1D1D1', true: '#2D4F36' }}
              />
            </View>
          </SoftCard>

          <Text className="font-sans-bold text-muted text-xs uppercase tracking-wider mb-4 px-1">Account</Text>
          <SoftCard className="bg-white p-0 overflow-hidden mb-10">
            <TouchableOpacity className="flex-row items-center p-4 border-b border-[#F4F1EA]">
              <View className="bg-[#F4F1EA] p-2 rounded-xl mr-4">
                <UserIcon size={20} color="#2D4F36" />
              </View>
              <View className="flex-1">
                <Text className="font-sans-bold text-primary">Account & Profile</Text>
                <Text className="font-sans text-muted text-xs">Update your name and email</Text>
              </View>
              <ChevronRight size={20} color="#2D4F36" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center p-4 border-b border-[#F4F1EA]">
              <View className="bg-[#F4F1EA] p-2 rounded-xl mr-4">
                <Bell size={20} color="#2D4F36" />
              </View>
              <View className="flex-1">
                <Text className="font-sans-bold text-primary">Notifications</Text>
                <Text className="font-sans text-muted text-xs">Manage reminders and updates</Text>
              </View>
              <ChevronRight size={20} color="#2D4F36" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center p-4">
              <View className="bg-[#F4F1EA] p-2 rounded-xl mr-4">
                <HelpCircle size={20} color="#2D4F36" />
              </View>
              <View className="flex-1">
                <Text className="font-sans-bold text-primary">Help & Support</Text>
                <Text className="font-sans text-muted text-xs">FAQs, contact us, and resources</Text>
              </View>
              <ChevronRight size={20} color="#2D4F36" />
            </TouchableOpacity>
          </SoftCard>
        </View>

        {/* Bottom Progress Card */}
        <SoftCard className="bg-[#E8EADE] p-5 mb-10 flex-row items-center">
          <View className="bg-white/50 p-2 rounded-full mr-4">
            <Heart size={24} color="#2D4F36" fill="#2D4F36" />
          </View>
          <View className="flex-1">
            <Text className="font-sans-bold text-primary text-sm">You're making progress</Text>
            <Text className="font-sans text-muted text-xs">Keep choosing intention over impulse.</Text>
          </View>
          <View className="w-16 h-12 items-center justify-center">
            <SunIcon />
          </View>
        </SoftCard>
      </ScrollView>
    </ScreenWrapper>
  );
}

const SunIcon = () => (
  <View className="items-center justify-center">
    <View className="w-8 h-8 bg-white/40 rounded-full border border-primary/10 items-center justify-center">
      <View className="w-4 h-4 bg-[#F2994A]/20 rounded-full" />
    </View>
  </View>
);

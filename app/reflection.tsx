import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { SoftButton } from '../components/SoftButton';
import { Chip } from '../components/Chip';
import { PathLogo } from '../components/PathLogo';
import { FooterIllustration } from '../components/FooterIllustration';

export default function Reflection() {
  const router = useRouter();
  const [reflection, setReflection] = useState('');
  const [mood, setMood] = useState('');

  return (
    <ScreenWrapper className="bg-ivory">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View className="flex-1 px-8 pt-10">
          <View className="items-center mb-10">
            <PathLogo size={60} />
            <Text style={styles.serifText} className="text-3xl text-forest text-center mt-6">
              What were you{"\n"}trying to escape?
            </Text>
          </View>

          <View style={styles.inputContainer} className="bg-white/40 rounded-2xl p-4 border border-forest/5 mb-8">
            <TextInput
              className="text-forest text-lg h-32"
              placeholder="Write your heart here..."
              placeholderTextColor="rgba(58, 82, 68, 0.3)"
              multiline
              value={reflection}
              onChangeText={setReflection}
              textAlignVertical="top"
            />
          </View>

          <Text className="text-forest/40 font-bold text-xs mb-4 uppercase tracking-widest text-center">
            How are you feeling now?
          </Text>

          <View className="flex-row flex-wrap justify-center gap-2 mb-12">
            {['Peaceful', 'Still Anxious', 'Grateful', 'Focusing', 'Refreshed'].map(m => (
              <Chip 
                key={m} 
                label={m} 
                selected={mood === m} 
                onPress={() => setMood(m)}
                style={mood === m ? { backgroundColor: '#3A5244', borderColor: '#3A5244' } : { borderColor: '#3A524433' }}
                textStyle={mood === m ? { color: 'white' } : { color: '#3A5244' }}
              />
            ))}
          </View>

          <SoftButton 
            title="Complete Reflection" 
            onPress={() => router.push('/dashboard')} 
            disabled={!mood}
          />
        </View>
        <FooterIllustration />
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  serifText: {
    fontFamily: 'serif',
  },
  inputContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  }
});

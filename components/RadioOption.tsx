import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { SoftCard } from './SoftCard';
import { Check } from 'lucide-react-native';

interface RadioOptionProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
  className?: string;
}

export const RadioOption = ({ label, selected, onSelect, className = '' }: RadioOptionProps) => {
  return (
    <TouchableOpacity 
      onPress={onSelect}
      activeOpacity={0.7}
      className={`mb-3 ${className}`}
    >
      <SoftCard className={`p-4 py-3 flex-row items-center justify-between ${selected ? 'border-primary' : 'bg-white/50 border-transparent'}`}>
        <Text className={`font-serif text-lg ${selected ? 'text-primary font-bold' : 'text-primary/60'}`}>
          {label}
        </Text>
        <View className={`w-6 h-6 rounded-full items-center justify-center border ${selected ? 'bg-primary border-primary' : 'border-primary/20'}`}>
          {selected && <Check size={14} color="white" />}
        </View>
      </SoftCard>
    </TouchableOpacity>
  );
};

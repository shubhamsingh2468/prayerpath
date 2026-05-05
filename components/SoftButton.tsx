import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle, StyleSheet, View } from 'react-native';
import { ArrowRight } from 'lucide-react-native';

interface SoftButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export const SoftButton = ({ onPress, title, variant = 'primary', style, textStyle, disabled }: SoftButtonProps) => {
  const isPrimary = variant === 'primary';
  
  return (
    <TouchableOpacity 
      onPress={onPress} 
      className={`h-[56px] rounded-full flex-row justify-center items-center px-8 ${isPrimary ? 'bg-forest' : 'bg-transparent border border-forest/20'}`}
      style={[
        styles.button, 
        isPrimary ? styles.primary : styles.secondary,
        disabled && { opacity: 0.5 },
        style
      ]}
      disabled={disabled}
      accessibilityRole="button"
    >
      <View className="flex-1 items-center">
        <Text 
          className={`font-semibold text-lg ${isPrimary ? 'text-white' : 'text-forest'}`}
          style={[styles.text, isPrimary ? { color: '#FFF' } : { color: '#3A5244' }, textStyle]}
        >
          {title}
        </Text>
      </View>
      <ArrowRight size={20} color={isPrimary ? "#FFF" : "#3A5244"} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  primary: {
    backgroundColor: '#3A5244',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(58, 82, 68, 0.2)',
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
  },
});

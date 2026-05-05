import React from 'react';
import { TouchableOpacity, Text, ViewStyle, StyleSheet } from 'react-native';

interface ChipProps {
  label: string;
  selected: boolean;
  onPress: () => void;
  style?: ViewStyle;
}

export const Chip = ({ label, selected, onPress, style }: ChipProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-5 py-3 rounded-full border m-1 ${selected ? 'bg-forest border-forest' : 'bg-transparent border-forest/10'}`}
      style={[
        { minHeight: 48, minWidth: 48, justifyContent: 'center', alignItems: 'center' }, 
        selected && styles.selected,
        style
      ]}
    >
      <Text className={`text-base font-medium ${selected ? 'text-white' : 'text-forest/60'}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  selected: {
    backgroundColor: '#3A5244',
  }
});

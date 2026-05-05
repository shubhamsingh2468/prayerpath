import React, { ReactNode } from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';

interface SoftCardProps {
  children: ReactNode;
  style?: ViewStyle;
  className?: string;
}

export const SoftCard = ({ children, style, className = '' }: SoftCardProps) => {
  return (
    <View 
      className={`bg-ivory rounded-[30px] p-6 shadow-sm border border-sage/10 ${className}`}
      style={[styles.card, style]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FCFAF7',
    borderRadius: 30,
    padding: 24,
    borderWidth: 1,
    borderColor: '#D1DACE1A',
  },
});

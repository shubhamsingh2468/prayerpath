import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenWrapperProps {
  children: ReactNode;
  className?: string;
  useSafeArea?: boolean;
}

export const ScreenWrapper = ({ children, className = '', useSafeArea = true }: ScreenWrapperProps) => {
  if (!useSafeArea) {
    return (
      <View 
        className={`flex-1 bg-ivory ${className}`}
        style={styles.container}
      >
        {children}
      </View>
    );
  }
  
  return (
    <SafeAreaView 
      className={`flex-1 bg-ivory ${className}`}
      style={styles.container}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFAF7', // Ivory fallback
  },
});

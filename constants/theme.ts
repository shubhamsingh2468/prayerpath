/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const primaryColor = '#2D4F36';
const backgroundColor = '#F9F7F2';

export const Colors = {
  light: {
    text: '#2D4F36',
    background: backgroundColor,
    tint: primaryColor,
    icon: '#2D4F36',
    tabIconDefault: '#A8B5A3',
    tabIconSelected: primaryColor,
    surface: '#FFFFFF',
    border: '#E8E4D9',
  },
  dark: {
    text: '#F9F7F2',
    background: '#1A2E20',
    tint: '#A8B5A3',
    icon: '#A8B5A3',
    tabIconDefault: '#6B7F70',
    tabIconSelected: '#F9F7F2',
    surface: '#2D4F36',
    border: '#3A5244',
  },
};

export const Fonts = {
  serif: 'PlayfairDisplay_400Regular',
  serifBold: 'PlayfairDisplay_700Bold',
  sans: 'Inter_400Regular',
  sansBold: 'Inter_700Bold',
};

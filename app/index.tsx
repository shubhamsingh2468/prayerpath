import { Redirect } from 'expo-router';

export default function Index() {
  // In a real app, you would check if onboarding is complete using AsyncStorage
  // For now, we always show onboarding first
  return <Redirect href="/onboarding" />;
}

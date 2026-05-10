import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useRouter } from 'expo-router';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { PathLogo } from '../components/PathLogo';
import { Check, Lock, Leaf, ChevronRight, ArrowLeft, Heart, Shield, Zap, Info, Clock, AlertTriangle, Star } from 'lucide-react-native';
import { SoftCard } from '../components/SoftCard';
import { RadioOption } from '../components/RadioOption';
import { useUserContext } from '../hooks/useUserContext';
import { Colors } from '../constants/theme';

const { width, height } = Dimensions.get('window');

const ONBOARDING_STEPS = [
  'welcome', 'val_1', 'val_2', 'profile_intro', 'age', 'usage', 'hook_usage', 
  'val_3', 'goals_1', 'goals_2', 'commitment', 'plan_intro', 'plan_details', 
  'hook_limit', 'apps', 'comparison', 'paywall', 'mode', 'success'
];

export default function OnboardingScreen() {
  const router = useRouter();
  const pagerRef = useRef<PagerView>(null);
  const { userData, setUserData } = useUserContext();
  const [activePage, setActivePage] = useState(0);

  const totalSteps = ONBOARDING_STEPS.length;

  const nextStep = () => {
    if (activePage < totalSteps - 1) {
      pagerRef.current?.setPage(activePage + 1);
    } else {
      router.replace('/(tabs)');
    }
  };

  const prevStep = () => {
    if (activePage > 0) {
      // Don't allow going back from hook screen as per instructions
      if (ONBOARDING_STEPS[activePage] === 'hook_usage') return;
      pagerRef.current?.setPage(activePage - 1);
    }
  };

  const handleSelection = (key: string, value: any, autoNext = false) => {
    setUserData(prev => ({ ...prev, [key]: value }));
    if (autoNext) {
      setTimeout(() => nextStep(), 300);
    }
  };

  const toggleApp = (id: string) => {
    const currentApps = userData.apps || [];
    const newApps = currentApps.includes(id) 
      ? currentApps.filter(a => a !== id) 
      : [...currentApps, id];
    setUserData(prev => ({ ...prev, apps: newApps }));
  };

  const APPS = [
    { id: 'TikTok', name: 'TikTok', color: '#000000' },
    { id: 'Instagram', name: 'Instagram', color: '#E1306C' },
    { id: 'YouTube', name: 'YouTube', color: '#FF0000' },
    { id: 'Facebook', name: 'Facebook', color: '#1877F2' },
    { id: 'X', name: 'X / Twitter', color: '#000000' },
    { id: 'Snapchat', name: 'Snapchat', color: '#FFFC00' },
    { id: 'Safari', name: 'Safari / browser', color: '#007AFF' },
  ];

  return (
    <ScreenWrapper useSafeArea={true}>
      <View style={{ flex: 1 }}>
        {/* Top Header with Progress and Back */}
        <View className="px-6 flex-row items-center justify-between py-4">
          <View className="w-10">
            {activePage > 0 && ONBOARDING_STEPS[activePage] !== 'hook_usage' && (
              <TouchableOpacity onPress={prevStep}>
                <ArrowLeft size={24} color={Colors.light.primary} />
              </TouchableOpacity>
            )}
          </View>
          
          <View className="flex-1 flex-row justify-center gap-1.5 px-4">
            {ONBOARDING_STEPS.map((_, i) => (
              <View 
                key={i} 
                className={`h-1 rounded-full ${activePage >= i ? 'bg-primary' : 'bg-primary/10'}`}
                style={{ flex: 1, maxWidth: 20 }}
              />
            ))}
          </View>
          
          <View className="w-10" />
        </View>

        <PagerView 
          ref={pagerRef}
          style={{ flex: 1 }}
          initialPage={0}
          onPageSelected={(e) => setActivePage(e.nativeEvent.position)}
          scrollEnabled={false} // Disable swiping to force sequential flow
        >
          {/* 1. Welcome */}
          <View key="welcome" className="flex-1 items-center justify-center px-8">
            <PathLogo size={140} />
            <Text className="font-serif text-4xl text-primary text-center mt-10 leading-tight">
              Welcome to{"\n"}Prayer Path
            </Text>
            <View className="w-12 h-[1px] bg-primary/10 my-8" />
            <Text className="font-sans text-muted text-xl text-center leading-relaxed">
              A calmer way to stop{"\n"}doom scrolling and{"\n"}return to prayer.
            </Text>
          </View>

          {/* 2. Value Prop 1 */}
          <View key="val_1" className="flex-1 items-center justify-center px-8">
            <View className="bg-primary/5 p-6 rounded-full mb-8">
              <Heart size={48} color={Colors.light.primary} />
            </View>
            <Text className="font-serif text-3xl text-primary text-center leading-tight">
              Your attention is valuable.{"\n"}
              <Text className="text-[#D98A6C]">Where it goes matters.</Text>
            </Text>
            <Text className="font-sans text-muted text-lg text-center mt-6">
              Modern apps are designed to keep you scrolling. We help you take back control.
            </Text>
          </View>

          {/* 3. Value Prop 2 */}
          <View key="val_2" className="flex-1 items-center justify-center px-8">
            <View className="bg-primary/5 p-6 rounded-full mb-8">
              <Star size={48} color={Colors.light.primary} />
            </View>
            <Text className="font-serif text-3xl text-primary text-center leading-tight">
              Prayer Path helps you{"\n"}put <Text className="text-[#D98A6C]">God-First.</Text>
            </Text>
            <Text className="font-sans text-muted text-lg text-center mt-6">
              Replace mindless scrolling with meaningful prayer moments throughout your day.
            </Text>
          </View>

          {/* 4. Profile Intro */}
          <View key="profile_intro" className="flex-1 items-center justify-center px-8">
            <PathLogo size={100} />
            <Text className="font-serif text-3xl text-primary text-center mt-10 leading-tight">
              Let's get to{"\n"}know you
            </Text>
            <Text className="font-sans text-muted text-lg text-center mt-4">
              We'll tailor your experience to your specific needs and habits.
            </Text>
          </View>

          {/* 5. Age Quiz */}
          <View key="age" className="flex-1 pt-10 px-8">
            <Text className="font-serif text-3xl text-primary mb-2">How old are you?</Text>
            <Text className="font-sans text-muted text-lg mb-8">This helps us tailor your experience.</Text>
            <View>
              {['14-24', '25-34', '35-44', '45-54', '55+'].map(range => (
                <RadioOption 
                  key={range}
                  label={range}
                  selected={userData.age === range}
                  onSelect={() => handleSelection('age', range)}
                />
              ))}
            </View>
          </View>

          {/* 6. Phone Usage Quiz */}
          <View key="usage" className="flex-1 pt-10 px-8">
            <Text className="font-serif text-3xl text-primary mb-2">How long are you on your phone each day?</Text>
            <Text className="font-sans text-muted text-lg mb-8 italic">Be honest with yourself.</Text>
            <View>
              {['1-2 hours', '2-3 hours', '3-4 hours', '4-5 hours', '5-6 hours', '6+ hours'].map(time => (
                <RadioOption 
                  key={time}
                  label={time}
                  selected={userData.phoneUsage === time}
                  onSelect={() => handleSelection('phoneUsage', time, true)} // Immediate transition
                />
              ))}
            </View>
          </View>

          {/* 7. Hook Usage Screen */}
          <View key="hook_usage" className="flex-1 items-center justify-center px-8">
            <Text className="text-8xl mb-10">🤯</Text>
            <Text className="font-serif text-3xl text-primary text-center leading-tight">
              That's {userData.phoneUsage || '2-3 hours'} each day, or <Text className="text-[#F2994A]">15 hours every week.</Text>
            </Text>
            <Text className="font-sans text-muted text-lg text-center mt-6">
              Over a lifetime, that's nearly 10 years spent on a screen.
            </Text>
          </View>

          {/* 8. Value Prop 3 */}
          <View key="val_3" className="flex-1 items-center justify-center px-8">
            <Text className="font-serif text-3xl text-primary text-center leading-tight">
              You don't need a{"\n"}perfect routine.
            </Text>
            <Text className="font-sans text-muted text-lg text-center mt-6">
              Start with just <Text className="text-[#D98A6C] font-bold">5 minutes</Text> for God today. Small moments, big impact.
            </Text>
          </View>

          {/* 9. Goals 1 */}
          <View key="goals_1" className="flex-1 pt-10 px-8">
            <Text className="font-serif text-3xl text-primary mb-2">What are you hoping to improve?</Text>
            <Text className="font-sans text-muted text-lg mb-8">Select your main priorities.</Text>
            <View>
              {['Reduce screen time', 'Pray more consistently', 'Better sleep', 'Mental clarity', 'Spiritual growth'].map(goal => (
                <RadioOption 
                  key={goal}
                  label={goal}
                  selected={(userData.goals || []).includes(goal)}
                  onSelect={() => {
                    const current = userData.goals || [];
                    const next = current.includes(goal) ? current.filter(g => g !== goal) : [...current, goal];
                    handleSelection('goals', next);
                  }}
                />
              ))}
            </View>
          </View>

          {/* 10. Goals 2 */}
          <View key="goals_2" className="flex-1 pt-10 px-8">
            <Text className="font-serif text-3xl text-primary mb-2">What usually pulls you into scrolling?</Text>
            <View>
              {['Boredom', 'Stress', 'FOMO', 'Habit', 'Work'].map(trigger => (
                <RadioOption 
                  key={trigger}
                  label={trigger}
                  selected={(userData.goals || []).includes(trigger)}
                  onSelect={() => {
                    const current = userData.goals || [];
                    const next = current.includes(trigger) ? current.filter(g => g !== trigger) : [...current, trigger];
                    handleSelection('goals', next);
                  }}
                />
              ))}
            </View>
          </View>

          {/* 11. Commitment */}
          <View key="commitment" className="flex-1 pt-10 px-8">
            <Text className="font-serif text-3xl text-primary mb-2">How committed are you to improving your goals?</Text>
            <View>
              {['Just testing it out', 'Somewhat committed', 'Very committed', 'I need this now'].map(level => (
                <RadioOption 
                  key={level}
                  label={level}
                  selected={userData.commitment === level}
                  onSelect={() => handleSelection('commitment', level)}
                />
              ))}
            </View>
          </View>

          {/* 12. Plan Intro */}
          <View key="plan_intro" className="flex-1 items-center justify-center px-8">
            <View className="bg-green-100 p-4 rounded-full mb-6">
              <Check size={40} color={Colors.light.primary} />
            </View>
            <Text className="font-serif text-4xl text-primary text-center leading-tight">
              You're all set!
            </Text>
            <Text className="font-sans text-muted text-lg text-center mt-4">
              We've created a personalized plan to help you reclaim your time.
            </Text>
          </View>

          {/* 13. Journey Plan Details */}
          <View key="plan_details" className="flex-1 pt-10 px-8">
            <Text className="font-serif text-3xl text-primary mb-6">Here's your journey plan</Text>
            <SoftCard className="p-6 mb-4">
              <View className="flex-row items-center mb-4">
                <Clock size={20} color={Colors.light.primary} className="mr-3" />
                <Text className="font-sans-bold text-primary">Daily Prayer Goal: 15 mins</Text>
              </View>
              <View className="flex-row items-center mb-4">
                <Zap size={20} color={Colors.light.primary} className="mr-3" />
                <Text className="font-sans-bold text-primary">Interrupt Mode: Soft Reminders</Text>
              </View>
              <View className="flex-row items-center">
                <Shield size={20} color={Colors.light.primary} className="mr-3" />
                <Text className="font-sans-bold text-primary">Focus Apps: {userData.apps?.length || 3} Selected</Text>
              </View>
            </SoftCard>
          </View>

          {/* 14. Hook Limit Screen */}
          <View key="hook_limit" className="flex-1 items-center justify-center px-8">
            <View className="bg-orange-100 p-6 rounded-full mb-8">
              <AlertTriangle size={48} color="#F2994A" />
            </View>
            <Text className="font-serif text-3xl text-primary text-center leading-tight">
              Screen Time Limit
            </Text>
            <Text className="font-sans text-muted text-lg text-center mt-6">
              You've already spent <Text className="font-bold">42 minutes</Text> on Instagram today. Would you like to switch to prayer?
            </Text>
          </View>

          {/* 15. App Selection */}
          <View key="apps" className="flex-1 pt-4 px-8">
            <View className="items-center mb-6">
              <Text className="font-serif text-3xl text-primary text-center mt-6 leading-tight">
                Which apps do you use?
              </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {APPS.map(app => (
                <TouchableOpacity 
                  key={app.id} 
                  onPress={() => toggleApp(app.id)}
                  activeOpacity={0.7}
                  className="mb-3"
                >
                  <SoftCard className={`p-4 py-3 flex-row items-center justify-between ${(userData.apps || []).includes(app.id) ? 'border-primary' : 'bg-white/50 border-transparent'}`}>
                    <View className="flex-row items-center">
                      <View 
                        className="w-10 h-10 rounded-xl mr-4 items-center justify-center"
                        style={{ backgroundColor: app.color + '20' }}
                      >
                        <Text className="font-sans-bold text-primary text-xs">{app.name[0]}</Text>
                      </View>
                      <Text className="font-serif text-lg text-primary">{app.name}</Text>
                    </View>
                    <View className={`w-6 h-6 rounded-full items-center justify-center border ${(userData.apps || []).includes(app.id) ? 'bg-primary border-primary' : 'border-primary/20'}`}>
                      {(userData.apps || []).includes(app.id) && <Check size={14} color="white" />}
                    </View>
                  </SoftCard>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* 16. Comparison Screen */}
          <View key="comparison" className="flex-1 items-center justify-center px-8">
            <Text className="font-serif text-3xl text-primary text-center leading-tight mb-10">
              After Prayer Path
            </Text>
            <View className="flex-row justify-between w-full">
              <View className="items-center flex-1">
                <View className="w-16 h-16 bg-red-100 rounded-full items-center justify-center mb-4">
                  <Text className="text-2xl">📱</Text>
                </View>
                <Text className="text-primary text-center font-sans">Scrolling{"\n"}Endlessly</Text>
              </View>
              <View className="items-center justify-center">
                <ChevronRight size={32} color={Colors.light.primary} />
              </View>
              <View className="items-center flex-1">
                <View className="w-16 h-16 bg-green-100 rounded-full items-center justify-center mb-4">
                  <Text className="text-2xl">🙏</Text>
                </View>
                <Text className="text-primary text-center font-sans">Peaceful{"\n"}Prayer</Text>
              </View>
            </View>
          </View>

          {/* 17. Paywall */}
          <View key="paywall" className="flex-1 px-8 pt-10">
            <Text className="font-serif text-3xl text-primary mb-2 text-center">Unlock your full{"\n"}Prayer Path</Text>
            <Text className="font-sans text-muted text-lg mb-8 text-center">Join 10,000+ others finding peace.</Text>
            
            <SoftCard className="p-8 border-2 border-primary mb-6">
              <Text className="font-serif text-center text-primary text-2xl mb-2">$4.99 / month</Text>
              <Text className="font-sans text-center text-muted mb-6">Cancel anytime.</Text>
              
              <View className="gap-4 mb-8">
                <View className="flex-row items-center">
                  <Check size={18} color={Colors.light.primary} className="mr-3" />
                  <Text className="text-primary">Unlimited Prayer Interrupts</Text>
                </View>
                <View className="flex-row items-center">
                  <Check size={18} color={Colors.light.primary} className="mr-3" />
                  <Text className="text-primary">Advanced Stats & Insights</Text>
                </View>
                <View className="flex-row items-center">
                  <Check size={18} color={Colors.light.primary} className="mr-3" />
                  <Text className="text-primary">Personalized Prayer Library</Text>
                </View>
              </View>

              <TouchableOpacity 
                className="bg-primary py-4 rounded-2xl items-center"
                onPress={nextStep}
              >
                <Text className="text-white font-sans-bold text-lg">Start 7-Day Free Trial</Text>
              </TouchableOpacity>
            </SoftCard>
            
            <TouchableOpacity className="items-center" onPress={nextStep}>
              <Text className="text-muted font-sans underline">Or continue with limited version</Text>
            </TouchableOpacity>
          </View>

          {/* 18. Mode Selection */}
          <View key="mode" className="flex-1 pt-10 px-8">
            <Text className="font-serif text-2xl text-primary text-center mb-8">
              How would you like{"\n"}Prayer Path to work?
            </Text>
            <View className="gap-4">
              <TouchableOpacity onPress={() => handleSelection('mode', 'soft')} activeOpacity={0.8}>
                <SoftCard className={`p-5 ${userData.mode === 'soft' ? 'border-2 border-primary' : 'bg-white'}`}>
                  <View className="flex-row">
                    <View className="w-12 h-12 rounded-full bg-primary/10 items-center justify-center mr-4">
                      <Leaf size={24} color={Colors.light.primary} />
                    </View>
                    <View className="flex-1">
                      <View className="flex-row justify-between items-center mb-1">
                        <Text className="font-sans-bold text-lg text-primary">Soft Mode</Text>
                        {userData.mode === 'soft' && <View className="bg-primary rounded-full p-1"><Check size={12} color="white" /></View>}
                      </View>
                      <Text className="font-sans text-muted text-sm">Gentle reminders to pause and pray.</Text>
                    </View>
                  </View>
                </SoftCard>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSelection('mode', 'strict')} activeOpacity={0.8}>
                <SoftCard className={`p-5 ${userData.mode === 'strict' ? 'border-2 border-primary' : 'bg-white'}`}>
                  <View className="flex-row">
                    <View className="w-12 h-12 rounded-full bg-primary/10 items-center justify-center mr-4">
                      <Lock size={24} color={Colors.light.primary} />
                    </View>
                    <View className="flex-1">
                      <View className="flex-row justify-between items-center mb-1">
                        <Text className="font-sans-bold text-lg text-primary">Strict Mode</Text>
                        {userData.mode === 'strict' && <View className="bg-primary rounded-full p-1"><Check size={12} color="white" /></View>}
                      </View>
                      <Text className="font-sans text-muted text-sm">Complete a prayer before unlocking.</Text>
                    </View>
                  </View>
                </SoftCard>
              </TouchableOpacity>
            </View>
          </View>

          {/* 19. Success Step */}
          <View key="success" className="flex-1 pt-10 px-8">
            <Text className="font-serif text-3xl text-primary mb-6">Let's take your{"\n"}first step together.</Text>
            <SoftCard className="bg-white p-8 py-12">
              <Text className="font-serif text-xl text-primary text-center italic leading-relaxed">
                "Heavenly Father, help me to pause, turn away from distractions, and draw near to You.{"\n\n"}
                Guide my mind, calm my heart, and fill me with Your peace."
              </Text>
            </SoftCard>
          </View>
        </PagerView>

        {/* Persistent Bottom Action */}
        <View className="px-8 pb-12 pt-6">
          <TouchableOpacity 
            className="bg-primary h-16 rounded-2xl items-center justify-center flex-row shadow-lg"
            onPress={nextStep}
          >
            <Text className="text-white font-sans-bold text-xl mr-2">
              {activePage === totalSteps - 1 ? 'Go to Dashboard' : 'Continue'}
            </Text>
            <ChevronRight size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}


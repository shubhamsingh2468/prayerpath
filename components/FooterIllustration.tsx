import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path as SvgPath } from 'react-native-svg';
import { Leaf } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export const FooterIllustration = () => {
  return (
    <View style={styles.footerContainer}>
      <Svg width={width} height={150} viewBox={`0 0 ${width} 150`}>
        {/* Soft hills background */}
        <SvgPath
          d={`M0 100 Q${width/2} 50 ${width} 100 L${width} 150 L0 150 Z`}
          fill="#F2EAE0"
          opacity={0.8}
        />
        {/* The Path */}
        <SvgPath
          d={`M${width*0.3} 150 Q${width/2} 80 ${width*0.7} 150`}
          stroke="#C5B18D"
          strokeWidth="35"
          fill="none"
          strokeLinecap="round"
          opacity={0.6}
        />
      </Svg>
      {/* Absolute positioned leaves for better control */}
      <Leaf size={24} color="#3A5244" opacity={0.4} style={{ position: 'absolute', bottom: 30, left: 20 }} />
      <Leaf size={20} color="#3A5244" opacity={0.3} style={{ position: 'absolute', bottom: 50, right: 30, transform: [{scaleX: -1}] }} />
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 150,
    zIndex: -1,
  }
});

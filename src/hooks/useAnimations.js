import { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

// Hook para animaciones de entrada suaves
export const useSlideInAnimation = (delay = 0) => {
  const slideAnim = useRef(new Animated.Value(50)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        delay,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 600,
        delay,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]);

    animation.start();

    return () => animation.stop();
  }, [slideAnim, opacityAnim, delay]);

  return {
    transform: [{ translateY: slideAnim }],
    opacity: opacityAnim,
  };
};

// Hook para animaciones de escala (botones, cards)
export const useScaleAnimation = (trigger, options = {}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const { 
    scaleTo = 0.95, 
    duration = 150, 
    returnDuration = 150 
  } = options;

  useEffect(() => {
    if (trigger) {
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: scaleTo,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: returnDuration,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [trigger, scaleAnim, scaleTo, duration, returnDuration]);

  return {
    transform: [{ scale: scaleAnim }],
  };
};

// Hook para animaciones de fade
export const useFadeAnimation = (visible, duration = 300) => {
  const fadeAnim = useRef(new Animated.Value(visible ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: visible ? 1 : 0,
      duration,
      useNativeDriver: true,
    }).start();
  }, [visible, fadeAnim, duration]);

  return {
    opacity: fadeAnim,
  };
};

// Hook para animaciones de rotación
export const useRotateAnimation = (trigger, options = {}) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const { degrees = 360, duration = 1000, loop = false } = options;

  useEffect(() => {
    if (trigger) {
      const animation = Animated.timing(rotateAnim, {
        toValue: 1,
        duration,
        easing: Easing.linear,
        useNativeDriver: true,
      });

      if (loop) {
        Animated.loop(animation).start();
      } else {
        animation.start(() => {
          rotateAnim.setValue(0);
        });
      }
    }
  }, [trigger, rotateAnim, duration, loop]);

  return {
    transform: [
      {
        rotate: rotateAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', `${degrees}deg`],
        }),
      },
    ],
  };
};

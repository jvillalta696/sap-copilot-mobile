import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { colors } from '../../constants';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator 
        size="large" 
        color={colors.primary}
        style={styles.loader}
      />
      <Text style={styles.text}>Cargando SAP Copilot...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  loader: {
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: '500',
  },
});

export default LoadingScreen;

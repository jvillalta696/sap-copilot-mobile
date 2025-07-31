import React from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import { TextInput, IconButton, Card } from 'react-native-paper';
import { colors } from '../../constants';

const { width } = Dimensions.get('window');

const ChatInput = ({ 
  value, 
  onChangeText, 
  onSend, 
  disabled = false,
  placeholder = "Pregunta sobre tu empresa..."
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const focusAnim = React.useRef(new Animated.Value(0)).current;
  const sendButtonScale = React.useRef(new Animated.Value(0.8)).current;

  React.useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, focusAnim]);

  React.useEffect(() => {
    Animated.spring(sendButtonScale, {
      toValue: value.trim() ? 1 : 0.8,
      tension: 150,
      friction: 8,
      useNativeDriver: true,
    }).start();
  }, [value, sendButtonScale]);

  const handleSend = () => {
    if (value.trim() && !disabled) {
      // Animación del botón de envío
      Animated.sequence([
        Animated.timing(sendButtonScale, {
          toValue: 1.2,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(sendButtonScale, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
      
      onSend();
    }
  };

  const cardStyle = {
    elevation: focusAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [2, 8],
    }),
    transform: [
      {
        scale: focusAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.02],
        }),
      },
    ],
  };

  const sendButtonStyle = {
    transform: [{ scale: sendButtonScale }],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={cardStyle}>
        <Card style={styles.inputCard}>
          <View style={styles.inputContainer}>
            <TextInput
              value={value}
              onChangeText={onChangeText}
              placeholder={placeholder}
              mode="outlined"
              multiline
              maxLength={500}
              disabled={disabled}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              style={styles.textInput}
              contentStyle={styles.textInputContent}
              theme={{
                colors: {
                  primary: colors.primary,
                  outline: 'transparent',
                  background: 'transparent',
                },
              }}
              render={(props) => (
                <View style={styles.inputWrapper}>
                  <TextInput.NativeTextInput
                    {...props}
                    style={[props.style, styles.nativeInput]}
                  />
                </View>
              )}
            />
            
            <Animated.View style={sendButtonStyle}>
              <IconButton
                icon={disabled ? "dots-horizontal" : "send"}
                size={24}
                iconColor={value.trim() && !disabled ? colors.primary : colors.textSecondary}
                onPress={handleSend}
                disabled={!value.trim() || disabled}
                style={[
                  styles.sendButton,
                  (value.trim() && !disabled) && styles.sendButtonActive
                ]}
              />
            </Animated.View>
          </View>
        </Card>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.background,
  },
  inputCard: {
    backgroundColor: colors.surface,
    borderRadius: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 4,
    paddingVertical: 4,
    minHeight: 56,
  },
  inputWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    backgroundColor: 'transparent',
    maxHeight: 120,
  },
  textInputContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  nativeInput: {
    fontSize: 16,
    lineHeight: 22,
    color: colors.text,
  },
  sendButton: {
    margin: 4,
    backgroundColor: 'transparent',
  },
  sendButtonActive: {
    backgroundColor: colors.surface,
    elevation: 2,
  },
});

export default ChatInput;

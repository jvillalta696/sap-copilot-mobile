import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Text, Card, Avatar } from 'react-native-paper';
import { colors } from '../../constants';

const ChatMessage = ({ 
  message, 
  index,
  animatedValue = new Animated.Value(0)
}) => {
  const { text, isUser, timestamp } = message;
  React.useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: 1,
      tension: 100,
      friction: 8,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  const messageStyle = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.8, 1],
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 0],
        }),
      },
    ],
    opacity: animatedValue,
  };

  return (
    <Animated.View style={[styles.messageContainer, messageStyle]}>
      <View style={[
        styles.messageWrapper,
        isUser ? styles.userMessageWrapper : styles.botMessageWrapper
      ]}>
        {!isUser && (
          <Avatar.Icon
            size={32}
            icon="robot"
            style={styles.botAvatar}
          />
        )}
        
        <Card style={[
          styles.messageCard,
          isUser ? styles.userMessage : styles.botMessage
        ]}>
          <Card.Content style={styles.messageContent}>
            <Text style={[
              styles.messageText,
              isUser ? styles.userMessageText : styles.botMessageText
            ]}>
              {text}
            </Text>
                        {timestamp && (
              <Text style={[
                styles.timestamp,
                isUser ? styles.userTimestamp : styles.botTimestamp
              ]}>
                {new Date(timestamp).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
              </Text>
            )}
          </Card.Content>
        </Card>

        {isUser && (
          <Avatar.Icon
            size={32}
            icon="account"
            style={styles.userAvatar}
          />
        )}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    marginVertical: 4,
    paddingHorizontal: 16,
  },
  messageWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  userMessageWrapper: {
    justifyContent: 'flex-end',
  },
  botMessageWrapper: {
    justifyContent: 'flex-start',
  },
  messageCard: {
    maxWidth: '75%',
    elevation: 2,
  },
  userMessage: {
    backgroundColor: colors.primary,
    marginLeft: 8,
  },
  botMessage: {
    backgroundColor: colors.surface,
    marginRight: 8,
    borderColor: colors.border,
    borderWidth: 1,
  },
  messageContent: {
    padding: 12,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  userMessageText: {
    color: colors.surface,
  },
  botMessageText: {
    color: colors.text,
  },
  timestamp: {
    fontSize: 12,
    marginTop: 4,
    opacity: 0.7,
  },
  userTimestamp: {
    color: colors.surface,
    textAlign: 'right',
  },
  botTimestamp: {
    color: colors.textSecondary,
    textAlign: 'left',
  },
  botAvatar: {
    backgroundColor: colors.accent,
  },
  userAvatar: {
    backgroundColor: colors.success,
  },
});

export default ChatMessage;

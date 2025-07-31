import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';
import { colors } from '../../constants';

const ChatInput = ({ 
  onSendMessage, 
  disabled = false,
  placeholder = "Escribe tu consulta..."
}) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim() && !disabled) {
      onSendMessage(text.trim());
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        mode="outlined"
        value={text}
        onChangeText={setText}
        placeholder={placeholder}
        multiline
        numberOfLines={1}
        maxLength={500}
        disabled={disabled}
        theme={{
          colors: {
            primary: colors.primary,
            outline: colors.border,
            onSurfaceVariant: colors.textSecondary,
            onSurface: colors.text,
            surface: colors.surface,
          },
        }}
        right={
          <TextInput.Icon
            icon="send"
            onPress={handleSend}
            disabled={!text.trim() || disabled}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  textInput: {
    backgroundColor: colors.surface,
    fontSize: 16,
  },
});

export default ChatInput;

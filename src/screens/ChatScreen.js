import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { 
  ChatMessage, 
  ChatInput, 
  TypingIndicator, 
  SuggestionPanel 
} from '../components/chat';
import { colors } from '../constants/colors';
import { useAnimations } from '../hooks/useAnimations';

const ChatScreen = () => {
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: '¡Hola! Soy SAP Copilot, tu asistente inteligente. ¿En qué puedo ayudarte hoy?',
      isUser: false,
      timestamp: new Date().toISOString(),
    }
  ]);
  
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  
  // Animaciones para la entrada de mensajes
  const { fadeInUp, isAnimating } = useAnimations();

  // Simular respuesta del bot
  const simulateBotResponse = useCallback(async (userMessage) => {
    setIsTyping(true);
    setShowSuggestions(false);
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000));
    
    const responses = [
      'He analizado tu consulta. Basándome en los datos de SAP, aquí tienes la información solicitada.',
      'Excelente pregunta. Según los módulos de SAP, esto es lo que he encontrado para ti.',
      'Procesando tu solicitud con los sistemas SAP. Aquí está el análisis detallado.',
      'He consultado las bases de datos relevantes. Esta es mi recomendación profesional.',
      'Basándome en las mejores prácticas de SAP, te sugiero esta aproximación.',
    ];
    
    const botResponse = {
      id: Date.now().toString(),
      text: responses[Math.floor(Math.random() * responses.length)],
      isUser: false,
      timestamp: new Date().toISOString(),
    };
    
    setMessages(prev => [...prev, botResponse]);
    setIsTyping(false);
    
    // Mostrar sugerencias después de algunas respuestas
    if (messages.length > 3) {
      setTimeout(() => setShowSuggestions(true), 1000);
    }
  }, [messages.length]);

  const handleSendMessage = useCallback(async (text) => {
    if (!text.trim()) return;
    
    const userMessage = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser: true,
      timestamp: new Date().toISOString(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Scroll al final
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
    
    // Simular respuesta del bot
    await simulateBotResponse(text);
  }, [simulateBotResponse]);

  const handleSuggestionPress = useCallback((suggestion) => {
    handleSendMessage(suggestion.text);
  }, [handleSendMessage]);

  const renderMessage = useCallback(({ item, index }) => (
    <ChatMessage 
      message={item} 
      index={index}
      style={{ 
        opacity: fadeInUp,
        transform: [{ 
          translateY: fadeInUp.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 0],
          })
        }]
      }}
    />
  ), [fadeInUp]);

  const renderFooter = useCallback(() => (
    <View style={styles.footerContainer}>
      {isTyping && <TypingIndicator />}
      {showSuggestions && messages.length <= 3 && (
        <SuggestionPanel 
          onSuggestionPress={handleSuggestionPress}
          style={styles.suggestionsContainer}
        />
      )}
    </View>
  ), [isTyping, showSuggestions, messages.length, handleSuggestionPress]);

  useEffect(() => {
    // Scroll al final cuando llegan nuevos mensajes
    if (messages.length > 1) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages.length]);

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header 
        style={styles.header}
        statusBarHeight={0}
      >
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content 
          title="SAP Copilot" 
          subtitle="Asistente Inteligente"
          titleStyle={styles.headerTitle}
          subtitleStyle={styles.headerSubtitle}
        />
        <Appbar.Action 
          icon="dots-vertical" 
          onPress={() => Alert.alert('Configuración', 'Funciones adicionales próximamente')} 
        />
      </Appbar.Header>

      <KeyboardAvoidingView 
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messagesContainer}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={renderFooter}
          onContentSizeChange={() => {
            setTimeout(() => {
              flatListRef.current?.scrollToEnd({ animated: true });
            }, 100);
          }}
        />
        
        <ChatInput 
          onSendMessage={handleSendMessage}
          disabled={isTyping}
          placeholder={isTyping ? "SAP Copilot está escribiendo..." : "Escribe tu consulta..."}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    elevation: 4,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerTitle: {
    color: colors.onPrimary,
    fontSize: 18,
    fontWeight: '600',
  },
  headerSubtitle: {
    color: colors.onPrimary,
    opacity: 0.8,
    fontSize: 12,
  },
  keyboardContainer: {
    flex: 1,
  },
  messagesContainer: {
    padding: 16,
    paddingBottom: 8,
    flexGrow: 1,
  },
  footerContainer: {
    paddingTop: 8,
  },
  suggestionsContainer: {
    marginTop: 16,
    marginBottom: 8,
  },
});

export default ChatScreen;

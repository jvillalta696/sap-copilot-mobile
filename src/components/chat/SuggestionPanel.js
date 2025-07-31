import React from 'react';
import { View, StyleSheet, FlatList, Animated } from 'react-native';
import { Text, Card, Chip } from 'react-native-paper';
import { colors, CHAT_SUGGESTIONS, SUGGESTION_CATEGORIES } from '../../constants';

const SuggestionPanel = ({ onSuggestionPress, visible = true }) => {
  const slideAnim = React.useRef(new Animated.Value(visible ? 1 : 0)).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible, slideAnim]);

  const animatedStyle = {
    opacity: slideAnim,
    transform: [
      {
        translateY: slideAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 0],
        }),
      },
    ],
  };

  const renderCategory = ({ item: category }) => (
    <View style={styles.categoryContainer}>
      <Text style={[styles.categoryTitle, { color: category.color }]}>
        {category.icon} {category.title}
      </Text>
      <View style={styles.suggestionsContainer}>
        {CHAT_SUGGESTIONS[category.key]?.map((suggestion, index) => (
          <Chip
            key={index}
            mode="outlined"
            onPress={() => onSuggestionPress(suggestion)}
            style={[styles.suggestionChip, { borderColor: category.color }]}
            textStyle={[styles.suggestionText, { color: category.color }]}
          >
            {suggestion}
          </Chip>
        ))}
      </View>
    </View>
  );

  if (!visible) return null;

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Text style={styles.title}>💡 Consultas Sugeridas</Text>
          <Text style={styles.subtitle}>
            Toca cualquier sugerencia para comenzar
          </Text>
          
          <FlatList
            data={SUGGESTION_CATEGORIES}
            renderItem={renderCategory}
            keyExtractor={(item) => item.key}
            showsVerticalScrollIndicator={false}
            style={styles.categoriesList}
          />
        </Card.Content>
      </Card>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    elevation: 4,
  },
  cardContent: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 16,
  },
  categoriesList: {
    maxHeight: 300,
  },
  categoryContainer: {
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  suggestionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  suggestionChip: {
    marginBottom: 4,
    backgroundColor: colors.surface,
  },
  suggestionText: {
    fontSize: 12,
  },
});

export default SuggestionPanel;

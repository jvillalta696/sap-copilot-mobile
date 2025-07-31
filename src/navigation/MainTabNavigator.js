import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants';

// Screens
import ChatScreen from '../screens/ChatScreen';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Chat') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Dashboard') {
            iconName = focused ? 'analytics' : 'analytics-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          paddingTop: 5,
          paddingBottom: 5,
          height: 60,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Chat" 
        component={ChatScreen}
        options={{ title: 'SAP Copilot' }}
      />
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen}
        options={{ title: 'Dashboard' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

import React from 'react';
import { Tabs } from 'expo-router';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import useColorStore from '@/store/useColorStore';

const Layout = () => {
  const { colors } = useColorStore();
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          // Color de fondo del tab bar
          position: 'absolute',
          bottom: 40,
          justifyContent: 'center',
          alignSelf: 'center',
          height: 63,
          marginHorizontal: 120,
          paddingHorizontal: 10,
          paddingVertical: 8,
          paddingBottom: 8,
          borderRadius: 40,
          borderWidth: 1,
          borderColor: colors.border, // Color de borde del tab bar
          borderTopColor: colors.border, // Color de borde superior del tab bar
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.secondary, // Color para íconos inactivos
        tabBarActiveTintColor: colors.primary, // Color para íconos activos
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} /> // Ícono para Home
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} /> // Ícono para Profile
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          tabBarLabel: 'Transactions',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="exchange" size={size} color={color} /> // Ícono para Transactions
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

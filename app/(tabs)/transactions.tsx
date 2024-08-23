import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import useColorStore from '@/store/useColorStore';

const Page = () => {
  const { colors } = useColorStore();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background, // Asegúrate de que 'black' esté definido en Colors.ts
    },
    text: {
      color: colors.primary, // Opcional, solo si quieres usar un color definido en Colors.ts
    },
  });

  
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.text}>Transactions</Text>
    </View>
  );
};


export default Page;

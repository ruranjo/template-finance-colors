import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Colors from '@/constants/Colors';
import Colors1 from '@/constants/Colors1';
import Colors2 from '@/constants/Colors2';
import Colors3 from '@/constants/Colors3';
import Colors4 from '@/constants/Colors4';
import { Stack } from 'expo-router';
import Header from '@/components/Header';
import { PieChart } from 'react-native-gifted-charts';
import ExpenseBlock from '@/components/ExpenseBlock';
import IncomeBlock from '@/components/IncomeBlock';
import SpendingBlock from '@/components/SpendingBlock';
import ExpenseList from '@/data/expenses.json';
import incomeList from '@/data/income.json';
import spendingList from '@/data/spending.json';
import useColorStore from '@/store/useColorStore';

const Page = () => {
  const { colors, setColors } = useColorStore();
  
  const colorSchemes = [Colors, Colors1, Colors2, Colors3, Colors4];
  
  const handleColorSchemeChange = (colorScheme: any) => {
    setColors(colorScheme);
  };

  const pieData = [
    {
      value: 47,
      color: colors.primary,
      focused: true,
      text: '47%',
    },
    {
      value: 40,
      color: colors.secondary,
      text: '40%',
    },
    {
      value: 16,
      color: colors.text,
      text: '16%',
    },
    { value: 3, color: colors.accent, gradientCenterColor: colors.midAccent, text: '3%' },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 20,
      paddingBottom: 100
    },
    colorSelectorContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      marginBottom: 20,
    },
    colorCircle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginHorizontal: 10,
      borderWidth: 2,
      borderColor: '#FFFFFF',
    },
    headerSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 40,
    },
    textSection: {
      gap: 10,
    },
    expensesTitle: {
      color: colors.text,
      fontSize: 16,
    },
    expensesBold: {
      color: colors.text,
      fontWeight: '700',
    },
    expensesAmount: {
      color: colors.text,
      fontSize: 36,
      fontWeight: '700',
    },
    cents: {
      fontSize: 22,
      fontWeight: '400',
    },
    pieChartContainer: {
      paddingVertical: 20,
      alignItems: 'center',
    },
    centerLabelContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    centerLabel: {
      fontSize: 22,
      color: colors.text,
      fontWeight: 'bold',
    },
  });
  

  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View style={styles.container}>
        {/* Sección para seleccionar el contexto de colores */}
        <View style={styles.colorSelectorContainer}>
          {colorSchemes.map((scheme, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.colorCircle,
                { backgroundColor: scheme.primary },
              ]}
              onPress={() => handleColorSchemeChange(scheme)}
            />
          ))}
        </View>
        
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerSection}>
            <View style={styles.textSection}>
              <Text style={styles.expensesTitle}>
                My <Text style={styles.expensesBold}>Expenses</Text>
              </Text>
              <Text style={styles.expensesAmount}>
                $1475.<Text style={styles.cents}>00</Text>
              </Text>
            </View>
            <View style={styles.pieChartContainer}>
              <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                semiCircle
                radius={70}
                innerRadius={55}
                innerCircleColor={colors.lightBackground}
                centerLabelComponent={() => (
                  <View style={styles.centerLabelContainer}>
                    <Text style={styles.centerLabel}>47%</Text>
                  </View>
                )}
              />
            </View>
          </View>

          <ExpenseBlock expenseList={ExpenseList} />
          <IncomeBlock incomeList={incomeList} />
          <SpendingBlock spendingList={spendingList} />
        </ScrollView>
      </View>
    </>
  );
};


export default Page;

import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { IncomeType } from '@/types';
import useColorStore from '@/store/useColorStore';

const IncomeBlock = ({ incomeList }: { incomeList: IncomeType[] }) => {
  const { colors } = useColorStore();

  const styles = StyleSheet.create({
    container: {
      paddingVertical: 20,
    },
    header: {
      color: colors.text,
      fontSize: 16,
      marginBottom: 20,
    },
    headerBold: {
      fontWeight: '700',
    },
    incomeBlock: {
      width: 150,
      marginRight: 15,
      borderRadius: 20,
    },
    cardContent: {
      padding: 20,
      gap: 10,
      justifyContent: 'space-between',
    },
    iconContainer: {
      borderColor: '#666',
      borderWidth: 1,
      borderRadius: 50,
      padding: 5,
      alignSelf: 'flex-start',
    },
    moreIcon: {
      alignSelf: 'flex-end',
    },
    incomeName: {
      color: 'white',
    },
    incomeAmount: {
      color: 'white',
      fontSize: 18,
      fontWeight: '600',
    },
    amountDecimal: {
      fontSize: 12,
      fontWeight: '400',
    },
  });
  

  const renderItem: ListRenderItem<IncomeType> = ({ item }) => {
    // Default icon
    let icon = <FontAwesome name="dollar" size={22} color={'white'} />;
    if (item.name === 'Freelancing') {
      icon = <FontAwesome name="credit-card" size={22} color={'white'} />;
    } else if (item.name === 'Interest') {
      icon = <FontAwesome name="money" size={22} color={'white'} />;
    }

    // Default amount split
    const amount = item.amount ? item.amount.split('.') : ['0', '00'];

    return (
      <Card style={[styles.incomeBlock, { backgroundColor: colors.accent }]}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.iconContainer}>
            {icon}
          </View>
          <IconButton
            icon="dots-horizontal"
            iconColor={'white'}
            size={20}
            onPress={() => {}}
            style={styles.moreIcon}
          />
          <Text style={styles.incomeName}>{item.name}</Text>
          <Text style={styles.incomeAmount}>
            ${amount[0]}.
            <Text style={styles.amountDecimal}>{amount[1]}</Text>
          </Text>
        </Card.Content>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        My <Text style={styles.headerBold}>Income</Text>
      </Text>
      <FlatList
        data={incomeList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default IncomeBlock;


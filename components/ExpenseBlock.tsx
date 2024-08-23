import React from 'react';
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { ExpenseType } from '@/types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import useColorStore from '@/store/useColorStore';

const ExpenseBlock = ({ expenseList }: { expenseList: ExpenseType[] }) => {
  const { colors } = useColorStore();
  const renderItem: ListRenderItem<Partial<ExpenseType>> = ({ item, index }) => {
    if (index === 0) {
      return (
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.addItemBtn}>
            <FontAwesome name="plus" size={22} color={colors.text} />
          </View>
        </TouchableOpacity>
      );
    }

    // Default to '0.00' if item.amount is undefined
    const amount = item.amount ? item.amount.split('.') : ['0', '00'];

    return (
      <Card
        style={[
          styles.expenseBlock,
          {
            backgroundColor:
              item.name === 'Food'
                ? colors.secondary
                : item.name === 'Saving'
                ? colors.background
                : colors.accent,
          },
        ]}
      >
        <Card.Content>
          <Text
            style={[
              styles.expenseBlockTxt1,
              {
                color:
                  item.name === 'Food'
                    ? colors.text
                    : item.name === 'Saving'
                    ? colors.text
                    : colors.background,
              },
            ]}
          >
            {item.name}
          </Text>
          <Text
            style={[
              styles.expenseBlockTxt2,
              {
                color:
                  item.name === 'Food'
                    ? colors.text
                    : item.name === 'Saving'
                    ? colors.text
                    : colors.background,
              },
            ]}
          >
            ${amount[0]}.
            <Text style={styles.expenseBlockTxt2Span}>{amount[1]}</Text>
          </Text>
          <View style={styles.expenseBlock3View}>
            <Text
              style={[
                styles.expenseBlockTxt1,
                {
                  color:
                    item.name === 'Food'
                      ? colors.text
                      : item.name === 'Saving'
                      ? colors.text
                      : colors.background,
                },
              ]}
            >
              {item.percentage}%
            </Text>
          </View>
        </Card.Content>
      </Card>
    );
  };

  const staticItem = [{ name: 'Add Item' }];

  
const styles = StyleSheet.create({
  addItemBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.border,
    borderStyle: 'dashed',
    borderRadius: 10,
    marginRight: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  expenseBlock: {
    width: 100,
    padding: 15,
    borderRadius: 15,
    marginRight: 20,
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  expenseBlockTxt1: {
    fontSize: 14,
  },
  expenseBlockTxt2: {
    fontSize: 16,
    fontWeight: '600',
  },
  expenseBlockTxt2Span: {
    fontSize: 12,
    fontWeight: '400',
  },
  expenseBlock3View: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
  },
});

  return (
    <View style={{ paddingVertical: 20 }}>
      <FlatList
        data={staticItem.concat(expenseList)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ExpenseBlock;


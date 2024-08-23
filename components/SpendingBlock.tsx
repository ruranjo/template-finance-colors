import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SpendingType } from '@/types';
import useColorStore from '@/store/useColorStore';

const iconMap: { [key: string]: string } = {
  'AirBnB Rent': 'home',
  'Netflix': 'tv',
  'Spotify': 'music',
  'Amazon': 'shopping-bag',
  'Figma': 'file',
  'Online Shopping': 'shopping-cart',
};

const SpendingBlock = ({ spendingList }: { spendingList: SpendingType[] }) => {
  const { colors } = useColorStore();
  const renderIcon = (name: string) => {
    const iconName = iconMap[name] || 'dollar';
    return <FontAwesome name={iconName} size={22} color={'white'} />;
  };

  const styles = StyleSheet.create({
    spendingSectionWrapper: {
      marginVertical: 20,
      alignItems: 'flex-start',
    },
    sectionTitle: {
      color: colors.text,
      fontSize: 16,
      marginBottom: 20,
    },
    boldText: {
      fontWeight: '700',
    },
    spendingWrapper: {
      marginVertical: 10,
      borderRadius: 10,
    },
    cardContent: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      backgroundColor: colors.accent,
    },
    iconWrapper: {
      backgroundColor: colors.primary,
      padding: 15,
      borderRadius: 50,
      marginRight: 10,
    },
    textWrapper: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textColumn: {
      gap: 5,
    },
    itemName: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
    },
    dateText: {
      color: 'white',
    },
  });
  

  return (
    <View style={styles.spendingSectionWrapper}>
      <Text style={styles.sectionTitle}>
        July <Text style={styles.boldText}>Spending</Text>
      </Text>

      {spendingList.map((item) => (
        <Card style={styles.spendingWrapper} key={item.id}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.iconWrapper}>
              {renderIcon(item.name)}
            </View>
            <View style={styles.textWrapper}>
              <View style={styles.textColumn}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
              <Text style={styles.itemName}>${item.amount}</Text>
            </View>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

export default SpendingBlock;


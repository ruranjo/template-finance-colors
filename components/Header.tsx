import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Asegúrate de tener la librería instalada
import useColorStore from '@/store/useColorStore';

const Header = () => {
  const { colors } = useColorStore();
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.accent, // Color de fondo del encabezado
    },
    container: {
      justifyContent:'space-between',
      flexDirection: 'row', // Alinea los elementos en una fila
      alignItems: 'center', // Centra verticalmente
      paddingHorizontal: 16, // Espaciado horizontal
      paddingVertical: 10, // Espaciado vertical
    },
    iconContainer: {
      width: 50, // Ancho del contenedor del ícono
      height: 50, // Altura del contenedor del ícono
      borderRadius: 25, // Radio de borde para hacer el contenedor redondeado
      backgroundColor: colors.primary, // Fondo del contenedor del ícono
      justifyContent: 'center', // Centra el ícono verticalmente
      alignItems: 'center', // Centra el ícono horizontalmente
      marginRight: 10, // Espaciado entre el ícono y el texto
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: "white", // Color del texto
    },
  });
  

  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={{
            flexDirection: 'row',
            alignItems:'center'
        }}>
            <View style={styles.iconContainer}>
            <FontAwesome name="user" size={30} color={"white"} />
            </View>
            <View style={{ marginLeft:5 }}>
                <Text style={{ color: 'white', fontSize: 12}}>Hi, User</Text>
                <Text style={{ color: 'white', fontSize: 16}}>Your, Target</Text>
            </View>
        </View>
        <TouchableOpacity style={
            {
                borderColor:"white",
                borderWidth:1,
                padding:8,
                borderRadius:10,
            }
        } 
        onPress={() => { /* Acción al presionar */ }}>
          <Text style={styles.text}>My Transactions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
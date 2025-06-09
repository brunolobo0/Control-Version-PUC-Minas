import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';


export const DrawerContent = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
   
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      
   
    <TouchableOpacity
      style={styles.drawerItem}
      onPress={() => navigateToScreen('FavoritosScreen')}
    >
      <MaterialIcons name="favorite" size={24} color="black" />
      <Text style={styles.drawerItemText}>Favoritos</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.drawerItem}
      onPress={() => navigateToScreen('LibraryScreen')}
    >
      <MaterialIcons name="book" size={24} color="black" />
      <Text style={styles.drawerItemText}>Cadernos</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
      style={styles.drawerItem}
      onPress={() => navigateToScreen('CompartilharScreen')}
    >
      <MaterialIcons name="share" size={24} color="black" />
      <Text style={styles.drawerItemText}>Compartilhar</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
      style={styles.drawerItem}
      onPress={() => navigateToScreen('ConfigScreen')}
    >
      <Entypo name="cog" size={24} color="black" />
      <Text style={styles.drawerItemText}>Configurações</Text>
    </TouchableOpacity>
    
    
    <TouchableOpacity
      style={styles.drawerItem}
      onPress={() => navigateToScreen('LixeiraScreen')}
    >
      <MaterialIcons name="delete" size={24} color="black" />
      <Text style={styles.drawerItemText}>Lixeira</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.drawerItem}
      onPress={() => navigateToScreen('LogoutScreen')}
    >
      <AntDesign name="back" size={24} color="black" />
      <Text style={styles.drawerItemText}>Sair </Text>
    </TouchableOpacity>

   

  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'lightgray',
    marginTop: 15,
    marginBottom: 10,
    marginRight: 10
    
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  drawerItemText: {
    marginLeft: 20,
    fontSize: 16,
  },
  menu:{
    textAlign: 'center',
    fontSize: 15
    
  }
});

export default DrawerContent;

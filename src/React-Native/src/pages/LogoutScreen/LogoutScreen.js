import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function LogoutScreen({ navigation }) {
  const handleLogout = () => {
   navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você tem certeza que quer sair do sistema ?</Text>
      <Button 
        title="Sair"
        onPress={handleLogout}
        color="#ff8c00"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    color: '#ff8c00',
    fontSize: 20,
    marginBottom: 20,
  }
  
});

export default LogoutScreen;

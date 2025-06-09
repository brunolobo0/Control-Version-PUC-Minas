import React from 'react';
import { Button, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const documents = [
  { id: '1', title: 'Instrução de trabalho.pdf' },
  { id: '2', title: 'Arquivo World.docx' },
  { id: '3', title: 'Planilha de faltas.xlsx' },
];
const FavoritosScreen = () => {
  const [favorites, setFavorites] = React.useState(documents);

  const renderDocument = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <FlatList
        data={favorites}
        renderItem={renderDocument}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default FavoritosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
  },
});
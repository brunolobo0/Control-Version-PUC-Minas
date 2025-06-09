import React from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';


const deletedDocuments = [
  { id: '4', title: 'receita de bolo.pdf' },
  { id: '5', title: 'copia identidade.png' },
];

const LixeiraScreen = () => {
  const [deleted, setDeleted] = React.useState(deletedDocuments);

  const renderDocument = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Itens excluídos</Text>
      <FlatList
        data={deleted}
        renderItem={renderDocument}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default LixeiraScreen;

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
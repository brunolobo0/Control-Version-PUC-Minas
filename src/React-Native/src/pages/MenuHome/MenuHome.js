import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Appbar, Drawer, Menu, Card, DataTable, Button, Badge, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';

const MenuHome = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Relatório Anual 2023', date: '15/01/2023', type: 'PDF' },
    { id: 2, name: 'Proposta Comercial', date: '05/03/2023', type: 'DOCX' },
    { id: 3, name: 'Plano de Projeto', date: '20/02/2023', type: 'XLSX' },
  ]);

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const pickSomething = async () => {
    try {
      const docRes = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: true,
        multiple: true,
      });

      console.log(docRes);
    } catch (error) {
      console.log("Error while selecting file: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Action icon="menu" onPress={toggleDrawer} color="#fff" />
        <Text style={styles.appbarTitle}>Control Version</Text>
        <Avatar.Image size={40} source={require('../../assets/account.png')} style={styles.accountIcon} />
      </Appbar.Header>

      {drawerOpen && (
        <Drawer.Section style={styles.drawer}>
          <Drawer.Item label="Perfil" onPress={() => {}} />
          <Drawer.Item label="Favoritos" onPress={() => {'FavoritosScreen'}} />
          <Drawer.Item label="Sair" onPress={() => {'LogoutScreen'}} />
        </Drawer.Section>
      )}

      <FlatList
        ListHeaderComponent={
          <View>
            <View style={styles.cardsContainer}>
              {[ 
                { title: 'Arquivos Criados', value: '36 Documentos', growth: '+9.0%' },
                { title: 'Arquivos Excluídos', value: '20 Documentos', growth: '+3.0%' },
                { title: 'Arquivos Stand by', value: '5 Documentos', growth: '+20.0%' },
              ].map((item, index) => (
                <Card key={index} style={styles.card}>
                  <Card.Content>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardValue}>{item.value}</Text>
                    <View style={styles.cardBadgeContainer}>
                      <Badge style={styles.cardBadge}>{item.growth}</Badge>
                      <Text style={styles.cardSubtitle}>Desde o mês passado</Text>
                    </View>
                  </Card.Content>
                </Card>
              ))}
            </View>

            <Text style={styles.tableTitle}>Documentos</Text>
          </View>
        }
        data={documents}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DataTable.Row>
            <DataTable.Cell>{item.id}</DataTable.Cell>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.date}</DataTable.Cell>
            <DataTable.Cell>{item.type}</DataTable.Cell>
            <DataTable.Cell>
              <Menu
                visible={menuVisible}
                onDismiss={toggleMenu}
                anchor={
                  <TouchableOpacity onPress={toggleMenu}>
                    <MaterialCommunityIcons name="dots-vertical" size={24} />
                  </TouchableOpacity>
                }
              >
                <Menu.Item onPress={() => {}} title="Compartilhar" />
                <Menu.Item onPress={() => {}} title="Editar" />
                <Menu.Item onPress={() => {}} title="Excluir" />
              </Menu>
            </DataTable.Cell>
          </DataTable.Row>
        )}
      />

      <View style={styles.pickButtonContainer}>
        <Button mode="contained" onPress={pickSomething} style={styles.pickButton}>
          Selecione o arquivo
        </Button>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa500',
  },
  appbar: {
    backgroundColor: '#fca701',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  appbarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    flex: 1,
  },
  accountIcon: {
    marginLeft: 'auto',
  },
  drawer: {
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 16,
  },
  cardsContainer: {
    margin: 16,
  },
  card: {
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardValue: {
    fontSize: 24,
    color: '#fca701',
    fontWeight: '600',
  },
  cardBadgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  cardBadge: {
    backgroundColor: '#e6ffe6',
    color: '#1b5e20',
    marginRight: 8,
  },
  cardSubtitle: {
    color: '#9e9e9e',
  },
  tableTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  pickButtonContainer: {
    margin: 16,
  },
  pickButton: {
    backgroundColor: '#fca701',
  },
  recentDocumentsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  recentDocumentsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  documentIcon: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
  },
});

export default MenuHome;

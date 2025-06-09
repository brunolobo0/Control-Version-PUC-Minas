import { createDrawerNavigator, screenOptions, drawerStyle } from '@react-navigation/drawer';
import FavoritosScreen from "../../src/pages/FavoritosScreen"
import React from 'react';


const Drawer = createDrawerNavigator();


export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="FavoritosScreen" component={FavoritosScreen} />
      
    </Drawer.Navigator>
  );
}
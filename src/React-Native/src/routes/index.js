import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';


import Welcome from "../../src/pages/Welcome"
import SignIn from "../../src/pages/SignIn"
import SignUp from "../../src/pages/SignUp"
import DrawerContent from "../../src/pages/DrawerContent"
import HomeScreen from "../../src/pages/HomeScreen"


import WelcomeScreen from "../../src/pages/WelcomeScreen"
import LixeiraScreen from "../../src/pages/LixeiraScreen"
import CompartilharScreen from "../../src/pages/CompartilharScreen"
import ConfigScreen from "../../src/pages/ConfigScreen"
import FavoritosScreen from "../../src/pages/FavoritosScreen"
import MenuHome from "../pages/MenuHome/MenuHome"
import LibraryScreen from "../pages/LibraryScreen/index"
import LogoutScreen from "../pages/LogoutScreen/LogoutScreen"

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrawerContent"
        component={DrawerContent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}

      />

      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="LixeiraScreen"
        component={LixeiraScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CompartilharScreen"
        component={CompartilharScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConfigScreen"
        component={ConfigScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="FavoritosScreen"
        component={FavoritosScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MenuHome"
        component={MenuHome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="LogoutScreen"
        component={LogoutScreen}
        options={{ headerShown: false }}
      />


    </Stack.Navigator>


  );
}
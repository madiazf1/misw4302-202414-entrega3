import * as React from "react";
import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SelectAlarm from "./screens/SelectAlarm";
import CreatePay from "./screens/CreatePay";
import CreateTraditional from "./screens/CreateTraditional";
import EditAlarm from "./screens/EditAlarm";
import ConstructionPage from "./screens/ConstructionPage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { name as appName } from './app.json';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Configuración de las pestañas
function TabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#4C7573",
          height: 70,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "lightgray",
        tabBarLabelStyle: {
          display: "none",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          const iconSize = 30;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Trophies") {
            iconName = focused ? "trophy" : "trophy-outline";
          } else if (route.name === "Logout") {
            iconName = focused ? "logout" : "logout-variant";
          }

          return (
            <MaterialCommunityIcons
              name={iconName}
              size={iconSize}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Trophies"
        component={ConstructionPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Logout" component={LogoutScreen} />
    </Tab.Navigator>
  );
}

function LogoutScreen({ navigation }) {
  React.useEffect(() => {
    navigation.replace("Login");
  }, []);

  return null;
}

// Navegación principal
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeTabs"
          component={TabNavigator}
          options={{ headerShown: false }} // Ocultar el encabezado en el TabNavigator
        />
        <Stack.Screen
          name="SelectType"
          component={SelectAlarm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TraditionalAlarm"
          component={CreateTraditional}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PayAlarm"
          component={CreatePay}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditAlarm"
          component={EditAlarm}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);
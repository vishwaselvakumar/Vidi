import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/HomeScreen";
import MapScreen from "./src/MapScreen";
import SettingsScreen from "./src/SettingsScreen";
import SavedScreen from "./src/SavedScreen";
import InfoScreen from "./src/InfoScreen";
import Vis from "./Vis";
import Early from "./src/Early";
import Health from "./src/Health";
import Watershed from "./src/Watershed";
import Tata from "./src/Tata";
import Family from "./src/Family";
import Medical from "./src/Medical";
import Educations from "./src/Education";
import Fee from "./src/Fee";
import Lab from "./src/Lab";
import India from "./src/India";
import Women from "./src/Women";
import Nri from "./src/Nri";
import Skill from "./src/Skill";
import Sea from "./src/Sea";
import Ledp from "./src/Ledp";
import Company from "./src/Company";
import Company1 from "./src/Company1";
import Company3 from "./src/Company3";





const homeIcon_active = require("./src/assets/icons/home-active.png");
const homeIcon = require("./src/assets/icons/home.png");
const compass_active = require("./src/assets/icons/compass-active.png");
const compass = require("./src/assets/icons/compass.png");
const savedIcon_active = require("./src/assets/icons/saved-active.png");
const savedIcon = require("./src/assets/icons/saved.png");
const settingsIcon_active = require("./src/assets/icons/settings-active.png");
const settingsIcon = require("./src/assets/icons/settings.png");



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Initial" component={HomeScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />
      <Stack.Screen name="Vis" component={Vis} />
      <Stack.Screen name="Early" component={Early} />
      <Stack.Screen name="Health" component={Health} />
      <Stack.Screen name="Water" component={Watershed} />
      <Stack.Screen name="Tata" component={Tata} />
      <Stack.Screen name="Fam" component={Family} />
      <Stack.Screen name="Med" component={Medical} />
      <Stack.Screen name="Edu" component={Educations} />
      <Stack.Screen name="Fee" component={Fee} />
      <Stack.Screen name="La" component={Lab} />
      <Stack.Screen name="Ind" component={India} />
      <Stack.Screen name="Women" component={Women} />
      <Stack.Screen name="Nri" component={Nri} />
      <Stack.Screen name="Skill" component={Skill} />
      <Stack.Screen name="Sea" component={Sea} />
      <Stack.Screen name="Le"component={Ledp} />
      <Stack.Screen name="Comp" component={Company} />
      <Stack.Screen name="Comp1" component={Company1} />
      <Stack.Screen name="Comp3" component={Company3} />
      
    </Stack.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? homeIcon_active : homeIcon;
            } else if (route.name === "Map") {
              iconName = focused ? compass_active : compass;
            } else if (route.name === "Saved") {
              iconName = focused ? savedIcon_active : savedIcon;
            } else if (route.name === "Settings") {
              iconName = focused ? settingsIcon_active : settingsIcon;
            }

            return (
              <Image source={iconName} resizeMode="contain" style={styles.footerIcon} />
            )
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            padding: 10,
            backgroundColor:  'black',
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
          }
        })}
      >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      
      
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  footerIcon: {
    width: 25
  }
});

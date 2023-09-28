import { SafeAreaView, StatusBar, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Actus from './pages/Actus';
import Parcours from './pages/Parcours';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Proshop from './pages/Proshop';




export default function App() {
  const Tab = createBottomTabNavigator();
  const {height, width, scale, fontScale} = useWindowDimensions();

  return (

    <SafeAreaView style={{flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight +20 : 0, maxWidth: width}}>

      <NavigationContainer>

          <Tab.Navigator  initialRouteName="Home"  screenOptions={{headerShown: false, tabBarStyle: styles.navbar, tabBarActiveTintColor: '#2ba9bc', tabBarInactiveTintColor: 'gray'}}>
              <Tab.Screen name="Home" component={Home}  options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                  ),
                }} />
              <Tab.Screen name="Actus" component={Actus} options={{
                  tabBarLabel: 'Actus',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="newspaper" color={color} size={size} />
                  ),
                }} />
              <Tab.Screen name="Parcours" component={Parcours} options={{
                  tabBarLabel: () => null,
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="golf-tee" color={color} style={styles.middle} size={size}  />
                  ),
                }} />
              <Tab.Screen name="Mes DépartsProshop" component={Proshop} options={{
                  tabBarLabel: 'Proshop',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="shopping" color={color} size={size} />
                  ),
                }} />
              <Tab.Screen name="Profil" component={Profile} options={{
                  tabBarLabel: 'Profil',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                  ),
                }} />
          </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    paddingBottom: 10, 
    paddingTop: 10,
  },
  middle:{
    backgroundColor: '#2ba9bc',
    padding: 8,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    color: "#fff",
    fontSize: 30,
    marginTop: -10
  }
});

import { SafeAreaView, StatusBar, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './pages/Home';
import Departs from './pages/Departs';
import Parcours from './pages/Parcours';
import Profile from './pages/Profile';
import News from './pages/News';




export default function App() {
  const Tab = createBottomTabNavigator();
  const {height, width, scale, fontScale} = useWindowDimensions();

  return (
    <SafeAreaView style={{flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight +20 : 0, maxWidth: width}}>

      <NavigationContainer >

          <Tab.Navigator  initialRouteName="Home"  screenOptions={{headerShown: false, tabBarStyle: styles.navbar, tabBarActiveTintColor: '#007aff', tabBarInactiveTintColor: 'gray'}}>
              <Tab.Screen name="Home" component={Home}  options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                  ),
                }} />
              <Tab.Screen name="Mes Départs" component={Departs} options={{
                  tabBarLabel: 'Réservations',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="bookmark" color={color} size={size} />
                  ),
                }} />
              <Tab.Screen name="Parcours" component={Parcours} options={{
                  tabBarLabel: 'Parcours',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="golf-tee" color={color} size={size} />
                  ),
                }} />
              <Tab.Screen name="Proshop" component={News} options={{
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
    paddingTop: 10
  },
});

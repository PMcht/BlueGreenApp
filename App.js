import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './pages/Home';
import Departs from './pages/Departs';
import Parcours from './pages/Parcours';
import Profile from './pages/Profile';
import Chat from './pages/Chat';



export default function App() {
  const Tab = createBottomTabNavigator();


  return (
    <NavigationContainer >
        <Tab.Navigator  initialRouteName="Home"  screenOptions={{headerShown: false, tabBarStyle: styles.navbar}}>
            <Tab.Screen name="Home" component={Home}  options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }} />
            <Tab.Screen name="Mes Départs" component={Departs} options={{
                tabBarLabel: 'Mes Départs',
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
            <Tab.Screen name="Chat" component={Chat} options={{
                tabBarLabel: 'Chat',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="chat" color={color} size={size} />
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
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    paddingBottom: 10, 
    paddingTop: 10
  },
});

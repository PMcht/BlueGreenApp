import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { Component } from "react";
import { StyleSheet, Button, View, Text, Image, SafeAreaView } from "react-native";
import BlueGreenActu from "./Home/BlueGreenActu";
import FriendsActu from "./Home/FriendsActu";
import MyGolfActu from "./Home/MyGolfActu";
import Header from "../components/Header";

export default function Home() {

  const Tab = createMaterialTopTabNavigator();

  return (

    <SafeAreaView style={{flex: 1}}>

      <Header />

      <Tab.Navigator screenOptions={{tabBarStyle: styles.topBar, tabBarActiveTintColor: '#007aff', tabBarInactiveTintColor: 'gray'}}>
        <Tab.Screen name="BlueGreen" component={BlueGreenActu} />
        <Tab.Screen name="Mes Amis" component={FriendsActu}  />
        <Tab.Screen name="Mes Golfs" component={MyGolfActu}  />
      </Tab.Navigator>
    </SafeAreaView>



  );
}

const styles = StyleSheet.create({
  topBar: {
    height: 50,
    marginTop: -10
  },

});

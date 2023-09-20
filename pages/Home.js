import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { Component } from "react";
import { StyleSheet, Button, View, Text, Image } from "react-native";
import BlueGreenActu from "./Home/BlueGreenActu";
import FriendsActu from "./Home/FriendsActu";
import Header from "../components/Header";
import MyGolfActu from "./Home/MyGolfActu";

export default function Home() {

  const Tab = createMaterialTopTabNavigator();

  return (

    <>
      <Header />

      <Tab.Navigator screenOptions={{tabBarStyle: styles.topBar, tabBarActiveTintColor: '#007aff', tabBarInactiveTintColor: 'gray'}}>
        <Tab.Screen name="BlueGreen" component={BlueGreenActu} />
        <Tab.Screen name="Mes Amis" component={FriendsActu}  />
        <Tab.Screen name="Mes Golfs" component={MyGolfActu}  />
      </Tab.Navigator>
    </>



  );
}

const styles = StyleSheet.create({
  topBar: {
    height: 50,
    marginTop: -10
  },

});

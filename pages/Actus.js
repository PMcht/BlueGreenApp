import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { Component } from "react";
import { StyleSheet, Button, View, Text, Image, SafeAreaView } from "react-native";
import BlueGreenActu from "./Actus/BlueGreenActu";
import FriendsActu from "./Actus/FriendsActu";
import MyGolfActu from "./Actus/MyGolfActu";
import Header from "../components/Header";

export default function Actus() {

  const Tab = createMaterialTopTabNavigator();

  return (

    <SafeAreaView style={{flex: 1}}>

      <Header />

      <Tab.Navigator screenOptions={{tabBarStyle: styles.topBar, tabBarIndicatorStyle: {backgroundColor: '#2ba9bc'}, tabBarActiveTintColor: '#2ba9bc', tabBarInactiveTintColor: 'gray'}}>
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

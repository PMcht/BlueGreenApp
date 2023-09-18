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

      <Tab.Navigator screenOptions={{tabBarStyle: styles.topBar, tabBarIndicatorContainerStyle: styles.test}}>
        <Tab.Screen name="BlueGreen" component={BlueGreenActu} />
        <Tab.Screen name="Mes Amis" component={FriendsActu}  />
        <Tab.Screen name="Mon Golf" component={MyGolfActu}  />
      </Tab.Navigator>
    </>



  );
}

const styles = StyleSheet.create({
  topBar: {
    height: 50,
  },
  test: {
    margin: 0,
    padding: 0
  },
});

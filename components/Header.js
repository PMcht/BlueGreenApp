import React, { Component } from "react";
import { StyleSheet, Button, View, Text, Image } from "react-native";

export default function Header() {

  return (

    <View style={styles.header}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/Logos/logo.png')}
        resizeMode="contain"
      />
    </View>



  );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        backgroundColor: 'white',
        maxHeight: 100,
        paddingHorizontal: 20
    },
  tinyLogo: {
    maxHeight: 70,
    maxWidth: 150
  }
});

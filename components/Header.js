import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
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
      <View style={styles.rightSide}>
        <MaterialIcons name="search" style={styles.rightSide.icons} />
        <MaterialCommunityIcons name="bell-outline" style={styles.rightSide.icons} />
      </View>
    </View>



  );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: 'white',
        maxHeight: 110,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    tinyLogo: {
        maxHeight: 50,
        maxWidth: 150,
    },
    rightSide: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',

      icons: {
        fontSize: 25,
        color: 'grey',
        marginLeft: 10
      }
    }
});

import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react'
import { Animated, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { Shadow } from 'react-native-shadow-2';
import { GolfList } from '../../components/GolfList';



export const DepartResa = () => {

  const {height, width, scale, fontScale} = useWindowDimensions();

  return (
    <>
      <GolfList />
    </>
  )
}


const Styles = StyleSheet.create({

  container: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  next: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "green"
  },
  buttonContainer:{
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 70
  },
  icon:{
    backgroundColor: '#2ba9bc',
    height: 50,
    width: 50,
    padding: 10,
    fontSize: 30,
    borderRadius: 50,
    color: '#fff'
  },
  iconShadow: {
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    width: 50,
  }

})
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react'
import { Animated, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { Shadow } from 'react-native-shadow-2';
import { GolfList } from '../../../components/GolfList';



export const DepartResa = () => {

  const {height, width, scale, fontScale} = useWindowDimensions();

  return (
    <>
      <GolfList />
    </>
  )
}



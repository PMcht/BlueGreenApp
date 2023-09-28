import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GolfAttributes } from '../../utils/Lists/Golfs'

export default function GameSetup({route, navigation}) {
  const test = GolfAttributes[route.params.golfID]
  return (
    <View>
      <Text>{test.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
import { SafeAreaView, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Header from '../components/Header'

export default function Home() {

    const {height, width, scale, fontScale} = useWindowDimensions();

  return (
    <SafeAreaView style={[styles.container, {height}]}>

        <Header />

        <ScrollView style={styles.scrollView}>



        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    }
})
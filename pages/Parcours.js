import React, { Component, useState } from "react";
import { Button, View, Text, SafeAreaView, ScrollView, StyleSheet, TextInput, useWindowDimensions, TouchableOpacity, Image, Easing } from "react-native";
import Header from "../components/Header";
import { GolfAttributes } from "../utils/Lists/Golfs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GameSetup from "./Parcours/GameSetup";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  }
}

export default function Parcours() {
  return (

    <Stack.Navigator initialRouteName={ParcoursHome} screenOptions={{gestureEnabled:true, gestureDirection:"horizontal"}}>
      <Stack.Screen
        name="ParcoursHome"
        component={ParcoursHome}
        options={{
          headerShown:false,
        }}
      />
      <Stack.Screen
        name="GameSetup"
        component={GameSetup}
        options={{
          headerShown:false,
          transitionSpec: {
            open: config,
            close: config
          },
          headerTitle:"Ma Réservation",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

    </Stack.Navigator>
    
  );
}

export function ParcoursHome({navigation}) {
  
  const {height, width, scale, fontScale} = useWindowDimensions();
  const [searchName, setSearchName] = useState("");

  const GolfFiltered = GolfAttributes.filter(search => search.region.toLowerCase().includes(searchName.toLowerCase()) || search.name.toLowerCase().includes(searchName.toLowerCase()))
  let isResults = GolfFiltered == 0


  return (
    <SafeAreaView >

        <Header />

        <ScrollView >

          <View style={[styles.container, {minHeight: height}]}>

              <View style={styles.searchBar}>
              <MaterialCommunityIcons style={styles.searchIcon} name={"magnify"} />
                  <TextInput placeholder="Rechercher" style={styles.searchInput} onChangeText={(text) => setSearchName(text)} />
              </View>

              {isResults ? (
                <>
                  <Text style={{textAlign: 'center', marginTop: 20, fontWeight: "bold", fontSize: 20}}>Pas de résultats</Text>
                  <Text style={{textAlign: 'center'}}>Essayez de rechercher par région ou ville</Text>
                </>
                ) : (
                  <View style={styles.cardContainer}>
                    {GolfFiltered.map((golf) => {
                      return (
                          
                          <TouchableOpacity key={golf.id} style={styles.card} onPress={() => navigation.navigate("GameSetup", {golfID:golf.id})}>

                                <Image
                                    style={styles.golfIMG}
                                    source={golf.img}
                                    resizeMode="center"
                                  />
                                <Text style={styles.golfName}>{golf.name}</Text>
                              
                          </TouchableOpacity>

                          )
                      })}
                    </View>
                    )}
                    

          </View>

        </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
      backgroundColor: "#fff",
      paddingBottom: 100,
  },
  searchBar: {
    display: "flex",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginHorizontal: "10%",
    backgroundColor: "#d9dbda",
    borderRadius: 10
  },
  searchInput:{
    fontSize: 15,
    width: '90%'
  },
  searchIcon:{
    fontSize: 20,
    marginRight: 10
  },
  cardContainer:{
    marginTop: 20,
      display: 'flex',
      justifyContent: "center",
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 15
  },
  card:{
    width: '45%',
    height: 150,
    borderRadius: 10,
  },
  golfIMG:{
    height: "80%",
    width: '100%',
    borderRadius: 20
  },
  golfName:{
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  }
})
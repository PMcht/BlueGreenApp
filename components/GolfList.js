import React, { Component, useState } from "react";
import { Button, View, Text, SafeAreaView, ScrollView, StyleSheet, TextInput, useWindowDimensions, TouchableOpacity, Image, Easing } from "react-native";
import { GolfAttributes } from "../utils/Lists/Golfs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


export function GolfList({route, navigation, setGolf}) {
  
  const {height, width, scale, fontScale} = useWindowDimensions();
  const [searchName, setSearchName] = useState("");

  const GolfFiltered = GolfAttributes.filter(search => search.region.toLowerCase().includes(searchName.toLowerCase()) || search.name.toLowerCase().includes(searchName.toLowerCase()))
  let isResults = GolfFiltered == 0


  return (


    
          <ScrollView style={[styles.container, {minHeight: height}]}>

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
                          
                          <TouchableOpacity key={golf.id} style={styles.card} 
                          onPress={() => {setGolf(golf.name); navigation.goBack()}}
                          >

                                <Image
                                    style={styles.golfIMG}
                                    source={golf.img}
                                    resizeMode="cover"
                                  />
                                  <View style={styles.cardTxt}>
                                      <Text style={styles.golfName}>{golf.name}</Text>
                                      <Text style={styles.golfAddr}>{golf.region}</Text>
                                      <View style={styles.stars}>
                                          <MaterialCommunityIcons style={styles.starIcon} name={'star'} />
                                          <Text style={styles.rate}>4.5/5</Text>
                                      </View>
                                  </View>
                              
                          </TouchableOpacity>

                          )
                      })}
                    </View>
                    )}
                    

          </ScrollView>
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
  },
  card:{
    width: '100%',
    height: 130,
    borderColor: "#e9ebf0",
    borderTopWidth: 1,
    paddingVertical: 20,
    paddingHorizontal:30,
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'row'
  },
  golfIMG:{
    height: 90,
    width: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  cardTxt: {
    height: 90,
    width: '70%',
    display: 'flex',
    justifyContent: "center",
    alignItems: 'flex-start',
  },
  golfName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  golfAddr: {
    fontStyle: 'italic'
  },
  stars: {
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5
  },
  starIcon: {
    color: "#fca741",
    fontSize: 18,
    marginHorizontal: 5
  },
  rate: {
    fontSize: 14,
    fontStyle: 'italic',
    color: 'grey'
  }
})
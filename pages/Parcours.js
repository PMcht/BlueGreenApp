import React, { Component, useState } from "react";
import { Button, View, Text, SafeAreaView, ScrollView, StyleSheet, TextInput, useWindowDimensions, TouchableOpacity, Image, Easing, Pressable } from "react-native";
import Header from "../components/Header";
import { GolfAttributes } from "../utils/Lists/Golfs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { GolfList } from "../components/GolfList";
import { persons } from "../utils/json/persons";

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
        name="GolfList"
        component={GolfList}
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

export function ParcoursHome({route, navigation}) {
  const {height, width, scale, fontScale} = useWindowDimensions();
  const [golf, setGolf] = useState('')
  let golfID = GolfAttributes.filter(({name}) => golf.includes(name))

  const [players, setPlayers] = useState('')
  let personID = persons.filter(({name}) => players.includes(name))

  return (
    <ScrollView style={styles.scrollView}>
    <View style={{height: height-100, width: width, paddingVertical: 30, paddingHorizontal: 20, backgroundColor: "#fff"}}>

        <View style={[styles.course, styles.line]}>
            <Text style={[styles.bold, {marginBottom: 20}]}>
              Localisation
            </Text>


            {golf == '' ? 

                  <TouchableOpacity style={styles.buttons} activeOpacity={1} onPress={() => navigation.navigate('GolfList',{setGolf})}>
                      <Text>test</Text>
                  </TouchableOpacity>
                
                  :     

                  <TouchableOpacity style={styles.flex} onPress={() => navigation.navigate('GolfList',{setGolf})}>

                    <Image
                        style={styles.img}
                        source={golfID[0].img}
                        resizeMode="cover"
                      />

                    <View style={styles.info}>
                      <Text style={styles.bold}>Golf de {golfID[0].name}</Text>
                      <Text style={[styles.thin, {marginTop: 10}]}>{golfID[0].region}</Text>
                      <View style={[styles.flex, {marginTop: 10}]}>
                        <Text style={styles.space}>Handicap <Text style={styles.param}>22</Text></Text>
                        <Text style={styles.space}>Par <Text style={styles.param}>22</Text></Text>
                        <Text >Slope <Text style={styles.param}>22</Text></Text>
                      </View>
                    </View>

                  </TouchableOpacity>
              }

        </View>

        <View style={[styles.players, styles.line]}>
           
            
            <View style={styles.playersTitle}>
              <View>
                  <Text style={[styles.bold]}>
                    Partenaires
                  </Text>
                  <Text style={[styles.thin]}>
                    Jusqu'à 4 joueurs
                  </Text>
              </View>
              {personID.length == 3 ? <></> : 
                <TouchableOpacity style={styles.addPlayer} onPress={() => navigation.navigate('ChoosePlayer', {setPlayers, players})}><Text>Ajouter un joueur</Text></TouchableOpacity>
              }
              
            </View>
          
            {['Aymeric', 'Valentin', 'Ben'].map((person) => {
              const data = `../assets/Booking/Resa/Persons/` + `${person}` + `.jpg`;
              var imageMap = {
                'Valentin' : require('../assets/Booking/Resa/Persons/Valentin.jpg'),
                'Aymeric' : require('../assets/Booking/Resa/Persons/Aymeric.jpg'),
                'Corentin' : require('../assets/Booking/Resa/Persons/Corentin.jpg'),
                'Ben' : require('../assets/Booking/Resa/Persons/Ben.jpg'),
                'Arnaud' : require('../assets/Booking/Resa/Persons/Arnaud.jpg'),
              }
              return (
                <View key={person} style={[styles.flex, styles.person]}>
                  <Image
                    style={styles.profilePic}
                    source={imageMap[person]}
                    resizeMode="cover"
                  />
                  <View>
                    <Text style={styles.bold}>{person}</Text>
                    <View style={[styles.flex, {alignItems: "center", marginTop: 5}]}>
                      <Text style={styles.index}>Jaune</Text>
                      <Text style={styles.handicap}> index: 20</Text>
                    </View>
                    
                  </View>
                  <MaterialCommunityIcons name="dots-vertical" style={styles.more} />

                </View>
              )
            })}

        </View>

        <View style={styles.modif}>

            <Pressable onPress={console.log(golfID)} style={[styles.buttons, {backgroundColor: "#2ba9bc"}]} ><Text style={[styles.bold, {color: "#fff"}]}>Commencer</Text></Pressable>

        </View>

    </View>
    </ScrollView>
)
}


const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
    fontSize: 20,
  },
  thin: {
    fontWeight: "400",
    color: "gray"
  },
  flex: {
    display: "flex",
    flexDirection: 'row'
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "#e9ebf0",
    paddingBottom: 20 
  },
  img: {
    width: 80,
    height: 100,
    marginRight: 20,
    borderRadius: 10
  },
  info: {
    width: 250
  },
  param: {
    fontWeight: "bold"
  },
  space: {
    marginRight: 20
  },
  timing: {
    paddingTop: 20,
    fontSize: 20,
    textAlign: "center",
  },
  boldTiming: {
    fontWeight: "bold",
  },
  players: {
    paddingTop: 20,
  },

  playersTitle:{
    display: "flex",
    alignItems: 'flex-start',
    justifyContent:'space-between',
    flexDirection: 'row',
    marginBottom: 20
  },
  addPlayer: {
    marginTop: 10,
    color: '#2ba9bc'
  },

  person: {
    marginBottom: 10,
    position: 'relative'
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15
  },
  index: {
    backgroundColor: "#ffc800",
    color: "#fff",
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 100,
    marginRight: 10
  },
  more: {
    position: "absolute",
    right: 0,
    top: 5,
    fontSize: 20
  },
  modif: {
    paddingTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  buttons: {
    marginBottom: 10,
    width: 150,
    paddingVertical: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  }
});

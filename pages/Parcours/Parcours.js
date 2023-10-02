import React, { Component, useState } from "react";
import { Button, View, Text, SafeAreaView, ScrollView, parcoursStylesheet, TextInput, useWindowDimensions, TouchableOpacity, Image, Easing, Pressable } from "react-native";
import Header from "../../components/Header";
import { GolfAttributes } from "../../utils/Lists/Golfs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GameSetup from "./GameSetup/GameSetup";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { GolfList } from "../../components/GolfList";
import { parcoursStyles } from "./parcoursStyles";

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

export function ParcoursHome({navigation}) {
  const {height, width, scale, fontScale} = useWindowDimensions();
  const [golf, setGolf] = useState('')

  return (
    <ScrollView style={parcoursStyles.scrollView}>
    <View style={{height: height-100, width: width, paddingVertical: 30, paddingHorizontal: 20, backgroundColor: "#fff"}}>

        <View style={[parcoursStyles.course, parcoursStyles.line]}>
            <Text style={[parcoursStyles.bold, {marginBottom: 20}]}>
              Localisation
            </Text>


            {golf == '' ? 

                  <TouchableOpacity style={parcoursStyles.buttons} activeOpacity={1} onPress={() => navigation.navigate('GolfList',{setGolf: setGolf})}>
                      <Text>test</Text>
                  </TouchableOpacity>
                
                  :     

                  <TouchableOpacity style={parcoursStyles.flex} onPress={() => navigation.navigate('GolfList',{setGolf: setGolf})}>

                    <Image
                        style={parcoursStyles.img}
                        source={require('../../assets/Booking/Resa/1.jpg')}
                        resizeMode="cover"
                      />

                    <View style={parcoursStyles.info}>
                      <Text style={parcoursStyles.bold}>Golf de {golf}</Text>
                      <Text style={[parcoursStyles.thin, {marginTop: 10}]}>rzqr</Text>
                      <View style={[parcoursStyles.flex, {marginTop: 10}]}>
                        <Text style={parcoursStyles.space}>Handicap <Text style={parcoursStyles.param}>22</Text></Text>
                        <Text style={parcoursStyles.space}>Par <Text style={parcoursStyles.param}>22</Text></Text>
                        <Text >Slope <Text style={parcoursStyles.param}>22</Text></Text>
                      </View>
                    </View>

                  </TouchableOpacity>
              }

        </View>

        <View style={[parcoursStyles.players, parcoursStyles.line]}>
           
            
            <View style={parcoursStyles.playersTitle}>
              <View>
                  <Text style={[parcoursStyles.bold]}>
                    Partenaires
                  </Text>
                  <Text style={[parcoursStyles.thin]}>
                    Jusqu'à 4 joueurs
                  </Text>
              </View>
              <Text style={parcoursStyles.addPlayer}>Ajouter un joueur</Text>
            </View>
          
            {['Aymeric', 'Valentin', 'Ben'].map((person) => {
              const data = `../../assets/Booking/Resa/Persons/` + `${person}` + `.jpg`;
              var imageMap = {
                'Valentin' : require('../../assets/Booking/Resa/Persons/Valentin.jpg'),
                'Aymeric' : require('../../assets/Booking/Resa/Persons/Aymeric.jpg'),
                'Corentin' : require('../../assets/Booking/Resa/Persons/Corentin.jpg'),
                'Ben' : require('../../assets/Booking/Resa/Persons/Ben.jpg'),
                'Arnaud' : require('../../assets/Booking/Resa/Persons/Arnaud.jpg'),
              }
              return (
                <View key={person} style={[parcoursStyles.flex, parcoursStyles.person]}>
                  <Image
                    style={parcoursStyles.profilePic}
                    source={imageMap[person]}
                    resizeMode="cover"
                  />
                  <View>
                    <Text style={parcoursStyles.bold}>{person}</Text>
                    <View style={[parcoursStyles.flex, {alignItems: "center", marginTop: 5}]}>
                      <Text style={parcoursStyles.index}>Jaune</Text>
                      <Text style={parcoursStyles.handicap}> index: 20</Text>
                    </View>
                    
                  </View>
                  <MaterialCommunityIcons name="dots-vertical" style={parcoursStyles.more} />

                </View>
              )
            })}

        </View>

        <View style={parcoursStyles.modif}>

            <Pressable style={[parcoursStyles.buttons, {backgroundColor: "#2ba9bc"}]} ><Text style={[parcoursStyles.bold, {color: "#fff"}]}>Commencer</Text></Pressable>

        </View>

    </View>
    </ScrollView>
)
}
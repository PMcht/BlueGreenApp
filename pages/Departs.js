import React, { Component } from "react";
import { Button, View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity, Easing } from "react-native";
import Header from "../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TransitionSpecs, createStackNavigator, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import Depart1 from "./Departs/Depart1";

const Stack = createStackNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  }
}

const customTransition = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  CardStyleInterpolators: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            })
          },
        ]
      },
    }
  }
}

export default function Departs() {
  return (

    <Stack.Navigator initialRouteName={DepartHome} screenOptions={{gestureEnabled:true, gestureDirection:"horizontal"}}>
      <Stack.Screen
        name="DepartHome"
        component={DepartHome}
        options={{
          headerShown:false,
        }}
      />
      <Stack.Screen
        name="Depart1"
        component={Depart1}
        options={{
          headerShown:true,
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

function DepartHome({navigation}) {
  return (

    <SafeAreaView style={styles.container}>

    <ScrollView style={styles.scrollView}>

    <Header />

    <View style={{  }}>
      
        <View style={ styles.flex } marginTop={20}>

            <View style={ styles.card }>
                <Image
                      style={styles.bg}
                      source={require('../assets/Booking/1.jpg')}
                      resizeMode="contain"
                    />
                <Text style={styles.desc}>Un Départ</Text>
            </View>

            <View style={ styles.card }>
                <Image
                      style={styles.bg}
                      source={require('../assets/Booking/3.jpg')}
                      resizeMode="contain"
                    />
                <Text style={styles.desc}>Un Cours</Text>
            </View>

            <View style={ styles.card }>
                <Image
                      style={styles.bg}
                      source={require('../assets/Booking/4.jpg')}
                      resizeMode="contain"
                    />
                <Text style={styles.desc}>Une Séance de fitting</Text>
            </View>

            <View style={ styles.card }>
                  <Image
                      style={styles.bg}
                      source={require('../assets/Booking/2.jpg')}
                      resizeMode="contain"
                    />
                <Text style={styles.desc}>Une Compétition</Text>
            </View>

        </View>

        <Text style={styles.headTitle}>Mes Rendez-Vous</Text>

        
              <TouchableOpacity style={ styles.rdv } onPress={() => navigation.navigate('Depart1', { with: ['Aymeric', 'Valentin', 'Ben'], date: '29 Sept.', date2: '14h00', confirm: 'Confirmé', golf: 'Baden', address: 'Baden, Bretagne', hdc: '10', par: '71' })}>

                <View style={ styles.rdv.text }>
                    <Text style={ styles.rdv.text.date }>29 Sept.</Text>
                    <Text style={ styles.rdv.text.date2 }>Jeudi à 14h00</Text>
                    <Text style={ styles.rdv.text.confirm }>Confirmé</Text>
                </View>

                <View style={ styles.rdv.text2 }>
                    <Text style={ styles.rdv.text2.golf }>Golf de Baden</Text>
                    <Text style={ styles.rdv.text2.with }>avec Valentin, Aymeric et Ben</Text>
                </View>

                <View style={ styles.rdv.text3 }>
                  <MaterialCommunityIcons name="arrow-top-right-thin-circle-outline" size={30} color="grey" />
                </View>

              </TouchableOpacity>

              <TouchableOpacity style={ styles.rdv } onPress={() => navigation.navigate('Depart1', { with: ['Arnaud'], date: '10 Oct.', date2: '14h20', confirm: 'Non Confirmé', golf: 'Baden', address: 'Baden, Bretagne', hdc: '10', par: '71' })}>

                <View style={ styles.rdv.text }>
                    <Text style={ styles.rdv.text.date }>10 Oct.</Text>
                    <Text style={ styles.rdv.text.date2 }>Mardi à 14h20</Text>
                    <Text style={ styles.rdv.text.confirmNot }>Non Confirmé</Text>
                </View>

                <View style={ styles.rdv.text2 }>
                    <Text style={ styles.rdv.text2.golf }>Golf de Baden</Text>
                    <Text style={ styles.rdv.text2.with }>Cours avec Arnaud</Text>
                </View>

                <View style={ styles.rdv.text3 }>
                  <MaterialCommunityIcons name="arrow-top-right-thin-circle-outline" size={30} color="grey" />
                </View>

              </TouchableOpacity>

              <TouchableOpacity style={ styles.rdv } onPress={() => navigation.navigate('Depart1', { with: ['Corentin'], date: '15 Oct.', date2: '15h50', confirm: 'Non Confirmé', golf: 'Saint Laurent', address: 'Ploemel, Bretagne', hdc: '10', par: '75' })}>

                <View style={ styles.rdv.text }>
                    <Text style={ styles.rdv.text.date }>15 Oct.</Text>
                    <Text style={ styles.rdv.text.date2 }>Jeudi à 15h50</Text>
                    <Text style={ styles.rdv.text.confirmNot }>Non Confirmé</Text>
                </View>

                <View style={ styles.rdv.text2 }>
                    <Text style={ styles.rdv.text2.golf }>Golf de St Laurent</Text>
                    <Text style={ styles.rdv.text2.with }>avec Corentin</Text>
                </View>

                <View style={ styles.rdv.text3 }>
                  <MaterialCommunityIcons name="arrow-top-right-thin-circle-outline" size={30} color="grey" />
                </View>

              </TouchableOpacity>


      </View>
    </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({  
  rdv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: "row",
    width: '100%',
    height: 100,
    borderTopWidth: 1,
    borderColor: "gray",
    text: {
      height: 100,
      width: 150,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      date: {
        fontWeight: 'bold',
        fontSize: 20
      },
      date2: {
        fontSize: 16,
        color: "gray",
      },
      confirm: {
        fontSize: 16,
        color: "green"
      },
      confirmNot: {
        fontSize: 16,
        color: "red"
      }
    },
    text2: {
      height: 100,
      width: 175,
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      golf: {
        fontSize: 16,
        fontWeight: 'bold'
      },
      with: {
        color: "gray"
      },
    },
    text3: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      height: 100,
      width: 50,
    }
  },
  headTitle: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 30
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: 'wrap',
    gap: 20,
  },
  card: {
    width: 180,
    height: 120,
    padding: 5,
    display: "flex",
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    position: 'relative',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    shadowColor: '#171717'
  },
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 180,
    height: 120,
    borderRadius: 10,
  },
  desc: {
    fontWeight: 'bold',
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 1,
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4
  },
});

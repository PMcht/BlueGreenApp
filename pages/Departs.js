import React, { Component } from "react";
import { Button, View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity, Easing, FlatList, useWindowDimensions, ImageBackground } from "react-native";
import Header from "../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TransitionSpecs, createStackNavigator, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import Depart1 from "./Departs/Depart1";
import { DepartResa } from "./Departs/DepartResa";
import { CoursResa } from "./Departs/CoursResa";
import { PracticeResa } from "./Departs/PracticeResa";
import { CompetResa } from "./Departs/CompetResa";


const Stack = createStackNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  }
}

const slides = [
  {
    id: 0,
    title: 'Réserver un départ',
    img: require('../assets/Booking/1.jpg'),
    link: 'DepartResa',
    desc: 'Un parcours seul ou à plusieurs'
  },
  {
    id: 1,
    title: 'Prendre un cours',
    img: require('../assets/Booking/3.jpg'),
    link: 'CoursResa',
    desc: 'S\'améliorer en continu'
  },
  {
    id: 2,
    title: 'Recharges de practice',
    img: require('../assets/Booking/2.jpg'),
    link: 'PracticeResa',
    desc: 'Car l\'entrainement est important'
  },
  {
    id: 3,
    title: 'Inscription compétition',
    img: require('../assets/Booking/4.jpg'),
    link: 'CompetResa',
    desc: 'Pour se tester et gagner'
  },
]

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
      <Stack.Screen
        name="DepartResa"
        component={DepartResa}
        gestureEnabled={false}
        options={{
          headerShown:true,
          transitionSpec: {
            open: config,
            close: config
          },
          headerTitle:"Nouveau Départ",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="CoursResa"
        component={CoursResa}
        options={{
          headerShown:true,
          transitionSpec: {
            open: config,
            close: config
          },
          headerTitle:"Réserver un cours",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="PracticeResa"
        component={PracticeResa}
        options={{
          headerShown:true,
          transitionSpec: {
            open: config,
            close: config
          },
          headerTitle:"Recharger ma carte de practice",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="CompetResa"
        component={CompetResa}
        options={{
          headerShown:true,
          transitionSpec: {
            open: config,
            close: config
          },
          headerTitle:"S'inscrire à une compétition",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
    
  );
}

function DepartHome({navigation}) {
  const {height, width, scale, fontScale} = useWindowDimensions();

  return (

    <SafeAreaView style={styles.container}>

    <Header />

    <ScrollView style={styles.scrollView}>

    

    <View style={{ backgroundColor: "#fff", paddingBottom: 70 }}>

        <FlatList
            data={slides}
            renderItem={({ item }) =>  
              <TouchableOpacity activeOpacity={1} style={ [styles.card, {width: (width - 50)}] } onPress={() => navigation.navigate(item.link)}>
                  <View style={[styles.cardBG]}>
                    <ImageBackground
                      style={styles.cardIMG}
                      source={item.img}
                      resizeMode="cover"
                    />

                    <View style={styles.cardTxt}>
                      <Text style={styles.boldDesc}>
                        {item.title}
                      </Text>
                      <Text style={styles.thinDesc}>
                        {item.desc}
                      </Text>
                    </View>
                  </View>
              </TouchableOpacity>}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToInterval={width -50}
            bounces={false}
            keyExtractor={(item) => item.id}
            disableIntervalMomentum
            />

        <View style={styles.departs}>

            <Text style={styles.headTitle}>Mes Rendez-Vous</Text>

            
                  <TouchableOpacity style={ [styles.rdv, {backgroundColor: "rgba(168, 168, 168, 0.11)"}] } onPress={() => navigation.navigate('Depart1', { with: ['Aymeric', 'Valentin', 'Ben'], date: '29 Sept.', date2: '14h00', confirm: 'Confirmé', golf: 'Baden', address: 'Baden, Bretagne', hdc: '10', par: '71' })}>
                      <View style={styles.appointment}>
                          <Text style={styles.thin}>Parcours de Golf</Text>
                          <View style={styles.date}>
                            <MaterialCommunityIcons style={styles.dateIcon} name="clock" />
                            <Text style={styles.dateText}>Vendredi 29 Sept. à 14h00</Text>
                          </View>
                      </View>

                      <View style={styles.info}>
                          <Image
                            style={styles.pic}
                            source={require('../assets/Booking/Resa/1.jpg')}
                            resizeMode="cover"
                          />
                          <View style={styles.textInfo}>
                            <Text style={styles.golf}>Golf de Baden</Text>
                            <Text style={styles.thin}>Avec Aymeric, Ben et Valentin</Text>
                          </View>
                      </View>

                  </TouchableOpacity>

                  <TouchableOpacity style={ styles.rdv } onPress={() => navigation.navigate('Depart1', { with: ['Arnaud'], date: '10 Oct.', date2: '14h20', confirm: 'Non Confirmé', golf: 'Baden', address: 'Baden, Bretagne', hdc: '10', par: '71' })}>

                  <View style={styles.appointment}>
                          <Text style={styles.thin}>Cours de Golf</Text>
                          <View style={styles.date}>
                            <MaterialCommunityIcons style={styles.dateIcon} name="clock" />
                            <Text style={styles.dateText}>Vendredi 10 Oct. à 14h20</Text>
                          </View>
                      </View>

                      <View style={styles.info}>
                          <Image
                            style={styles.pic}
                            source={require('../assets/Booking/Resa/Persons/Aymeric.jpg')}
                            resizeMode="cover"
                          />
                          <View style={styles.textInfo}>
                            <Text style={styles.golf}>Golf de Baden</Text>
                            <Text style={styles.thin}>Avec Arnaud</Text>
                          </View>
                      </View>

                  </TouchableOpacity>

                  <TouchableOpacity style={ [styles.rdv, {backgroundColor: "rgba(168, 168, 168, 0.11)"}] } onPress={() => navigation.navigate('Depart1', { with: ['Corentin'], date: '15 Oct.', date2: '15h50', confirm: 'Non Confirmé', golf: 'Saint Laurent', address: 'Ploemel, Bretagne', hdc: '10', par: '75' })}>

                  <View style={styles.appointment}>
                          <Text style={styles.thin}>Parcours de Golf</Text>
                          <View style={styles.date}>
                            <MaterialCommunityIcons style={styles.dateIcon} name="clock" />
                            <Text style={styles.dateText}>Vendredi 15 Oct. à 15h50</Text>
                          </View>
                      </View>

                      <View style={styles.info}>
                          <Image
                            style={styles.pic}
                            source={require('../assets/Booking/Resa/2.webp')}
                            resizeMode="cover"
                          />
                          <View style={styles.textInfo}>
                            <Text style={styles.golf}>Golf de St Laurent</Text>
                            <Text style={styles.thin}>Avec Corentin</Text>
                          </View>
                      </View>

                  </TouchableOpacity>

        </View>

      </View>
    </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({  

  rdv: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'flex-start',
    flexDirection: "column",
    width: '100%',
    paddingVertical: 10,
    height: 150,
    paddingHorizontal: 35
  },
  appointment: {
    borderBottomWidth: 1,
    borderColor: "#ededed",
    paddingBottom: 10,
    width: "100%"
  },
  thin: {
    color: "gray",
    fontWeight: "400"
  },
  date: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    fontWeight: "700",
    fontSize: 16,
    marginLeft: 5
  }, 
  dateIcon: {
    fontWeight: "700",
    fontSize: 16
  },
  info: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  textInfo:{
    marginLeft: 10
  },
  pic: {
    borderRadius: 10,
    width: 50,
    height: 50
  },
  golf: {
    fontWeight: '700',
    fontSize: 24,
    
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
    height: 300,
    padding: "5%"
  },
  cardBG: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    position: "relative",
    overflow: 'hidden'
  },
  cardIMG: {
    position: "absolute",
    height: "100%",
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 400
  },
  cardTxt: {
    height: "30%",
    width: '100%',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    position: "absolute",
    bottom: 0
  },
  boldDesc: {
    fontSize: 26,
    fontWeight: '600',
  },
  thinDesc: {
    fontSize: 15,
    fontWeight: '400',
  }

});

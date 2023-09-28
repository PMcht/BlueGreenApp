import { Button, Easing, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { TransitionSpecs, createStackNavigator, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import Header from '../components/Header'
import Depart1 from "./Home/Depart1";
import { DepartResa } from "./Home/DepartResa";
import { CoursResa } from "./Home/CoursResa";
import { PracticeResa } from "./Home/PracticeResa";
import { CompetResa } from "./Home/CompetResa";
import { Shadow } from 'react-native-shadow-2';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { departsList } from '../utils/json/departsList';


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
    title: 'Parcours',
    img: "golf",
    link: 'DepartResa',
    desc: 'Réserver un départ'
  },
  {
    id: 1,
    title: 'Cours',
    img: "golf-cart",
    link: 'CoursResa',
    desc: 'Prendre un cours'
  },
  {
    id: 2,
    title: 'Practice',
    img: "golf-tee",
    link: 'PracticeResa',
    desc: 'Recharge de practice'
  },
  {
    id: 3,
    title: 'Compétition',
    img: "medal",
    link: 'CompetResa',
    desc: 'Inscription competition'
  },
]

export default function Home() {
  return (

    <Stack.Navigator initialRouteName={HomeNext} screenOptions={{gestureEnabled:true, gestureDirection:"horizontal"}}>
      <Stack.Screen
        name="DepartHome"
        component={HomeNext}
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


export function HomeNext({navigation}) {

    const {height, width, scale, fontScale} = useWindowDimensions();

  return (
    <SafeAreaView >

        <Header />

        <ScrollView >

          <View style={[styles.container]}>

          <View style={styles.welcome}>
            <View>
              <View style={styles.welcomeMain}>
                <Image
                    style={styles.pic}
                    source={require('../assets/Home/meteo.png')}
                  />
                <Text style={styles.weather}>20°C</Text>
              </View>

              <Text style={styles.msg}>Bonjour, Paul</Text>
            </View>
            <Image
                style={styles.profilePic}
                source={require('../assets/Booking/Resa/Persons/Paul.jpg')}
              />
          </View>


          <View style={styles.stats}>

              <View style={styles.statistics}>
                <Text style={styles.boldStat}>32</Text>
                <Text>Départs</Text>
              </View>

              <View style={styles.statistics}>
                <Text style={styles.boldStat}>12</Text>
                <Text>Index</Text>
              </View>

              <View style={styles.statistics}>
                <Text style={styles.boldStat}>22</Text>
                <Text>Slope</Text>
              </View>

          </View>


          <View style={styles.next}>

              <Text style={styles.bold}>Mes évènements à venir</Text>

              <View style={{flex: 3}}>

                <FlatList
                        data={departsList}
                        renderItem={({ item }) => 
                      
                        <TouchableOpacity activeOpacity={1} style={[styles.event, {width: (320), marginHorizontal: (10)}]} key={item.id} onPress={() => navigation.navigate('Depart1', { with: item.with, type: item.type, date: item.date, date2: item.hour, confirm: 'Confirmé', golf: item.golfName, address: item.golfAddress, hdc: '10', par: '71' })}>
                            <Image
                              style={styles.bgEvent}
                              source={item.golfIMG}
                              resizeMode='cover'
                            />
                            <LinearGradient style={styles.bgLinear} colors={['rgba(19, 19, 20, 0)', 'rgba(19, 19, 20, 0.6)', 'rgba(19, 19, 20, 0.8)']}>
                                <View>
                                    <Text style={styles.boldNext}>Golf de {item.golfName}</Text>
                                    <Text style={styles.thinNext}>{item.type} à {item.hour}</Text>
                                </View>
                                <Text style={styles.button}>Plus d'infos</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        }
                        horizontal
                        showsHorizontalScrollIndicator ={false}
                        pagingEnabled
                        snapToInterval={(330)}
                        decelerationRate={0.0}
                        disableIntervalMomentum={ true }
                        keyExtractor={(item) => item.id}
                        scrollEventThrottle={1}
                        />

              </View>


          </View>

          <Text style={[styles.bold, { marginTop: 35, marginBottom: 20}]}>Réserver un évènement</Text>


          <View style={styles.book}>

              {slides.map((item) => {

                  return (
                  <Shadow  key={item.id} style={ [styles.bookingCard] }>
                      <TouchableOpacity style={ [styles.bookingCardInside] } onPress={() => navigation.navigate(item.link)}>

                          <View style={styles.bookingTop}>
                            <Shadow style={styles.iconShadow}>
                              <MaterialCommunityIcons style={styles.Icon} name={item.img} />
                            </Shadow>
                          </View>

                          <View style={styles.bookingBottom}>
                            <Text style={[styles.bold, styles.center]}>{item.title}</Text>
                            <Text style={[styles.thin, styles.center]}>{item.desc}</Text>
                          </View>
                        
                      </TouchableOpacity>
                  </Shadow>
                  )
                  })}

          </View>


          <View style={styles.shop}>

              <Text style={styles.bold}>Dernières offres Bluegreen</Text>

          </View>

          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingBottom: 100
    },
    welcome: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      paddingHorizontal: 20
    },
    welcomeMain: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "row"
    },
    weather: {
      fontSize: 14
    },
    pic: {
      height: 14,
      width: 14,
      marginRight: 10
    },
    msg: {
      fontSize: 24,
      fontWeight: "700"
    },
    profilePic: {
      width: 50,
      height: 50,
      borderRadius: 50
    },


    stats: {
      width: '94%',
      marginLeft: "3%",
      height: 80,
      backgroundColor: 'rgba(37, 150, 190, 0.1)',
      marginVertical: 20,
      paddingHorizontal: 5,
      display: "flex",
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 20,
      marginHorizontal: 25
    },
    statistics: {
      width: '30%',
      height: 60,
      padding: 5,
      backgroundColor: '#fff',
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15
    },
    boldStat: {
      fontWeight: '700',
      fontSize: 18
    },


    next: {
      marginTop: 10,
    },
    bold: {
      fontWeight: '700',
      fontSize: 18,
      marginHorizontal: 25
    },
    event: {
      height: 170,
      marginTop: 10,
      position: 'relative',
      borderRadius: 10,
      overflow: "hidden"
    },
    bgEvent: {
      position: "absolute",
      width: "100%",
      height: 200,
    },
    bgLinear: {
      position: "absolute",
      bottom: 0,
      height: '40%',
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: 'space-around',
      flexDirection: 'row'
    },
    boldNext: {
      fontWeight: '700',
      fontSize: 20,
      color: "#fff"
    },
    thinNext: {
      color: "#fff",
      fontStyle: 'italic'
    },
    button:{
      backgroundColor: "#2ba9bc",
      paddingVertical: 5,
      paddingHorizontal: 14,
      fontSize: 16,
      borderRadius: 10,
      color: "#fff"
    },



    book: {
      width: '100%',
      display: "flex",
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'row',
      flexWrap: "wrap",
      columnGap: 20,
      rowGap: 25
    },
    bookingCard:{
      width: 170,
      height: 90,
      borderRadius: 10,
    },
    bookingTop: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      width: '100%',
      height: 25,
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(37, 150, 190, 0.5)'
    },
    bookingBottom: {
      width: '100%',
      height: 65,
      paddingVertical: 10
    },
    center: {
      textAlign: 'center',
    },
    Icon:{
      width: 40,
      height: 40,
      fontSize: 30,
      padding: 5,
      backgroundColor: "#fff",
      borderRadius: 50,
    },


    shop: {
      marginTop: 40
    },
    shopping:{
      marginTop: 10,
      width: '100%',
    }
})
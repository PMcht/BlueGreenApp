import { Button, Easing, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { TransitionSpecs, createStackNavigator, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import Header from '../components/Header';
import { CoursResa } from './Home/CoursResa';
import { PracticeResa } from './Home/PracticeResa';
import { CompetResa } from './Home/CompetResa';
import { departsList } from '../utils/json/departsList';
import { Shadow } from 'react-native-shadow-2';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Depart1 from '../components/Depart1';
import Depart from './Home/DepartResa';
import { ChoosePlayers } from '../components/ChoosePlayers';


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
        component={Depart}
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
      <Stack.Screen
        name="ChoosePlayer"
        component={ChoosePlayers}
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
    let offsetX= 1;
    let offsetY= 10;

  return (
    <SafeAreaView >

        <Header />

        <ScrollView >

          <View style={[Styles.container]}>

          <View style={Styles.welcome}>
            <View>
              <View style={Styles.welcomeMain}>
                <Image
                    style={Styles.pic}
                    source={require('../assets/Home/meteo.png')}
                  />
                <Text style={Styles.weather}>20°C</Text>
              </View>

              <Text style={Styles.msg}>Bonjour, Paul</Text>
            </View>
            <Image
                style={Styles.profilePic}
                source={require('../assets/Booking/Resa/Persons/Paul.jpg')}
              />
          </View>


          <View style={Styles.stats}>

              <View style={Styles.statistics}>
                <Text style={Styles.boldStat}>32</Text>
                <Text>Départs</Text>
              </View>

              <View style={Styles.statistics}>
                <Text style={Styles.boldStat}>12</Text>
                <Text>Index</Text>
              </View>

              <View style={Styles.statistics}>
                <Text style={Styles.boldStat}>22</Text>
                <Text>Slope</Text>
              </View>

          </View>


          <View style={Styles.next}>

              <Text style={Styles.bold}>Mes évènements à venir</Text>

              <View style={{flex: 3}}>

                <FlatList
                      data={departsList}
                      renderItem={({ item }) => 
                      
                        <TouchableOpacity activeOpacity={.9} style={[Styles.event, {width: (320), marginHorizontal: (10)}]} key={item.id} onPress={() => navigation.navigate('Depart1', {id:departsList.indexOf(item)})}>
                            <Image
                              style={Styles.bgEvent}
                              source={item.golfIMG}
                              resizeMode='cover'
                            />
                            <LinearGradient style={Styles.bgLinear} colors={['rgba(19, 19, 20, 0)', 'rgba(19, 19, 20, 0.6)', 'rgba(19, 19, 20, 0.8)']}>
                                <View style={Styles.names}>
                                    <Text style={Styles.boldNext}>{item.golfName.length >= 12 ? item.golfName : `Golf de ${item.golfName}`} </Text>
                                    <Text style={Styles.thinNext}>{item.type} à {item.hour}</Text>
                                </View>
                                <Text style={Styles.button}>Plus d'infos</Text>
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

          <Text style={[Styles.bold, { marginTop: 35, marginBottom: 20}]}>Réserver un évènement</Text>


          <View style={Styles.book}>

              {slides.map((item) => {

                  return (
                  <Shadow  key={item.id} style={ [Styles.bookingCard] } distance={15} offset={(offsetX || offsetY) ? [offsetX, offsetY] : undefined}>
                      <TouchableOpacity style={ [Styles.bookingCardInside] } onPress={() => navigation.navigate(item.link)}>

                          <MaterialCommunityIcons style={Styles.Icon} name={item.img} />

                          <Text style={[Styles.center]}>{item.title}</Text>
                        
                      </TouchableOpacity>
                  </Shadow>
                  )
                  })}

          </View>


          <View style={Styles.shop}>

              <Text style={Styles.bold}>Dernières offres Bluegreen</Text>

          </View>

          </View>
        </ScrollView>
    </SafeAreaView>
  )
}


const Styles = StyleSheet.create({
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
  names:{
    maxWidth: 190
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
    columnGap: 30,
    rowGap: 25
  },
  bookingCard:{
    width: 160,
    height: 120,
    borderRadius: 10,
    display: "flex",
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: "#fff"
  },
  Icon:{
    width: 60,
    marginBottom: 10,
    alignSelf: 'center',
    height: 60,
    fontSize: 40,
    borderRadius: 50,
    color: '#2ba9bc',
    padding: 10,
    backgroundColor: '#fbf9fb'
  },
  center:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1
  },


  shop: {
    marginTop: 40
  },
  shopping:{
    marginTop: 10,
    width: '100%',
  }
})
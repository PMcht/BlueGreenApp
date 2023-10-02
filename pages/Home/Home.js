import { Button, Easing, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { TransitionSpecs, createStackNavigator, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import Header from '../../components/Header';
import Depart1 from './Depart1/Depart1';
import { DepartResa } from './DepartResa/DepartResa';
import { CoursResa } from './CoursResa/CoursResa';
import { PracticeResa } from './PracticeResa/PracticeResa';
import { CompetResa } from './CompetResa/CompetResa';
import { homeStyles } from './homeStyle';
import { departsList } from '../../utils/json/departsList';
import { Shadow } from 'react-native-shadow-2';
import { MaterialCommunityIcons } from '@expo/vector-icons';


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
    let offsetX= 1;
    let offsetY= 10;

  return (
    <SafeAreaView >

        <Header />

        <ScrollView >

          <View style={[homeStyles.container]}>

          <View style={homeStyles.welcome}>
            <View>
              <View style={homeStyles.welcomeMain}>
                <Image
                    style={homeStyles.pic}
                    source={require('../../assets/Home/meteo.png')}
                  />
                <Text style={homeStyles.weather}>20°C</Text>
              </View>

              <Text style={homeStyles.msg}>Bonjour, Paul</Text>
            </View>
            <Image
                style={homeStyles.profilePic}
                source={require('../../assets/Booking/Resa/Persons/Paul.jpg')}
              />
          </View>


          <View style={homeStyles.stats}>

              <View style={homeStyles.statistics}>
                <Text style={homeStyles.boldStat}>32</Text>
                <Text>Départs</Text>
              </View>

              <View style={homeStyles.statistics}>
                <Text style={homeStyles.boldStat}>12</Text>
                <Text>Index</Text>
              </View>

              <View style={homeStyles.statistics}>
                <Text style={homeStyles.boldStat}>22</Text>
                <Text>Slope</Text>
              </View>

          </View>


          <View style={homeStyles.next}>

              <Text style={homeStyles.bold}>Mes évènements à venir</Text>

              <View style={{flex: 3}}>

                <FlatList
                        data={departsList}
                        renderItem={({ item }) => 
                      
                        <TouchableOpacity activeOpacity={1} style={[homeStyles.event, {width: (320), marginHorizontal: (10)}]} key={item.id} onPress={() => navigation.navigate('Depart1', { with: item.with, type: item.type, date: item.date, date2: item.hour, confirm: 'Confirmé', golf: item.golfName, address: item.golfAddress, hdc: '10', par: '71' })}>
                            <Image
                              style={homeStyles.bgEvent}
                              source={item.golfIMG}
                              resizeMode='cover'
                            />
                            <LinearGradient style={homeStyles.bgLinear} colors={['rgba(19, 19, 20, 0)', 'rgba(19, 19, 20, 0.6)', 'rgba(19, 19, 20, 0.8)']}>
                                <View>
                                    <Text style={homeStyles.boldNext}>Golf de {item.golfName}</Text>
                                    <Text style={homeStyles.thinNext}>{item.type} à {item.hour}</Text>
                                </View>
                                <Text style={homeStyles.button}>Plus d'infos</Text>
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

          <Text style={[homeStyles.bold, { marginTop: 35, marginBottom: 20}]}>Réserver un évènement</Text>


          <View style={homeStyles.book}>

              {slides.map((item) => {

                  return (
                  <Shadow  key={item.id} style={ [homeStyles.bookingCard] } distance={15} offset={(offsetX || offsetY) ? [offsetX, offsetY] : undefined}>
                      <TouchableOpacity style={ [homeStyles.bookingCardInside] } onPress={() => navigation.navigate(item.link)}>

                          <MaterialCommunityIcons style={homeStyles.Icon} name={item.img} />

                          <Text style={[homeStyles.center]}>{item.title}</Text>
                        
                      </TouchableOpacity>
                  </Shadow>
                  )
                  })}

          </View>


          <View style={homeStyles.shop}>

              <Text style={homeStyles.bold}>Dernières offres Bluegreen</Text>

          </View>

          </View>
        </ScrollView>
    </SafeAreaView>
  )
}
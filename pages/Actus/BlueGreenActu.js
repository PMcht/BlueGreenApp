import React, { Component } from "react";
import { Button, View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";
import Header from "../../components/Header";

export default function BlueGreenActu() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={ styles.mainContainer }>

          <View style={ styles.card }>


            <View style={ styles.cardHeader }>
                <Image
                  style={styles.logo}
                  source={require('../../assets/Logos/mainLogo.png')}
                  resizeMode="contain"
                />
                <View>
                  <Text style={ styles.entity }>BlueGreen</Text>
                  <Text style={ styles.time }>Il y a 1h</Text>
                </View>
                
            </View>

            <Text style={ styles.title }>Le Practice RMC</Text>

            <Text style={styles.comm}>
                Cette année encore 15 numéros sont prévus pour démocratiser encore plus la pratique du golf et informer les adeptes de plus en plus nombreux.
            </Text>

            <Image
                  style={styles.img}
                  source={require('../../assets/Home/Bluegreen/1.jpg')}
                />

          </View>

          <View style={ styles.card }>


            <View style={ styles.cardHeader }>
                <Image
                  style={styles.logo}
                  source={require('../../assets/Logos/mainLogo.png')}
                  resizeMode="contain"
                />
                <View>
                  <Text style={ styles.entity }>BlueGreen</Text>
                  <Text style={ styles.time }>Il y a 2 jours</Text>
                </View>
                
            </View>

            <Text style={ styles.title }>Je m’initie maintenant !</Text>

            <Text style={styles.comm}>
              Du 1er septembre au 15 octobre faites découvrir ou découvrez le golf lors des initiations gratuites !
            </Text>

            <Image
                  style={styles.img}
                  source={require('../../assets/Home/Bluegreen/2.jpg')}
                />

          </View>

          <View style={ styles.card }>


          <View style={ styles.cardHeader }>
              <Image
                style={styles.logo}
                source={require('../../assets/Logos/mainLogo.png')}
                resizeMode="contain"
              />
              <View>
                <Text style={ styles.entity }>BlueGreen</Text>
                <Text style={ styles.time }>Il y a 3j</Text>
              </View>
              
          </View>

          <Text style={ styles.title }>Les abonnements Grand Paris et Paris Sud s'aggrandissent</Text>

          <Text style={styles.comm}>
            Situé juste à côté du célèbre parc d’attractions Disneyland Paris, à 30 minutes de Paris, ce magnifique parcours de 27 trous vous offrira un grand moment de détente.
          </Text>

          <Image
                style={styles.img}
                source={require('../../assets/Home/Bluegreen/3.png')}
              />

          </View>
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  card: {
    marginVertical: 5,
    paddingHorizontal: "2.5%",
    paddingVertical: 30,
    width: '95%',
    minHeight: 100,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: "#e9ebf0"
  },
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  logo: {
    maxHeight: 40,
    maxWidth: 40,
    marginRight: 10
  },
  entity: {
    fontWeight: 'bold'
  },
  time: {
    fontStyle: 'italic',
    fontSize: 12
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingVertical: 10
  },
  img: {
    width: "100%",
    height: 160,
  },
  comm: {
    fontSize: 14,
    paddingBottom: 15
  }
  
});

import React, { Component } from "react";
import { Button, View, Text, SafeAreaView, ScrollView, Image, StyleSheet } from "react-native";

export default function MyGolfActu() {
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
                <Text style={ styles.entity }>Golf de Saint Laurent</Text>
                <Text style={ styles.time }>Il y a 1h</Text>
              </View>
              
          </View>

          <Text style={ styles.title }>Offres Spéciales Abonnements</Text>

          <Text style={styles.comm}>
              Jusqu'au 30 septembre, bénéficiez d'une remise de 20% sur votre nouvel abonnement !
          </Text>

          <Image
                style={styles.img}
                source={require('../../assets/Home/Mygolf/1.jpg')}
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
                <Text style={ styles.entity }>Golf de Baden</Text>
                <Text style={ styles.time }>Il y a 2 jours</Text>
              </View>
              
          </View>

          <Text style={ styles.title }>-15% sur les casquettes</Text>

          <Text style={styles.comm}>
              Profitez actuellement d'une remise de 20% sur les casquettes Srixon logotées Saint-Laurent !
          </Text>

          <Image
                style={styles.img}
                source={require('../../assets/Home/Mygolf/2.jpg')}
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
              <Text style={ styles.entity }>Golf de Saint Laurent</Text>
              <Text style={ styles.time }>Il y a 3j</Text>
            </View>
            
        </View>

        <Text style={ styles.title }>Offre de dernière minute: practice</Text>

        <Text style={styles.comm}>
            Jusqu'au 30 septembre, bénéficiez d'une remise de 15% sur les recharges de practice suivantes au golf de Saint-Laurent
        </Text>

        <Image
              style={styles.img}
              source={require('../../assets/Home/Mygolf/3.jpg')}
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

import React, { Component } from "react";
import { Button, View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";

export default function FriendsActu() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <View style={ styles.mainContainer }>

        <View style={ styles.card }>

          <View style={ styles.cardHeader }>
              <Image
                style={styles.logo}
                source={require('../../assets/Home/Mygolf/Friends/1.jpg')}
                resizeMode="contain"
              />
              <View >
                <Text style={styles.textWidth}><Text style={ styles.entity }>Paul</Text> a joué une partie avec <Text style={ styles.entity }>Aymeric & Corentin</Text> au golf de <Text style={ styles.entity }>Saint Laurent</Text></Text>
                <Text style={ styles.time }>Il y a 1h</Text>
              </View>
              
          </View>

          <Text style={styles.comm}>
              Mes puts n'étaient pas au rendez-vous, mais c'était une très agréable partie ⛳​
          </Text>

          
          <Text style={styles.com}><Text style={styles.entity}>Scores:</Text>   Paul: <Text style={styles.entity}>+20</Text>  -  Corentin: <Text style={styles.entity}>+12 🏆​</Text>  -  Aymeric: <Text style={styles.entity}>+19</Text></Text>
              
        </View>

        <View style={ styles.card }>

          <View style={ styles.cardHeader }>
              <Image
                style={styles.logo}
                source={require('../../assets/Home/Mygolf/Friends/2.jpg')}
                resizeMode="contain"
              />
              <View >
                <Text style={styles.textWidth}><Text style={ styles.entity }>Valentin</Text> a réservé un départ au golf de <Text style={ styles.entity }>Val Queven</Text></Text>
                <Text style={ styles.time }>Il y a 2 jours</Text>
              </View>
              
          </View>

          <Text style={styles.comm}>
              Si vous êtes disponibles, n'hésitez pas à me rejoindre 👌​
          </Text>

          <Button
              title="Rejoindre le départ du 29/09 à 14h"
              color="#007aff"
            />

        </View>

        <View style={ styles.card }>

          <View style={ styles.cardHeader }>
              <Image
                style={styles.logo}
                source={require('../../assets/Home/Mygolf/Friends/3.jpg')}
                resizeMode="contain"
              />
              <View >
                <Text style={styles.textWidth}><Text style={ styles.entity }>Benjamin</Text> a partagé un lien</Text>
                <Text style={ styles.time }>Il y a 4 jours</Text>
              </View>
              
          </View>

          <Text style={styles.comm}>
              Excellente vidéo sur la position idéale au backswing, je suis devenu pro ​🏌🏼‍♂️​
          </Text>

          <Image
                style={styles.yt}
                source={require('../../assets/Home/Mygolf/Friends/yt.png')}
                resizeMode="contain"
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
textWidth: {
  width: 300,
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
  marginRight: 10,
  borderRadius: 200
},
entity: {
  fontWeight: 'bold'
},
time: {
  fontStyle: 'italic',
  fontSize: 12
},
comm: {
  fontSize: 14,
  paddingVertical: 15
},
yt: {
  height:200,
  width: 360
}

});

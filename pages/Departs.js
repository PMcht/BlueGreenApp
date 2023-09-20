import React, { Component } from "react";
import { Button, View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from "react-native";
import Header from "../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Departs() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View style={{  }}>

      <Header />
      
        <View style={ styles.flex } marginTop={50}>

            <View style={ styles.card } >
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

        <View style={ styles.rdv }>

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

        </View>

        <View style={ styles.rdv }>

          <View style={ styles.rdv.text }>
              <Text style={ styles.rdv.text.date }>10 Oct.</Text>
              <Text style={ styles.rdv.text.date2 }>Mardi à 14h20</Text>
              <Text style={ styles.rdv.text.confirmNot }>à Confirmer</Text>
          </View>

          <View style={ styles.rdv.text2 }>
              <Text style={ styles.rdv.text2.golf }>Golf de Baden</Text>
              <Text style={ styles.rdv.text2.with }>Cours avec Arnaud</Text>
          </View>

          <View style={ styles.rdv.text3 }>
            <MaterialCommunityIcons name="arrow-top-right-thin-circle-outline" size={30} color="grey" />
          </View>

        </View>

        <View style={ styles.rdv }>

          <View style={ styles.rdv.text }>
              <Text style={ styles.rdv.text.date }>15 Oct.</Text>
              <Text style={ styles.rdv.text.date2 }>Jeudi à 15h50</Text>
              <Text style={ styles.rdv.text.confirmNot }>à Confirmer</Text>
          </View>

          <View style={ styles.rdv.text2 }>
              <Text style={ styles.rdv.text2.golf }>Golf de St Laurent</Text>
              <Text style={ styles.rdv.text2.with }>avec Corentin</Text>
          </View>

          <View style={ styles.rdv.text3 }>
            <MaterialCommunityIcons name="arrow-top-right-thin-circle-outline" size={30} color="grey" />
          </View>

        </View>

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
    width: 400,
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

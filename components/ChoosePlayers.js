import { Button, View, Text, SafeAreaView, ScrollView, StyleSheet, TextInput, useWindowDimensions, TouchableOpacity, Image, Easing, Pressable } from "react-native";
import { persons } from "../utils/json/persons";

export function ChoosePlayers({ route, navigation, setPlayers, players }) {


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


        {persons.filter(element => {
            return !players.includes(element.name) && element.type == 'Friends'
          }).map((person) => {

         
            return (
              <TouchableOpacity onPress={() => {
                setPlayers([...players, person.name]); 
                navigation.goBack()} } 
                key={person.id} style={[styles.flex, styles.person]}>
                    <Image
                      style={styles.profilePic}
                      source={person.img}
                      resizeMode="cover"
                    />
                    
                    <View>
                      <Text style={styles.bold}>{person.name}</Text>
                      <View style={[styles.flex, {alignItems: "center", marginTop: 5}]}>
                        <Text style={styles.index}>Jaune</Text>
                        <Text style={styles.handicap}>Index: {person.index}</Text>
                      </View>
                    </View>
              </TouchableOpacity>
            )
          })}
      </View>
    );
  }
  
  
  
  const styles = StyleSheet.create({  
    dropdown: {
      height: 50,
      width: "40%"
    },
    bold: {
      fontWeight: "bold",
      fontSize: 20,
    },
    thin: {
      fontWeight: "400",
      color: "gray"
    },
    flex: {
      display: "flex",
      flexDirection: 'row'
    },
    line: {
      borderBottomWidth: 1,
      borderColor: "#e9ebf0",
      paddingBottom: 20 
    },
    img: {
      width: 80,
      height: 100,
      marginRight: 20,
      borderRadius: 10
    },
    info: {
      width: 250
    },
    param: {
      fontWeight: "bold"
    },
    space: {
      marginRight: 20
    },
    timing: {
      paddingTop: 20,
      fontSize: 20,
      textAlign: "center",
    },
    boldTiming: {
      fontWeight: "bold",
    },
    players: {
      paddingTop: 20,
    },
  
    playersTitle:{
      display: "flex",
      alignItems: 'flex-start',
      justifyContent:'space-between',
      flexDirection: 'row',
      marginBottom: 20
    },
    addPlayer: {
      marginTop: 10,
      color: '#2ba9bc'
    },
  
    person: {
      marginBottom: 10,
      position: 'relative'
    },
    profilePic: {
      width: 60,
      height: 60,
      borderRadius: 50,
      marginRight: 15
    },
    index: {
      backgroundColor: "#ffc800",
      color: "#fff",
      fontWeight: 'bold',
      paddingHorizontal: 10,
      paddingVertical: 3,
      borderRadius: 100,
      marginRight: 10
    },
    more: {
      position: "absolute",
      right: 0,
      top: 5,
      fontSize: 20
    },
    modif: {
      paddingTop: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    buttons: {
      marginBottom: 10,
      width: 150,
      paddingVertical: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
    }
  });
  
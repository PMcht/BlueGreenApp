
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, View, Text, stylesheet, Image, ScrollView, SafeAreaView, useWindowDimensions, Pressable, SafeAreaViewBase, StyleSheet, TouchableOpacity } from "react-native";
import { persons } from "../../utils/json/persons";
import { Dropdown, SelectCountry } from "react-native-element-dropdown";
import { useEffect, useState } from "react";
import { departsList } from "../../utils/json/departsList";
import { GolfList } from "../../components/GolfList";


export default function Depart1({navigation, route}) {
  const {height, width, scale, fontScale} = useWindowDimensions();

  const golfFocus = departsList[route.params.id];
  const [players, setPlayers] = useState(golfFocus.with)
  let personID = persons.filter(({name}) => players.includes(name))

  return (
    <ScrollView style={styles.scrollView}>
    <View style={{height: height-100, width: width, paddingVertical: 30, paddingHorizontal: 20, backgroundColor: "#fff"}}>

        <View style={[styles.course, styles.line]}>
            <Text style={[styles.bold, {marginBottom: 20}]}>
              Localisation
            </Text>

            <View style={styles.flex}>

              <Image
                  style={styles.img}
                  source={golfFocus.golfIMG}
                  resizeMode="cover"
                />

              <View style={styles.info}>
                <Text style={styles.bold}>Golf de {golfFocus.golfName}</Text>
                <Text style={[styles.thin, {marginTop: 10}]}>{golfFocus.golfAddress}</Text>
                <View style={[styles.flex, {marginTop: 10}]}>
                  <Text style={styles.space}>Handicap <Text style={styles.param}>22</Text></Text>
                  <Text style={styles.space}>Par <Text style={styles.param}>22</Text></Text>
                  <Text >Slope <Text style={styles.param}>22</Text></Text>
                </View>
              </View>

            </View>
        </View>

        <Text style={[styles.timing, styles.line]}>
            Le <Text style={styles.boldTiming}>{golfFocus.date}</Text> à <Text style={styles.boldTiming}>{golfFocus.hour}</Text>
        </Text>

        <View style={[styles.players, styles.line]}>
          
        {golfFocus.type == 'Cours' ?     
        
            <View style={styles.playersTitle}>
                  <Text style={[styles.bold]}>
                    Professeur
                  </Text>
            </View>
            
              :     
            
            <View style={styles.playersTitle}>
              <View>
                  <Text style={[styles.bold]}>
                    Partenaires
                  </Text>
                  <Text style={[styles.thin]}>
                    Jusqu'à 4 joueurs
                  </Text>
              </View>
              {personID.length == 3 ? <></> : 
              <TouchableOpacity style={styles.addPlayer} onPress={() => navigation.navigate('ChoosePlayer', {setPlayers, players, golfFocus})}><Text>Ajouter un joueur</Text></TouchableOpacity>
              }
              
            </View>
          }

            {personID.map((person) => {
       
              return (
                <View key={person.id} style={[styles.flex, styles.person]}>
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
                     <SelectCountry
                        style={styles.dropdown}
                        selectedTextStyle={styles.selectedTextStyle}
                        placeholderStyle={styles.placeholderStyle}
                        imageStyle={styles.imageStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        maxHeight={200}
                        data={[{id:"1", name:'Désinscrire'}]}
                        valueField="id"
                        labelField="name"
                        imageField="img"
                        placeholder=''
                        onChange={item => {
                          let index = golfFocus.with.indexOf(person.name)
                          golfFocus.with.splice(index, 1)
                          setPlayers(players.filter(item => item.name !== person.name))
                        }}
                        renderRightIcon={() => (
                          <MaterialCommunityIcons name="dots-vertical" style={styles.more} />
                          )}
                   />
                </View>
              )
            })}

        </View>

        <View style={styles.modif}>

            <Pressable onPress={() => console.log(players)} style={[styles.buttons, {backgroundColor: "#2ba9bc"}]}><Text style={[styles.bold, {color: "#fff"}]}>Modifier</Text></Pressable>
            <Text>ou</Text>
            <Pressable onPress={() => console.log(golfFocus)} style={[styles.buttons]} ><Text>Annuler ma réservation</Text></Pressable>

        </View>

    </View>
    </ScrollView>
  );
}


export function ChoosePlayers({ route, navigation }) {
  const golfFocus = route.params.golfFocus.with
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {persons.map((person) => {
       
          return (
            <TouchableOpacity onPress={() => {route.params.setPlayers(current => [...current, person.name]); golfFocus.push(person.name); navigation.goBack()} } key={person.id} style={[styles.flex, styles.person]}>
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

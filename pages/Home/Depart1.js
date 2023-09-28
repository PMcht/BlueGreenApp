
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, View, Text, StyleSheet, Image, ScrollView, SafeAreaView, useWindowDimensions, Pressable, SafeAreaViewBase } from "react-native";


export default function Depart1({navigation, route}) {
  const {height, width, scale, fontScale} = useWindowDimensions();
  let withArr = route.params.with;

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
                  source={require('../../assets/Booking/Resa/1.jpg')}
                  resizeMode="cover"
                />

              <View style={styles.info}>
                <Text style={styles.bold}>Golf de {route.params.golf}</Text>
                <Text style={[styles.thin, {marginTop: 10}]}>{route.params.address}</Text>
                <View style={[styles.flex, {marginTop: 10}]}>
                  <Text style={styles.space}>Handicap <Text style={styles.param}>{route.params.hdc}</Text></Text>
                  <Text style={styles.space}>Par <Text style={styles.param}>{route.params.par}</Text></Text>
                  <Text >Slope <Text style={styles.param}>{route.params.par}</Text></Text>
                </View>
              </View>

            </View>
        </View>

        <Text style={[styles.timing, styles.line]}>
            Le <Text style={styles.boldTiming}>{route.params.date}</Text> à <Text style={styles.boldTiming}>{route.params.date2}</Text>
        </Text>

        <View style={[styles.players, styles.line]}>
          
        {route.params.type == 'Cours' ?     
        
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
              <Text style={styles.addPlayer}>Ajouter un joueur</Text>
            </View>
          }

            {withArr.map((person) => {
              const test = `../../assets/Booking/Resa/Persons/` + `${person}` + `.jpg`;
              var imageMap = {
                'Valentin' : require('../../assets/Booking/Resa/Persons/Valentin.jpg'),
                'Aymeric' : require('../../assets/Booking/Resa/Persons/Aymeric.jpg'),
                'Corentin' : require('../../assets/Booking/Resa/Persons/Corentin.jpg'),
                'Ben' : require('../../assets/Booking/Resa/Persons/Ben.jpg'),
                'Arnaud' : require('../../assets/Booking/Resa/Persons/Arnaud.jpg'),
              }
              return (
                <View key={person} style={[styles.flex, styles.person]}>
                  <Image
                    style={styles.profilePic}
                    source={imageMap[person]}
                    resizeMode="cover"
                  />
                  <View>
                    <Text style={styles.bold}>{person}</Text>
                    <View style={[styles.flex, {alignItems: "center", marginTop: 5}]}>
                      <Text style={styles.index}>Jaune</Text>
                      <Text style={styles.handicap}> index: 20</Text>
                    </View>
                    
                  </View>
                  <MaterialCommunityIcons name="dots-vertical" style={styles.more} />

                </View>
              )
            })}

        </View>

        <View style={styles.modif}>

            <Pressable style={[styles.buttons, {backgroundColor: "#2ba9bc"}]} ><Text style={[styles.bold, {color: "#fff"}]}>Modifier</Text></Pressable>
            <Text>ou</Text>
            <Pressable style={[styles.buttons]} ><Text>Annuler ma réservation</Text></Pressable>

        </View>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({  
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

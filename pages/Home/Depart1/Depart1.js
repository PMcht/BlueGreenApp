
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, View, Text, depart1Stylesheet, Image, ScrollView, SafeAreaView, useWindowDimensions, Pressable, SafeAreaViewBase } from "react-native";
import { depart1Styles } from "./Depart1Styles";


export default function Depart1({navigation, route}) {
  const {height, width, scale, fontScale} = useWindowDimensions();
  let withArr = route.params.with;

  return (
    <ScrollView style={depart1Styles.scrollView}>
    <View style={{height: height-100, width: width, paddingVertical: 30, paddingHorizontal: 20, backgroundColor: "#fff"}}>

        <View style={[depart1Styles.course, depart1Styles.line]}>
            <Text style={[depart1Styles.bold, {marginBottom: 20}]}>
              Localisation
            </Text>

            <View style={depart1Styles.flex}>

              <Image
                  style={depart1Styles.img}
                  source={require('../../../assets/Booking/Resa/1.jpg')}
                  resizeMode="cover"
                />

              <View style={depart1Styles.info}>
                <Text style={depart1Styles.bold}>Golf de {route.params.golf}</Text>
                <Text style={[depart1Styles.thin, {marginTop: 10}]}>{route.params.address}</Text>
                <View style={[depart1Styles.flex, {marginTop: 10}]}>
                  <Text style={depart1Styles.space}>Handicap <Text style={depart1Styles.param}>{route.params.hdc}</Text></Text>
                  <Text style={depart1Styles.space}>Par <Text style={depart1Styles.param}>{route.params.par}</Text></Text>
                  <Text >Slope <Text style={depart1Styles.param}>{route.params.par}</Text></Text>
                </View>
              </View>

            </View>
        </View>

        <Text style={[depart1Styles.timing, depart1Styles.line]}>
            Le <Text style={depart1Styles.boldTiming}>{route.params.date}</Text> à <Text style={depart1Styles.boldTiming}>{route.params.date2}</Text>
        </Text>

        <View style={[depart1Styles.players, depart1Styles.line]}>
          
        {route.params.type == 'Cours' ?     
        
            <View style={depart1Styles.playersTitle}>
                  <Text style={[depart1Styles.bold]}>
                    Professeur
                  </Text>
            </View>
            
              :     
            
            <View style={depart1Styles.playersTitle}>
              <View>
                  <Text style={[depart1Styles.bold]}>
                    Partenaires
                  </Text>
                  <Text style={[depart1Styles.thin]}>
                    Jusqu'à 4 joueurs
                  </Text>
              </View>
              <Text style={depart1Styles.addPlayer}>Ajouter un joueur</Text>
            </View>
          }

            {withArr.map((person) => {
              const test = `../../../assets/Booking/Resa/Persons/` + `${person}` + `.jpg`;
              var imageMap = {
                'Valentin' : require('../../../assets/Booking/Resa/Persons/Valentin.jpg'),
                'Aymeric' : require('../../../assets/Booking/Resa/Persons/Aymeric.jpg'),
                'Corentin' : require('../../../assets/Booking/Resa/Persons/Corentin.jpg'),
                'Ben' : require('../../../assets/Booking/Resa/Persons/Ben.jpg'),
                'Arnaud' : require('../../../assets/Booking/Resa/Persons/Arnaud.jpg'),
              }
              return (
                <View key={person} style={[depart1Styles.flex, depart1Styles.person]}>
                  <Image
                    style={depart1Styles.profilePic}
                    source={imageMap[person]}
                    resizeMode="cover"
                  />
                  <View>
                    <Text style={depart1Styles.bold}>{person}</Text>
                    <View style={[depart1Styles.flex, {alignItems: "center", marginTop: 5}]}>
                      <Text style={depart1Styles.index}>Jaune</Text>
                      <Text style={depart1Styles.handicap}> index: 20</Text>
                    </View>
                    
                  </View>
                  <MaterialCommunityIcons name="dots-vertical" style={depart1Styles.more} />

                </View>
              )
            })}

        </View>

        <View style={depart1Styles.modif}>

            <Pressable style={[depart1Styles.buttons, {backgroundColor: "#2ba9bc"}]} ><Text style={[depart1Styles.bold, {color: "#fff"}]}>Modifier</Text></Pressable>
            <Text>ou</Text>
            <Pressable style={[depart1Styles.buttons]} ><Text>Annuler ma réservation</Text></Pressable>

        </View>

    </View>
    </ScrollView>
  );
}


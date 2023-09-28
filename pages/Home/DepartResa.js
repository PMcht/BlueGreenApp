import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react'
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { Shadow } from 'react-native-shadow-2';



const slides = [
  {
      id: '1',
      inside: 
      <Text>
         TTT
      </Text>
  },
  {
      id: '2',
      inside: <Text>2</Text>
  },
  {
      id: '3',
      inside: <Text>3</Text>
  },
  {
      id: '4',
      inside: <Text>4</Text>
  }
]


export const DepartResa = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null)
  const {height, width, scale, fontScale} = useWindowDimensions();

  const scrollTo = () => {
    if (currentIndex < slides.length -1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 })
      setCurrentIndex(currentIndex+1)
    } else {
      slidesRef.current.scrollToIndex({ index: 0 })
      setCurrentIndex(0)
    }
  }

  return (
    <View style={{flex: 3, backgroundColor: "#fff"}}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <View style={{width}}>{item.inside}</View>}
        horizontal
        showsHorizontalScrollIndicator = {false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        scrollEventThrottle={32}
        ref={slidesRef}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={scrollTo}>
            <Shadow style={styles.iconShadow}>
              <MaterialCommunityIcons style={styles.icon} name={'chevron-right'} />
            </Shadow>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  next: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "green"
  },
  buttonContainer:{
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 70
  },
  icon:{
    backgroundColor: '#2ba9bc',
    height: 50,
    width: 50,
    padding: 10,
    fontSize: 30,
    borderRadius: 50,
    color: '#fff'
  },
  iconShadow: {
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    width: 50,
  }

})
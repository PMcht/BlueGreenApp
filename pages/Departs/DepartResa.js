import React, { useRef, useState } from 'react'
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'



const slides = [
  {
      id: '1',
      inside: <Text>1</Text>
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

  const scrollX = useRef(new Animated.Value(0)).current;

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
    <View style={{flex: 3}}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <View style={{width}}>{item.inside}</View>}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll= { Animated.event ([{ nativeEvent: {contentOffset: { x: scrollX}} }], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={32}
        ref={slidesRef}
        />

        <TouchableOpacity onPress={scrollTo}>
          <Text>Button</Text>
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
  }

})
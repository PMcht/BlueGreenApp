import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import moment from 'moment'
import { ScrollView } from 'react-native-gesture-handler'
import 'moment/locale/fr';

const Calendar = ({ onSelectDate, selected }) => {
  const [dates, setDates] = useState([])
  const [scrollPosition, setScrollPosition] = useState(0)
  const [currentMonth, setCurrentMonth] = useState()

  moment.locale('fr');

  const getDates = () => {
    const _dates = []
    for (let i = 0; i < 10; i++) {
      const date = moment().add(i, 'days')
      _dates.push(date)
    }
    setDates(_dates)
  }

  useEffect(() => {
    getDates()
  }, [])

  const getCurrentMonth = () => {
    const month = moment(dates[0]).add(scrollPosition / 60, 'days').format('MMMM')
    const monthCap = month.charAt(0).toUpperCase() + month.slice(1)
    setCurrentMonth(monthCap)
  }

  useEffect(() => {
    getCurrentMonth()
  }, [scrollPosition])



  return (
    <>
      <View style={styles.centered}>
        <Text style={styles.title}>{currentMonth}</Text>
      </View>
      <View style={styles.dateSection}>
        <View style={styles.scroll}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={(e) => setScrollPosition(e.nativeEvent.contentOffset.x)}
            scrollEventThrottle={16}
          >
            {dates.map((date, index) => (
              <Date
                key={index}
                date={date}
                onSelectDate={onSelectDate}
                selected={selected}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  )
}

export default Calendar


const Date = ({ date, onSelectDate, selected }) => {
    const day = moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') ? 'Auj.' : moment(date).format('ddd').charAt(0).toUpperCase() + moment(date).format('ddd').slice(1)
    const dayNumber = moment(date).format('DD')
  
    const fullDate = moment(date).format('YYYY-MM-DD')
    return (
      <TouchableOpacity
        onPress={() => onSelectDate(fullDate)}
        style={[styles.card, selected === fullDate && { backgroundColor: "#2ba9bc", height: 90 }]}
      >
        <Text
          style={[styles.big, selected === fullDate && { color: "#fff" }]}
        >
          {day}
        </Text>
        <View style={{ height: 10 }} />
        <Text
          style={[
            styles.medium,
            selected === fullDate && { color: "#fff", fontWeight: 'bold', fontSize: 24 },
          ]}
        >
          {dayNumber}
        </Text>
      </TouchableOpacity>
    )
  }


const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateSection: {
    width: '100%',
    padding: 20,
  },
  card: {
    backgroundColor: '#eee',
    borderRadius: 10,
    borderColor: '#ddd',
    padding: 10,
    alignItems: 'center',
    height: 80,
    width: 80,
    marginHorizontal: 5,
  },
  big: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  medium: {
    fontSize: 16,
  },
})
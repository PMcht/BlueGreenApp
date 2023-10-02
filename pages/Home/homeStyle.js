import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingBottom: 100
    },
    welcome: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      paddingHorizontal: 20
    },
    welcomeMain: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "row"
    },
    weather: {
      fontSize: 14
    },
    pic: {
      height: 14,
      width: 14,
      marginRight: 10
    },
    msg: {
      fontSize: 24,
      fontWeight: "700"
    },
    profilePic: {
      width: 50,
      height: 50,
      borderRadius: 50
    },


    stats: {
      width: '94%',
      marginLeft: "3%",
      height: 80,
      backgroundColor: 'rgba(37, 150, 190, 0.1)',
      marginVertical: 20,
      paddingHorizontal: 5,
      display: "flex",
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 20,
      marginHorizontal: 25
    },
    statistics: {
      width: '30%',
      height: 60,
      padding: 5,
      backgroundColor: '#fff',
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15
    },
    boldStat: {
      fontWeight: '700',
      fontSize: 18
    },


    next: {
      marginTop: 10,
    },
    bold: {
      fontWeight: '700',
      fontSize: 18,
      marginHorizontal: 25
    },
    event: {
      height: 170,
      marginTop: 10,
      position: 'relative',
      borderRadius: 10,
      overflow: "hidden"
    },
    bgEvent: {
      position: "absolute",
      width: "100%",
      height: 200,
    },
    bgLinear: {
      position: "absolute",
      bottom: 0,
      height: '40%',
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: 'space-around',
      flexDirection: 'row'
    },
    boldNext: {
      fontWeight: '700',
      fontSize: 20,
      color: "#fff"
    },
    thinNext: {
      color: "#fff",
      fontStyle: 'italic'
    },
    button:{
      backgroundColor: "#2ba9bc",
      paddingVertical: 5,
      paddingHorizontal: 14,
      fontSize: 16,
      borderRadius: 10,
      color: "#fff"
    },



    book: {
      width: '100%',
      display: "flex",
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'row',
      flexWrap: "wrap",
      columnGap: 30,
      rowGap: 25
    },
    bookingCard:{
      width: 160,
      height: 120,
      borderRadius: 10,
      display: "flex",
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: "#fff"
    },
    Icon:{
      width: 60,
      marginBottom: 10,
      alignSelf: 'center',
      height: 60,
      fontSize: 40,
      borderRadius: 50,
      color: '#2ba9bc',
      padding: 10,
      backgroundColor: '#fbf9fb'
    },
    center:{
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      letterSpacing: 1
    },


    shop: {
      marginTop: 40
    },
    shopping:{
      marginTop: 10,
      width: '100%',
    }
})
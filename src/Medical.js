import React from 'react';
import { StyleSheet, Animated, Text, View,Image, ScrollView, TouchableOpacity } from 'react-native';


const face = require("./assets/face.png");
const med = require("./assets/med.png");
const med1 = require("./assets/new1.png");



const Medical = ({ navigation }) => {
  return (
    <ScrollView>
    <View style={styles.page}>
     
      <Image source={med} 
       style={styles.img}/>

       <TouchableOpacity>
    <View style={styles.e}>
        <Text style={styles.text}>Medical Camps</Text>
    </View>
    </TouchableOpacity>

    <Image source={med1} 
       style={styles.img}/>


   <Text style={styles.t}>Location -</Text>
   <Text style={styles.ts}>Tuticorin & Tirunelveli District</Text>

   <Text style={styles.t}>Supported -</Text>
   <Text style={styles.ts}>Self-funded</Text>
      
   <Text style={styles.t}>Activity -</Text>
   <Text style={styles.ts}>General health , dental and eye camps</Text>
      
   <Text style={styles.t}>Beneficiaries -</Text>
   <Text style={styles.ts}>Over 58,900 rural Community & Schools Students</Text>
      
      
      


      
    </View>
    </ScrollView>
  );
};

export default Medical;


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e7e7e7",
  },
  page:{
    marginRight:34,
    marginBottom:90,
  },
  
  e:{
    height:60,
    width:300,
    backgroundColor:"#03045e",
    marginTop:19,
    borderRadius:20,
    marginLeft:25,
  },
  t:{
    fontSize:18,
    fontWeight:"bold",
    marginLeft:29,
  },
  ts:{
    marginLeft:50,
    fontSize:16,
  },
es:{
  height:60,
  width:300,
  backgroundColor:"#fb8500",
  marginTop:20,
  borderRadius:20,
  marginLeft:25,
  marginBottom:90,


},
  text:{
      color:"white",
      fontSize:20,
      fontWeight:'bold',
      textAlign:'center',
      marginTop:15,
  },
  
  
  v:{
    marginLeft:43,
  },
  img:{
    height:290,
    width:310,
    marginLeft:23,
    marginTop:30,

     flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
  },
  headerSection: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
  menuIconStyle: {
    width: 30,
    height:40,
    marginTop:50,

  },
  faceIconStyle: {
    width: 80,
    height:80,
    marginTop:100,
  },

  titleSection: {
    marginTop: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
  },

  searchSection: {
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "center",
  },
  searchPallet: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    borderRadius: 8,
    width: "100%",
    height: 30,
    backgroundColor: "white",
  },
  searchInput: {
    width: 245,
    height: 30,

    backgroundColor: "white",
  },
  searchIconArea: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  magnifyingIconStyle: {
    width: 24,
    height: 24,
    marginRight: -10,
  },

  typesSection: {
    marginTop: 15,
    flexDirection: "row",
  },
  typesTextActive: {
    fontSize: 15,
    marginRight: 34,
    fontWeight: "bold",
    color: "black",
  },
  typesText: {
    fontSize: 15,
    marginRight: 33,
    fontWeight: "500",
    color: "#696969",
  },

  listSection: {
    marginTop: 25,
  },
  headText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  elementPallet: {
    marginLeft: -15,
    paddingLeft: 15,
    paddingRight: 15,
    width: "110%",
    height: 450,
  },
  element: {
    height: 100,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "row",
    marginBottom: 13,
  },
  infoArea: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 21,
    fontWeight: "bold",
    marginTop:20,
  },
  infoSub: {
    fontSize: 11,
    fontWeight: "600",
    color: "#696969",
  },
  infoPrice: {
    position: "absolute",
    bottom: 0,
    fontSize: 10,
    color: "#696969",
    fontWeight: "bold",
  },
  infoAmount: {
    fontSize: 12,
    color: "black",
    fontWeight: "600",
  },
  imageArea: {
    flex: 1,
  },
  vehicleImage: {
    position: "absolute",
    top: -15,
    left: -15,
    width: "140%",
    height: "140%",
  },
});

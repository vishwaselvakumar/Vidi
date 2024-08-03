import React from 'react';
import { StyleSheet, Animated, Text, View,Image, ScrollView, TouchableOpacity } from 'react-native';


const face = require("./assets/face.png");
const health = require("./assets/farm.png")
const edu = require("./assets/self1.png")



const Nri = ({ navigation }) => {
  return (
    <ScrollView>
    <View  style={styles.o}>
     
      <Image source={health} 
       style={styles.img}/>

       <TouchableOpacity  onPress={() => navigation.navigate('', {}) }>
    <View style={styles.e}>
        <Text style={styles.text}>NRI Homecoming projects</Text>
    </View>
    </TouchableOpacity>


    <Text style={styles.t}>Location -</Text>
   <Text style={styles.ts}>Tuticorin & District</Text>


   <Text style={styles.t}>Sponsored By -</Text>
   <Text style={styles.ts}> NRI Home coming Team US . </Text>
   
   <Text style={styles.t}>Activity -</Text>
   <Text style={styles.ts}> Vilathikulam initiative project that aimed at promoting Community
   development programmes for sustainable development of rural masses , construction
   of common borewells thereby providing drinking water supply etc,
   SHGs and 15 Federations . </Text>
      
   <Text style={styles.t}>Beneficiaries -</Text>
   <Text style={styles.ts}>Over 2500 Rural Community.</Text>



    
    

      
    </View>
    </ScrollView>
  );
};

export default Nri;


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e7e7e7",
  },
  e:{
    height:60,
    width:300,
    backgroundColor:"#03045e",
    marginTop:20,
    borderRadius:20,
    marginLeft:25,
  },
  o:{
    marginRight:50,
    marginBottom:90,
  },
  os:{
    marginBottom:90,
    marginRight:50,
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
  marginBottom:10,


},
  text:{
      color:"white",
      fontSize:20,
      fontWeight:'bold',
      textAlign:'center',
      marginTop:14,
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
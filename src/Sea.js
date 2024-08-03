import React from 'react';
import { StyleSheet,Text, View,Image, ScrollView, TouchableOpacity, Linking,} from 'react-native';



const face = require("./assets/face.png");
const project = require("./assets/project.png");
const tata = require("./assets/vehicles/sea.png");



const Sea = () => {
  return (
    <ScrollView>
    <View >
     
      <Image source={tata} 
       style={styles.img}/>





    <View style={styles.es}>
    <Text style={styles.text} onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/11ljhhu4VR2OaTMvSt-yZNA7u3KZ7Ljzx/view?usp=sharing');
            }}>Documents</Text>
    </View>

    

      
      
      


      
    </View>
    </ScrollView>
  );
};

export default Sea;


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e7e7e7",
  },
  e:{
    height:50,
    width:270,
    backgroundColor:"#8ecae6",
    marginTop:20,
    borderRadius:20,
    marginLeft:40,
  },
es:{
  height:50,
  width:270,
  backgroundColor:"#8ecae6",
  marginTop:20,
  borderRadius:20,
  marginLeft:40,
  marginBottom:90,


},
  text:{
      color:"white",
      fontSize:22,
      fontWeight:'bold',
      textAlign:'center',
      marginTop:10,
  },
  
  
  v:{
    marginLeft:43,
  },
  img:{
    height:238,
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

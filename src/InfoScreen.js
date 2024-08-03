import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import data from "./dataset/vehicles.json";

const back = require("./assets/icons/left-arrow.png");
const dots = require("./assets/icons/dots.png");

const image_v_1 = require("./assets/vehicles/v-1.png");
const image_v_2 = require("./assets/vehicles/v-2.png");


const InfoScreen = ({ route, navigation }) => {
  const vehicle = data.vehicles.filter(
    (element) => element.id == route.params.id
  )[0];
  const getImage = (id) => {
    if (id == 1) return image_v_1;
    if (id == 2) return image_v_2;
    
  };

  return (
   
    <SafeAreaView style={styles.safeArea}>
       <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.9}
          >
            <Image
              source={back}
              resizeMode="contain"
              style={styles.menuIconStyle}
            />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Detail</Text>
          <Image
            source={dots}
            resizeMode="contain"
            style={styles.faceIconStyle}
          />
        </View>

        <View style={styles.imageSection}>
          <Image
            source={getImage(vehicle.id)}
            resizeMode="contain"
            style={styles.vehicleImage}
          />
        </View>

        <View style={styles.headSection}>
          <View style={styles.topTextArea}>
            <Text style={styles.makemodelText}>
              {vehicle.make} {vehicle.model}
            </Text>
            <Text style={styles.price}>
              <Text style={styles.amount}>{vehicle.price_per_day}</Text>
            </Text>
          </View>
          <Text style={styles.typetranText}>
            {vehicle.type}-{vehicle.transmission}
          </Text>
        </View>

        <Text style={styles.descriptionText}>{vehicle.description}</Text>
        <Text style={styles.propertiesText}></Text>

        <View style={styles.propertiesArea}>
          <View style={styles.level}>
            <Text style={styles.propertyText}>
              
              <Text style={styles.valueText}>
                {" "}
                {vehicle.properties.motor_power_hp} 
              </Text>
            </Text>
            <Text style={styles.propertyText}>
              
              <Text style={styles.valueText}>
                {" "}
                {vehicle.properties.engine_capacity_cc} 
              </Text>
            </Text>
          </View>
          <View style={styles.level}>
            <Text style={styles.propertyText}>
            
              <Text style={styles.valueText}>
                {" "}
                {vehicle.properties.fuel_type}
              </Text>
            </Text>

            <Text style={styles.propertyText}>
              
              <Text style={styles.valueText}>
                {" "}
                {vehicle.properties.traction}
              </Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.rentButton1}>
          <Text style={styles.rentButtonText}>Water Shed-1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rentButton2}>
          <Text style={styles.rentButtonText}>Water Shed-2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rentButton3}>
          <Text style={styles.rentButtonText}>Water Shed-3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rentButton4}>
          <Text style={styles.rentButtonText}>Water Shed-4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rentButton5}>
          <Text style={styles.rentButtonText}>Water Shed-5</Text>
        </TouchableOpacity>




      </View>

      
      
      </ScrollView>
    </SafeAreaView>
   
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    paddingRight: 35,
    paddingLeft: 35,
  },
  headerSection: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIconStyle: {
    width: 25,
  },
  HeaderText: {
    fontSize: 20,
    marginLeft: 5,
    fontWeight: "500",
  },
  faceIconStyle: {
    width: 30,
  },

  imageSection: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:20,
  },
  vehicleImage: {
    width: 300,
    height: 300,
    borderRadius:20,
  },

  headSection: {},
  topTextArea: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  makemodelText: {
    fontSize: 20,
    fontWeight: "500",
  },
  price: {
    fontWeight: "400",
  },
  amount: {
    fontWeight: "bold",
  },
  typetranText: {
    marginTop: 1,
    color: "#696969",
    fontWeight: "600",
    fontSize: 12,
  },
  descriptionText: {
    marginTop: 30,
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 18,
    color: "#696969",
    fontWeight: "500",
  },
  propertiesText: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: "500",
  },
  propertiesArea: {
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  level: {
    marginRight: 30,
  },
  propertyText: {
    fontSize: 12,
    color: "#696969",
  },
  valueText: {
    fontSize: 12,
    color: "black",
  },
  rentButton1: {
    marginTop: -60,
    height: 40,
    // padding: 10,
    alignSelf: "center",
    width: 250,
    backgroundColor: "black",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  rentButton2: {
    marginTop: 20,
    height: 40,
    // padding: 10,
    alignSelf: "center",
    width: 250,
    backgroundColor: "black",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  rentButton3: {
    marginTop: 20,
    height: 40,
    // padding: 10,
    alignSelf: "center",
    width: 250,
    backgroundColor: "black",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  
  rentButton4: {
    marginTop: 20,
    height: 40,
    // padding: 10,
    alignSelf: "center",
    width: 250,
    backgroundColor: "black",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  rentButton5: {
    marginTop: 20,
    height: 40,
    marginBottom:90,
    // padding: 10,
    alignSelf: "center",
    width: 250,
    backgroundColor: "black",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  rentButtonText: {
    color: "white",
    fontWeight: "500",
  },
});

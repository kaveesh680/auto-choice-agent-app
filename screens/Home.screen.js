import React,{ useState } from 'react';
import { StyleSheet, Image, View} from 'react-native';
import { Flex, Spacer, Heading, ScrollView } from "native-base";

import  CustomButton  from "../components/CustomButton";
import ClaimTile from "../components/ClaimTile";

import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

    const navigation = useNavigation();

    const [username, setUserName] = useState('Kaveesh'); 
    const [claims, setClaims]  = useState([1,2,3,4,5]);

    const imageCustomer =  require('../assets/agent-blue.png');
    const imageVehicle =  require('../assets/vehicle.png');

    const buttonPress = (nav) => navigation.navigate(`${nav}`)

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Flex direction="row" mb="2.5" mt="12">
          <Heading color="white" fontSize="35"> Hi {username} !</Heading>
          <Spacer />
          <Image source={require('../assets/LOGO-WHITE-CROPPED.png')} style={styles.topImage} />
        </Flex>

        <Flex direction="row" mb="2.5" mt="7"> 
          <CustomButton text1='Register' text2='Customer' image={imageCustomer} buttonPress={()=>buttonPress('Home')}/>
          <Spacer />
          <CustomButton text1='Register' text2='Vehicle' image={imageVehicle} buttonPress={()=>buttonPress('Home')}/>
        </Flex> 
      </View>


      <View style={styles.middleContainer}>

      <ScrollView>
        <View style={{paddingHorizontal:40, paddingVertical:10}}>
          <Heading color="#154897" marginBottom='5' marginTop={5}>ACTIVE CLAIMS</Heading>

          <View>
            <ClaimTile />
           </View>

        </View>
      </ScrollView>
      

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    height:'100%'
  },
  topContainer:{
    backgroundColor: '#154897',
    height:'30%',
    padding:40
  },
  topImage:{
    height:50,
    width:65
  },
  middleContainer:{
    height:'70%'
  }
});

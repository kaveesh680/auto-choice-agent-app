import React,{ useState } from 'react';
import { StyleSheet, Image, View} from 'react-native';
import { Flex, Spacer, Heading, ScrollView } from "native-base";

import  CustomButton  from "../components/CustomButton";
import ClaimTile from "../components/ClaimTile";

export default function HomeScreen({navigation}) {

    const [username, setUserName] = useState('Kaveesh'); 
    const [claims, setClaims]  = useState([
      {"claim_id":'1232232334334343434343434', "customer_name":'Kaveesh Charuka', "date":'2022/10/23', "status":'Active' },
      {"claim_id":'5464354354534543534543543', "customer_name":'Pasan Madushan', "date":'2022/10/23', "status":'Active' },
      {"claim_id":'7898764545465567675677675', "customer_name":'Dineth Madhu', "date":'2022/10/23', "status":'Active' },
      {"claim_id":'1567656455345345765889675', "customer_name":'Lana Rose', "date":'2022/10/23', "status":'Active' },
      {"claim_id":'0978767656454457464646353', "customer_name":'Bla Bla Bla', "date":'2022/10/23', "status":'Active' }
    ]);

    const imageCustomer =  require('../assets/agent-blue.png');
    const imageVehicle =  require('../assets/vehicle.png');

    const buttonPress = (nav) => navigation.navigate(nav);

    const viewClaim =(claim_id)=>{navigation.navigate('View_Claim',{claim_id})}

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Flex direction="row" mb="2.5" mt="12">
          <Heading color="white" fontSize="35"> Hi {username} !</Heading>
          <Spacer />
          <Image source={require('../assets/LOGO-WHITE-CROPPED.png')} style={styles.topImage} />
        </Flex>

        <Flex direction="row" mb="2.5" mt="7"> 
          <CustomButton text1='Register' text2='Customer' image={imageCustomer} buttonPress={()=>buttonPress('New_Customer')}/>
          <Spacer />
          <CustomButton text1='Register' text2='Vehicle' image={imageVehicle} buttonPress={()=>buttonPress('New_Vehicle')}/>
        </Flex> 
      </View>


      <View style={styles.middleContainer}>

      <ScrollView>
        <View style={{paddingHorizontal:40, paddingVertical:10}}>
          <Heading color="#154897" marginBottom='5' marginTop={5}>ACTIVE CLAIMS</Heading>

          <View>

            {
              claims.map((claim)=>(
                <ClaimTile key={claim.claim_id} id={claim.claim_id} name={claim.customer_name} date={claim.date} status={claim.status} viewClaim={()=>viewClaim(claim.claim_id)} />
              ))
            }

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

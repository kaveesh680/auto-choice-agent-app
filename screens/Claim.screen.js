import React,{ useState } from 'react';
import { StyleSheet, View} from 'react-native';
import { Flex, Spacer, Heading, ScrollView} from "native-base";

import ClaimTile from '../components/ClaimTile';


export default function ClaimScreen() {

  const [claims, setClaims]  = useState([
      {"claim_id":'1232232334334343434343434', "customer_name":'Kaveesh Charuka', "date":'2022/10/23', "status":'Active' },
      {"claim_id":'5464354354534543534543543', "customer_name":'Pasan Madushan', "date":'2022/10/23', "status":'Pending' },
      {"claim_id":'7898764545465567675677675', "customer_name":'Dineth Madhu', "date":'2022/10/23', "status":'Active' },
      {"claim_id":'1567656455345345765889675', "customer_name":'Lana Rose', "date":'2022/10/23', "status":'Declined' },
      {"claim_id":'0978767656454457464646353', "customer_name":'Bla Bla Bla', "date":'2022/10/23', "status":'Approved' }
    ]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Heading color="white" marginBottom='5' alignSelf={'center'} marginTop={5}>ALL CLAIMS</Heading>
      </View>

      <View style={styles.middleContainer}>

      <ScrollView>
        <View style={{paddingHorizontal:40, paddingVertical:10}}>

          <View>
             {
              claims.map((claim)=>(
                <ClaimTile key={claim.claim_id} id={claim.claim_id} name={claim.customer_name} date={claim.date} status={claim.status} />
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
    height:'15%',
    paddingTop:50
  },
  topImage:{
    height:50,
    width:65
  },
  middleContainer:{
    paddingTop:20,
    height:'85%'
  }
});


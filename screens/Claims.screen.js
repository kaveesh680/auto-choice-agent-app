import React, {useEffect, useState} from 'react';
import { StyleSheet, View} from 'react-native';
import { Heading, ScrollView } from "native-base";

import ClaimTile from '../components/ClaimTile';
import {getAllClaims} from "../services/service";


export default function ClaimScreen() {

  const [claims, setClaims]  = useState(null);

    useEffect(() => {
        getAllClaims(null).then((response)=>{
            setClaims(response.data.data)
        })
    }, [])
    console.log('blabls', claims);
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
              claims?.map((claim)=>(
                <ClaimTile key={claim.claim_id} id={claim.claim_id} name={claim.first_name + " "+ claim.last_name} date={claim.datetime} status={claim.status} />
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


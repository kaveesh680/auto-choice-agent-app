import React,{ useState } from 'react';
import { StyleSheet, View} from 'react-native';
import { Flex, Spacer, Heading, ScrollView} from "native-base";

import ClaimTile from '../components/ClaimTile';


export default function ClaimScreen() {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Heading color="white" marginBottom='5' alignSelf={'center'} marginTop={5}>ALL CLAIMS</Heading>
      </View>

      <View style={styles.middleContainer}>

      <ScrollView>
        <View style={{paddingHorizontal:40, paddingVertical:10}}>

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
    height:'15%',
    paddingTop:50
  },
  topImage:{
    height:50,
    width:65
  },
  middleContainer:{
    height:'70%'
  }
});


import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Heading} from "native-base";

export default function ProfileScreen() {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Heading color="white" marginBottom='5' alignSelf={'center'} marginTop={5}>Profile</Heading>
      </View>

      <View style={styles.middleContainer}>
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
  middleContainer:{
    height:'70%'
  }
});


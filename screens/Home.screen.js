import React,{ useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, View, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

    const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Image source={require('../assets/LOGO-WHITE-CROPPED.png')} style={styles.topImage} />
       
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
    height:'40%',
    padding:40
  },
  topImage:{
    height:60,
    width:75,
    alignSelf:'center',
    marginTop:'25%'
  },
  garageName:{
    padding:25,
    fontSize:28,
    textAlign:'center',
    color:'white'
  },
  middleContainer:{
    paddingVertical:20,
    paddingHorizontal:40,
    height:'60%'
  }
});

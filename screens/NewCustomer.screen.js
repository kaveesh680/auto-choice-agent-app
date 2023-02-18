import React from 'react';
import { StyleSheet, View, Text} from 'react-native';


export default function NewCustomer() {
  return (
    <View> 
        <Text> New Customer</Text>
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


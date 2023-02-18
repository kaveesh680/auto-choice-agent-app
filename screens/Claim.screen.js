import React,{ useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import { Flex, Spacer, Heading } from "native-base";


export default function ClaimScreen() {

  return (
    <View style={styles.mainContainer}>
        <Text>This is claim screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    height:'100%'
  }});


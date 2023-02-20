import React, {useContext} from 'react';
import { StyleSheet, View} from 'react-native';
import {Button, Heading, Text, useToast} from "native-base";
import {AuthContext} from "../context/AuthContext";

export default function ProfileScreen() {

    const { logout } = useContext(AuthContext);
    const toast = useToast();

    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Heading color="white" marginBottom='5' alignSelf={'center'} marginTop={5}>Profile</Heading>
            </View>
            <View style={styles.middleContainer}>
                <Button success onPress={() => {
                    logout();
                    toast.show({
                        description: 'Successfully Logged Out!'
                    })
                }}>
                    <Text>Logout</Text>
                </Button>
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


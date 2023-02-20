import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Image, View} from 'react-native';
import { Flex, Spacer, Heading, ScrollView } from "native-base";

import  CustomButton  from "../components/CustomButton";
import ClaimTile from "../components/ClaimTile";

import { getAllClaims } from "../services/service";
import {  useIsFocused } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";

export default function HomeScreen({navigation}) {

    const [claims, setClaims]  = useState([]);
    const { userDetails } = useContext(AuthContext);
    const isFocused = useIsFocused();

    const imageCustomer =  require('../assets/agent-blue.png');
    const imageVehicle =  require('../assets/vehicle.png');

    const buttonPress = (nav) => navigation.navigate(nav);

    const viewClaim =(claim_id)=>{navigation.navigate('View_Claim',{claim_id})}

    useEffect(() => {
        getAllClaims('active').then((response)=>{
            setClaims(response?.data?.data)
        })
    }, [isFocused])

    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Flex direction="row" mb="2.5" mt="12">
                    <Heading color="white" fontSize="35"> Hi {userDetails?.first_name} !</Heading>
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
                                claims?.map((claim)=>(
                                    <ClaimTile key={claim.claim_id} id={claim.claim_id} name={claim.first_name+ ' '+claim.last_name} date={claim.datetime.split('T')[0]} status={claim.status} viewClaim={()=>viewClaim(claim.claim_id)} />
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

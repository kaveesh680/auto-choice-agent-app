import React, {useEffect, useState} from 'react';
import { StyleSheet, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Icon, IconButton, ScrollView, Text, Image, TextArea, Button, useToast} from "native-base";
import { Entypo } from "@expo/vector-icons";
import TextHeader from "../components/TextHeader";
import { getClaimDetails, validateClaim } from "../services/service";

export default function ViewClaimScreen({route}) {

    const [claimId] = useState(route.params.claim_id);
    const [claimDetails, setClaimDetails] = useState(null);

    const navigation = useNavigation();
    const damageImageList = [
        'https://wallpaperaccess.com/full/317501.jpg',
        'https://wallpaperaccess.com/full/317501.jpg',
        'https://wallpaperaccess.com/full/317501.jpg',
        'https://wallpaperaccess.com/full/317501.jpg',
        'https://wallpaperaccess.com/full/317501.jpg'
    ];

    const [comment,setComment] = useState('');
    const toast = useToast();
    useEffect(() => {
        getClaimDetails(claimId).then((response)=>{
            setClaimDetails(response.data.data[0]);
        })
    }, [claimId])

    const onSubmit = (status) => {
        const data = {
            claimId,
            comment,
            approve: status
        }
        validateClaim(data);
        navigation.navigate('Home');
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <View style={styles.claimIdBar}>
                    <IconButton
                        icon={
                        <Icon as={Entypo} name="back" color={'white'}/>
                    }
                        borderRadius="full"
                        onPress={()=>navigation.navigate('Home')}
                    />
                    <Text style={styles.claimIdText} fontSize={'3xl'} numberOfLines={1}>{`#${claimId}`}</Text>
                </View>
                <View style={styles.nameBar}>
                    <Text fontSize={'xl'} color={'#154897'}>Customer</Text>
                    <Text fontSize={'3xl'} color={'#154897'}>{claimDetails?.first_name + " " + claimDetails?.last_name}</Text>
                </View>
                <View style={styles.locationAndTimeView}>
                    <View style={styles.dataTimeView}>
                        <Image alt='date-time-image' source={require('../assets/date-time.png')} style={styles.dataTimeImage} />
                        <View style={{display: 'flex', alignSelf: 'center'}}>
                            <Text color='white'>{claimDetails?.datetime.split(" ")[0]}</Text>
                            <Text color='white'>{claimDetails?.datetime.split(" ")[1]}</Text>
                        </View>
                    </View>
                    <View style={styles.dataTimeView}>
                        <Image alt='location-image' source={require('../assets/location.png')} style={styles.dataTimeImage} />
                        <View style={{display: 'flex', alignSelf: 'center'}}>
                            <Text color='white'>Dangedara</Text>
                            <Text color='white'>Galle</Text>
                        </View>
                    </View>
                </View>
            </View>

            <ScrollView style={{margin: 0, padding: 0}}>
                <View style={{paddingHorizontal:30, paddingVertical: 10, marginBottom:40}}>
                    <Text style={{color:'#154897'}} fontSize={'3xl'}>VEHICLE/DAMAGE</Text>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 15
                        }}
                    >
                        <View>
                            <TextHeader text='VEHICLE MODEL'/>
                            <Text
                                fontSize='2xl'
                                color='#154897'
                                style={{marginTop: 5}}
                            >
                                {claimDetails?.model}
                            </Text>
                        </View>
                        <View>
                            <TextHeader text='VEHICLE NUMBER'/>
                            <Text
                                fontSize='2xl'
                                color='#154897'
                                style={{marginTop: 5}}
                            >
                                {claimDetails?.number}
                            </Text>
                        </View>
                    </View>
                    <View style={{marginTop: 10}}>
                        <TextHeader text='NUMBER IMAGE'/>
                        <Image source={{
                            uri: "https://wallpaperaccess.com/full/317501.jpg"
                        }} alt="number-image" size="xl"  style={{marginTop: 15}} />
                    </View>
                    <View style={{marginTop: 10}}>
                        <TextHeader text='DAMAGE IMAGES'/>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection : 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-evenly'
                            }}
                        >
                            {damageImageList.map((image , key) => {
                                return <Image source={{
                                    uri: `${image}`
                                }} alt={`${key}-damage-image`} size="xl"  style={{marginTop: 15}} key={key} />
                            })}
                        </View>
                    </View>
                    <View style={{marginTop: 10}}>
                        <TextHeader text='DESCRIPTION' />
                        <Text>
                            {claimDetails?.description}
                        </Text>
                    </View>
                </View>


                {/* Estimate */}

                <View
                    style={{
                        backgroundColor: '#3774ce',
                        paddingHorizontal:30,
                        paddingVertical: 10,
                        marginBottom:40
                }}
                >

                    <View marginBottom={15}>
                        <Text fontSize={'3xl'} color='white' >ESTIMATION</Text>

                        <View>
                            <TextHeader text='FINAL VALUE'/>
                            <Text
                                fontSize='2xl'
                                color='white'
                                style={{marginTop: 5}}
                            >
                                {claimDetails?.estimate_value + " "}LKR
                            </Text>
                        </View>

                        <View style={{marginTop: 10}}>
                            <TextHeader text='PROOF'/>
                            <Image source={{
                                uri: "https://wallpaperaccess.com/full/317501.jpg"
                            }} alt="number-image" size="xl"  style={{marginTop: 15}} />
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        paddingHorizontal:30,
                        paddingVertical: 10,
                        marginBottom:40
                    }}
                
                >
                      
                    <TextArea 
                        h={20} 
                        placeholder="Comments" 
                        onPress={()=>{}}
                        borderColor={'white'}
                        bgColor={'white'}
                        size={'2xl'}
                        onChangeText={
                            (e)=>{
                                setComment(e);
                            }
                        }
                    />


                    <View style={{display:'flex', flexDirection: 'row', justifyContent:'space-between', marginTop:20}}>
                        <Button 
                            onPress={() => {
                                onSubmit('accepted');
                                toast.show({
                                    description: 'Claim Accepted!'
                                })
                            }}
                            backgroundColor='#3EB134'
                            width={'45%'}   
                        >
                            APPROVE
                        </Button>

                        <Button 
                            onPress={() => {
                                onSubmit('declined');
                                toast.show({
                                    description: 'Claim Declined!'
                                })
                            }}
                            backgroundColor='#CE3760'
                            width={'45%'} 
                        >
                            DECLINE
                        </Button>
                    </View>
                            
                </View>



            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        height:'100%'
    },
    topContainer:{
        backgroundColor: '#154897',
        height:'35%',
        paddingVertical: 40,
        paddingHorizontal: 30,
    },
    claimIdBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5%'
    },
    claimIdText: {
        display: 'flex',
        alignSelf: 'center',
        color: 'white',
        width: 250,
    },
    nameBar: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 20,
        marginTop: 10
    },
    locationAndTimeView: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 30
    },
    dataTimeImage: {
        width: 60,
        height: 60,
        marginRight: 10
    },
    dataTimeView: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center'
    }
});

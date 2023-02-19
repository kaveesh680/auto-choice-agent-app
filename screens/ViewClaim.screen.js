import React,{ useState } from 'react';
import { StyleSheet, View} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {Icon, IconButton, ScrollView, Text, Image, TextArea, Button} from "native-base";
import { Entypo } from "@expo/vector-icons";
import TextHeader from "../components/TextHeader";



export default function ViewClaimScreen() {

    const navigation = useNavigation();
    const claimId = '234234nwern3';
    const damageImageList = [
        'https://wallpaperaccess.com/full/317501.jpg',
        'https://wallpaperaccess.com/full/317501.jpg',
        'https://wallpaperaccess.com/full/317501.jpg',
        'https://wallpaperaccess.com/full/317501.jpg',
        'https://wallpaperaccess.com/full/317501.jpg'
    ];

    const [comment,setComment] = useState('');
    const [status,setStatus] = useState(null);

    const handleStatus = (status)=>{
        setStatus(status)
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
                    <Text style={styles.claimIdText} fontSize={'3xl'}>{`#${claimId}`}</Text>
                </View>
                <View style={styles.nameBar}>
                    <Text fontSize={'xl'} color={'#154897'}>Customer</Text>
                    <Text fontSize={'3xl'} color={'#154897'}>Kaveesh Charuka</Text>
                </View>
                <View style={styles.locationAndTimeView}>
                    <View style={styles.dataTimeView}>
                        <Image alt='date-time-image' source={require('../assets/date-time.png')} style={styles.dataTimeImage} />
                        <View style={{display: 'flex', alignSelf: 'center'}}>
                            <Text color='white'>2022/12/12</Text>
                            <Text color='white'>12.23AM</Text>
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
                                Toyoto Vitz
                            </Text>
                        </View>
                        <View>
                            <TextHeader text='VEHICLE NUMBER'/>
                            <Text
                                fontSize='2xl'
                                color='#154897'
                                style={{marginTop: 5}}
                            >
                                CEB-1233
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                                2500000 LKR 
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

                {/* Approve/ Decline */}

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
                            onPress={() => handleStatus(true)} 
                            backgroundColor='#3EB134'
                            width={'45%'}   
                        >
                            APPROVE
                        </Button>

                        <Button 
                            onPress={() => handleStatus(false)} 
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
        color: 'white'
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

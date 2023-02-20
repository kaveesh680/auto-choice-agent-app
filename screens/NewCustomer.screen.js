import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Heading, Flex, IconButton, Icon, Button, Image, ScrollView, useToast} from "native-base";
import { Entypo } from "@expo/vector-icons";
import FormInput from '../components/FormInput';
import * as ImagePicker from 'expo-image-picker';
import {  registerCustomer} from "../services/service";



export default function NewCustomer({navigation}) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nic, setNic] = useState('');
    const [license, setLicense] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [residence, setRecidence] = useState('');
    const [customerImg, setCustomerImg] = useState(null);
    const [password, setPassword] = useState('');

    //validation
    const [invalidFirstName, setInvalidFirstName] = useState(false);
    const [invalidLastName, setInvalidLastName] = useState(false);
    const [invalidNic, setInvalidNic] = useState(false);
    const [invalidLicense, setInvalidLicense] = useState(false);
    const [invalidAddress, setInvalidAddress] = useState(false);
    const [invalidMobile, setInvalidMobile] = useState(false);
    const [invalidResidence, setInvalidResidence] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState('');

    const toast = useToast();

    const onSubmit = () =>{
        if (firstName == ''){
            setInvalidFirstName(true)
        }
        if (lastName == ''){
            setInvalidLastName(true)
        }
        if (nic == ''){
            setInvalidNic(true)
        }
        if (license == ''){
            setInvalidLicense(true)
        }
        if (address == ''){
            setInvalidLicense(true)
        }
        if (mobile == ''){
            setInvalidMobile(true)
        }
        if (residence == ''){
            setInvalidResidence(true)
        }
        if (password == ''){
            setInvalidPassword(true);
        }
        if (firstName && lastName && nic && license && address && mobile && residence) {
            const data = {
                userName: `${firstName}-${nic}`,
                firstName: firstName,
                lastName: lastName,
                NIC: nic,
                licenseNumber: license,
                address: address,
                mobileNumber: mobile,
                residenceNumber: residence,
                image: customerImg?.base64,
                password: password,
                userType: 'customer'
            }
            registerCustomer(data);
            navigation.navigate('Home')
            toast.show({
                description: 'Successfully Registered the customer!'
            })
        }
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
        });

        if (!result.canceled) {
            setCustomerImg(result.assets[0]);
        }
    };


    return (
        <View style={styles.mainContainer}>

            <View style={styles.topContainer}>
                <Flex direction="row" >
                    <IconButton
                        icon={
                            <Icon as={Entypo} name="back" color={'white'}/>
                        }
                        borderRadius="full"
                        onPress={()=>navigation.navigate('Home')}
                    />
       
                    <Heading color="white" marginBottom='5' alignSelf={'center'} marginTop={5}>Register New Customer</Heading>
                </Flex>
            </View>
            <ScrollView>
                <View style={styles.middleContainer}>

                    <FormInput valid={invalidFirstName} placeholder='First Name' setFunction={(e)=>setFirstName(e)} validationText='Enter first name' />
                    <FormInput valid={invalidLastName} placeholder='Last Name' setFunction={(e)=>setLastName(e)} validationText='Enter Last name' />
                    <FormInput valid={invalidNic} placeholder='National ID Number' setFunction={(e)=>setNic(e)} validationText='Enter NIC Number' />
                    <FormInput valid={invalidLicense} placeholder='License Number' setFunction={(e)=>setLicense(e)} validationText='Enter license number' />
                    <FormInput valid={invalidAddress} placeholder='Address' setFunction={(e)=>setAddress(e)} validationText='Enter address' />
                    <FormInput valid={invalidMobile} placeholder='Phone Number (Mobile)' setFunction={(e)=>setMobile(e)} validationText='Enter Mobile number' />
                    <FormInput valid={invalidResidence} placeholder='Phone Number (Residence)' setFunction={(e)=>setRecidence(e)} validationText='Enter Residence Phone number' />
                    <FormInput valid={invalidPassword} placeholder='Password' setFunction={(e)=>setPassword(e)} validationText='Enter Password' type={'password'} />

                    <IconButton icon={<Icon as={Entypo} size={'2xl'} name="upload" color={'black'}/>} borderRadius="full" onPress={pickImage}/>
                    {customerImg && (
                        <View style={{marginTop: 10, display: 'flex', alignSelf: 'center'}}>
                            <Image source={{
                                uri: `${customerImg?.uri}`
                            }} alt="number-image" size="xl"  style={{marginTop: 15}} />
                        </View>
                    )}
                    <Button small primary mt={4} p={4} bgColor={'#3774CE'} onPress={onSubmit}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </Button>

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
        height:'15%',
        paddingTop:50,
        paddingHorizontal:20
    },
    middleContainer:{
        height:'70%',
        padding:30,
    },
    buttonText:{
        color:'white',
        fontSize:'18'
    }
});


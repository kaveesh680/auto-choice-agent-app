import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
    Heading,
    Flex,
    IconButton,
    Icon,
    Button,
    Select,
    CheckIcon,
    FormControl,
    WarningOutlineIcon,
    Image, useToast
} from "native-base";
import { Entypo } from "@expo/vector-icons";
import FormInput from '../components/FormInput';
import * as ImagePicker from 'expo-image-picker';
import { getAllCustomers, registerVehicle } from "../services/service";



export default function NewVehicle({navigation}) {

    const [model, setModel] = useState('');
    const [numberPlate, setNumberPlate] = useState('');
    const [chassisNumber, setChassisNumber] = useState('');
    const [customer, setCustomer] = useState('');
    const [description, setDescription] = useState('');
    const [vehicleImg, setVehicleImg] = useState(null);
    const [customers, setCustomers] = useState(null);

    //validation
    const [invalidModel, setInvalidModel] = useState(false);
    const [invalidNumberPlate, setInvalidNumberPlate] = useState(false);
    const [invalidChassisNumber, setInvalidChassisNumber] = useState(false);
    const [invalidCustomer, setInvalidCustomer] = useState(false);

    const toast = useToast();

    const onSubmit = () =>{
        if (model == ''){
            setInvalidModel(true)
        }
        if (numberPlate == ''){
            setInvalidNumberPlate(true)
        }
        if (chassisNumber == ''){
            setInvalidChassisNumber(true)
        }
        if (customer == ''){
            setInvalidCustomer(true)
        }
        if (model && numberPlate && chassisNumber && customer && !vehicleImg) {
            toast.show({
                description: 'Please upload the vehicle image!'
            })
        }
        if (model && numberPlate && chassisNumber && customer && vehicleImg) {
            const data = {
                model: model,
                number: numberPlate,
                userId: customer,
                chassisNumber: chassisNumber,
                description: description,
                image: vehicleImg?.base64,
            }
            setModel('');
            setNumberPlate('');
            setCustomer('');
            setChassisNumber('');
            setDescription('');
            setVehicleImg(null);
            registerVehicle(data);
            navigation.navigate('Home')
            toast.show({
                description: 'Successfully Registered the Vehicle!'
            })

        }
    }

    useEffect(() => {
        getAllCustomers().then((response)=>{
            setCustomers(response.data.data);
        })
    }, [])
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
            setVehicleImg(result.assets[0]);
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
       
                    <Heading color="white" marginBottom='5' alignSelf={'center'} marginTop={5}>Register New Vehicle</Heading>
                </Flex>
            </View>

            <View style={styles.middleContainer}>

                <FormInput valid={invalidModel} placeholder='Model' setFunction={(e)=>setModel(e)} validationText='Enter model' />
                <FormInput valid={invalidNumberPlate} placeholder='Number Plate' setFunction={(e)=>setNumberPlate(e)} validationText='Enter Number Plate' />
                <FormInput valid={invalidChassisNumber} placeholder='Chassis Number' setFunction={(e)=>setChassisNumber(e)} validationText='Enter Chassis Number' />
        
                {/* customer select */}
                <FormControl  isInvalid={invalidCustomer} paddingBottom={5}>
                    <Select accessibilityLabel="Select Customer" fontSize={18} placeholder="Select Customer" value={customer} _selectedItem={{
                        bg: "#154897",
                        endIcon: <CheckIcon size={5} />
                    }} mt="1" onValueChange={itemValue => setCustomer(itemValue)}>
                        {
                            customers?.map((customer)=>(
                                <Select.Item key={customer.customer_id} label={customer.user_name} value={customer.customer_id} />
                            ))
                        }
                    </Select>
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        Select a customer!
                    </FormControl.ErrorMessage>
                </FormControl>

                <FormInput placeholder='Description' setFunction={(e)=>setDescription(e)} validationText='Enter Description' />
        
                <IconButton icon={<Icon as={Entypo} size={'2xl'} name="upload" color={'black'}/>} borderRadius="full" onPress={pickImage}/>
                {vehicleImg && (
                    <View style={{marginTop: 10, display: 'flex', alignSelf: 'center'}}>
                        <Image source={{
                            uri: `${vehicleImg?.uri}`
                        }} alt="number-image" size="xl"  style={{marginTop: 15}} />
                    </View>
                )}
                <Button small primary mt={4} p={4} bgColor={'#3774CE'} onPress={onSubmit}>
                    <Text style={styles.buttonText}>REGISTER</Text>
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


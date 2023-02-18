import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Heading, Flex, IconButton, Icon, Button, Select, Box, CheckIcon, FormControl, WarningOutlineIcon } from "native-base";
import { Entypo } from "@expo/vector-icons";
import FormInput from '../components/FormInput';
import * as ImagePicker from 'expo-image-picker';



export default function NewVehicle({navigation}) {

    const [model, setModel] = useState('');
    const [numberPlate, setNumberPlate] = useState('');
    const [chassisNumber, setChassisNumber] = useState('');
    const [customer, setCustomer] = useState('');
    const [description, setDescription] = useState('');
    const [customerImg, setCustomerImg] = useState(null);

    //validation
    const [invalidModel, setInvalidModel] = useState(false);
    const [invalidNumberPlate, setInvalidNumberPlate] = useState(false);
    const [invalidChassisNumber, setInvalidChassisNumber] = useState(false);
    const [invalidCustomer, setInvalidCustomer] = useState(false);

    const customers = [{"id":1, "name":"pasan"},{"id":2, "name":"mad"},{"id":3, "name":"kaveesh"}];

    const onSubmit = () =>{
        console.log(model)
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
        else{
            console.log(customer)
            console.log('Submitted')
        }   
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setCustomerImg(result.assets[0]);
            console.log(result.assets[0]);
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
            <Select accessibilityLabel="Select Customer" fontSize={18} placeholder="Select Customer" value={setCustomer} _selectedItem={{
            bg: "#154897",
            endIcon: <CheckIcon size={5} />
        }} mt="1">
                {
                    customers.map((customer)=>(
                        <Select.Item key={customer.id} label={customer.name} value={customer.name} />
                    ))
                }
            </Select>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Select a customer!
            </FormControl.ErrorMessage>
      </FormControl>

        <FormInput placeholder='Description' setFunction={(e)=>setDescription(e)} validationText='Enter Description' />
        
        <IconButton icon={<Icon as={Entypo} size={'2xl'} name="upload" color={'black'}/>} borderRadius="full" onPress={pickImage}/>

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


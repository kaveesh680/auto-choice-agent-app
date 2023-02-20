import React from 'react';
import { View } from 'react-native';
import { FormControl, Input, WarningOutlineIcon } from "native-base";

const FormInput = (props) =>{
    return (
        <View style={{paddingBottom:15}}>
            <FormControl isInvalid={props.valid}>
              <Input
                  placeholder={props.placeholder}
                  onChangeText={props.setFunction}
                  borderColor={'#3774CE'}
                  size={'xl'}
                  type={`${props.type}`}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {props.validationText}
              </FormControl.ErrorMessage>
            </FormControl>
        </View>
    );
}

export default FormInput;
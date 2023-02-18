import React from 'react';
import { Image, View, Text, TouchableOpacity} from 'react-native';

const CustomButton = (props) =>{
    return (
        <View>
        <TouchableOpacity onPress={props.buttonPress}>
              <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth:1, backgroundColor:'white', borderColor:'white', borderRadius:10, paddingRight:10}}>
                   <Image 
                    source={props.image}
                    style={{ width: 35, height: 35, margin:10 }}
                    /> 

                    <View style={{ flexDirection: 'column', alignItems: 'light' }}>
                      <Text style={{ marginLeft: 1, fontSize: 20, color: '#154897' }}>
                          {props.text1} 
                      </Text>
                       <Text style={{ marginLeft: 1, fontSize: 20, color: '#154897' }}>
                          {props.text2} 
                      </Text>
                  </View>
              </View>
          </TouchableOpacity>

          </View>
    );
}

export default CustomButton;
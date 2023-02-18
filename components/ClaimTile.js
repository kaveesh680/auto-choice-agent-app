import React from 'react';
import { Image, View, Text, TouchableOpacity} from 'react-native';
import { Badge, Spacer } from 'native-base';


const ClaimTile = (props) =>{
    return (
        <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth:1, backgroundColor:'#3774CE', borderColor:'#3774CE', borderRadius:10, padding:15, marginBottom:15}}>
                    <View style={{ flexDirection: 'column', alignItems: 'light' }}>
                      <Text style={{ marginLeft: 1, fontSize: 15, color: 'white', fontWeight:'600', marginBottom:3 }}>
                         #84237493274324
                      </Text>
                       <Text style={{ marginLeft: 1, fontSize: 25, color: 'white', marginBottom:7 }}>
                          Kaveesh Charuka
                      </Text>
                      <Text style={{ marginLeft: 1, fontSize: 15, color: 'white', fontWeight:'600' }}>
                          2022/10/23
                      </Text>
                  </View>

                  <Spacer />

                  <View style={{alignSelf:'flex-start'}}>
                    <Badge>ACTIVE</Badge>
                  </View>
              </View>
          </TouchableOpacity>
    );
}

export default ClaimTile;
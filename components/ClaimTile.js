import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Badge, Spacer } from 'native-base';


const ClaimTile = (props) =>{
    return (
        <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth:1, backgroundColor:'#3774CE', borderColor:'#3774CE', borderRadius:10, padding:15, marginBottom:15}}>
                    <View style={{ flexDirection: 'column', alignItems: 'light' }}>
                      <Text style={{ marginLeft: 1, fontSize: 15, color: 'white', fontWeight:'600', marginBottom:3, width:150 }} numberOfLines={1}>
                         #{props.id}
                      </Text>
                       <Text style={{ marginLeft: 1, fontSize: 25, color: 'white', marginBottom:7 }}>
                          {props.name}
                      </Text>
                      <Text style={{ marginLeft: 1, fontSize: 15, color: 'white', fontWeight:'600' }}>
                          {props.date}
                      </Text>
                  </View>

                  <Spacer />

                  <View style={{alignSelf:'flex-start'}}>
                    <Badge>{props.status}</Badge>
                  </View>
              </View>
          </TouchableOpacity>
    );
}

export default ClaimTile;
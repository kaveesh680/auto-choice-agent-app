import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NewCustomer from './NewCustomer.screen';
import HomeScreen from './Home.screen';
import NewVehicle from './NewVehicle';
import ViewClaim from './ViewClaim.screen';

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
 return (
   <HomeStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen}  />             
    <HomeStack.Screen name="New_Customer" component={NewCustomer} />
    <HomeStack.Screen name="New_Vehicle" component={NewVehicle} />
    <HomeStack.Screen name="View_Claim" component={ViewClaim} />
   </HomeStack.Navigator>
  );
}
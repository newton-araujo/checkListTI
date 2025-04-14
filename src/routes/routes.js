import React, {useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Start from '../screens/start'
import Login from '../screens/login'
import Home from '../screens/home'

export default function Routes() {

    const Stack = createNativeStackNavigator()


    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName='Start'>

                <Stack.Screen name='Start' component={ Start } options={{headerShown:false}}/>
                <Stack.Screen name='Login' component={ Login } options={{headerShown:false}}/>
                <Stack.Screen name='Home' component={ Home } options={{headerShown:false}}/>
                
            </Stack.Navigator>

        </NavigationContainer>
    )
}

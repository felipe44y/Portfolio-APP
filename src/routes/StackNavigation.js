import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Pages/Home'
import Habilidades from '../Pages/Habilidades'

const stack = createNativeStackNavigator();

export default function StackNavigation(){
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
                <stack.Screen name='Habilidades' component={Habilidades} options={{headerShown:false}}/>
            </stack.Navigator>
        </NavigationContainer>
    );
}

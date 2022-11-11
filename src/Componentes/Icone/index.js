import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable'

export default function Icone({ texto , nameImage, corImage, animationIcon }){
    return(
        <Animatable.View 
            style={styles.conteaner}
            animation='bounceInUp'
            useNativeDriver={true}
            duration={ animationIcon }    
        >
            <MaterialCommunityIcons 
                name={ nameImage } 
                size={50} 
                color={ corImage } 
            />
            <Text style={{color: '#fff', fontWeight:'bold', fontSize:20}}>{texto}</Text>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    conteaner:{
        width:'90%',
        height:'20%',
        backgroundColor:'#1C1C1C',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth: 0.5,
        borderColor:'grey',
        borderRadius: 2,
        padding: 5
    }
})
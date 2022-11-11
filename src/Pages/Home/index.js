import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import Contats from '../../Componentes/Contats';
import ViewButtons from '../../Componentes/ViewButtons';
import Button from '../../Componentes/Button';

import * as Animatable from 'react-native-animatable'

export default function Home({ navigation }){
    return(
        <View style={styles.conteaner}>
            <Animatable.Text 
                style={styles.name}
                animation='fadeIn'
                useNativeDriver={true}
                duration={3000}
                iterationCount='infinite'
            >
                {'<Felipe/>'}
            </Animatable.Text>
            <ViewButtons/>
            <Contats/>
            <Button navigation={ navigation }/>
        </View>
    )
}
const styles = StyleSheet.create({
    conteaner:{
        flex: 1,
        backgroundColor:'#1C1C1C',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    name:{
        fontSize:35,
        fontWeight:'bold',
        color:'#8A2BE2',
        marginTop:'5%',
    },
})
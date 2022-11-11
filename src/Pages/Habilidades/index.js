import React from 'react';
import {View, StyleSheet,Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Icone from '../../Componentes/Icone';


export default function Home({ navigation }){
    return(
        <View style={styles.conteaner}>

            <View  style={styles.goback}>
                <MaterialIcons
                    onPress={()=> navigation.goBack()}
                    color='#8A2BE2'
                    size={30}
                    name='arrow-back-ios'
                    />
            </View>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
                <View 
                    style={{
                        borderBottomWidth: 2, 
                        width:'20%',
                        borderBottomColor:'#A9A9A9',
                    }}
                />
                    <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>Tecnologias</Text>
                <View 
                    style={{
                        borderBottomWidth: 2, 
                        width:'20%',
                        borderBottomColor:'#A9A9A9',
                    }}
                />
            </View>
            <View style={styles.iconView}>
                <Icone texto='Javascript' nameImage='language-javascript' corImage='#FFFF00' animationIcon={1000}/>
                <Icone texto='Html5' nameImage='language-html5' corImage='#FF4500' animationIcon={2000}/>
                <Icone texto='CSS3' nameImage='language-css3' corImage='#1E90FF' animationIcon={3000}/>
                <Icone texto='React' nameImage='react' corImage='#00BFFF' animationIcon={4000}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conteaner:{
        flex:1,
        backgroundColor:'#1C1C1C',
        paddingTop: 40,
        padding: 20,
        flexDirection:'column',
        justifyContent:'space-between'
    },
    goback:{
        flexDirection:'row',
    },
    iconView:{
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:'#363636',
        borderRadius: 5
    }
})
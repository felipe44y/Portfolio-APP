import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Foundation, MaterialIcons, EvilIcons } from '@expo/vector-icons';
import { normalize } from '../../util/textResponsive';

export default function Contats(){
    return(
        <View style={styles.conteaner}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={{backgroundColor:'#1C1C1C', width:40, height: 40, justifyContent:'center', alignItems:'center', borderRadius: 6, marginTop: 6}}>
                    <Foundation 
                        name='telephone'
                        size={35} 
                        color='#DB7093' 
                    />
                </View>
                <View style={{marginLeft:15}}>
                    <Text style={{fontSize:normalize(12), fontWeight:'bold', color:'#fff'}}>Telefone</Text>
                    <Text style={{fontSize:normalize(15), color:'#fff', fontWeight:'bold'}}>(88)99999-9999</Text>
                </View>
            </View>
            <View 
                style={{
                    borderBottomWidth: 0.5, 
                    height: 5,
                    borderBottomColor:'#A9A9A9',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            />

            <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={{backgroundColor:'#1C1C1C', width:40, height: 40, justifyContent:'center', alignItems:'center', borderRadius: 6, marginTop: 6}}>
                    <MaterialIcons 
                        name='email'
                        size={33} 
                        color='#9370DB' 
                    />
                </View>
                <View style={{marginLeft:15}}>
                    <Text style={{fontSize:normalize(13), fontWeight:'bold', color:'#fff'}}>E-mail</Text>
                    <Text style={{fontSize:normalize(12), color:'#fff', fontWeight:'bold'}}>Felipelipim44@gmail.com</Text>
                </View>
            </View>

            <View 
                style={{
                    borderBottomWidth: 0.5, 
                    height: 5,
                    borderBottomColor:'#A9A9A9',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            />
            
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={{backgroundColor:'#1C1C1C', width:40, height: 40, justifyContent:'center', alignItems:'center', borderRadius: 6, marginTop: 6}}>
                    <EvilIcons 
                        name='location'
                        size={35} 
                        color='#836FFF' 
                    />
                </View>
                <View style={{marginLeft:15}}>
                    <Text style={{fontSize:normalize(12), fontWeight:'bold', color:'#fff'}}>Localização</Text>
                    <Text style={{fontSize:normalize(15), color:'#fff', fontWeight:'bold'}}>Palhano-CE</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    conteaner:{
        width:'80%',
        height:'40%',
        borderRadius: 5,
        backgroundColor:'#363636',
        padding:20,
        justifyContent:'space-evenly',
    },
})
import React from 'react';
import { Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Button({ navigation }){
    return(
        <TouchableOpacity 
            style={styles.conteaner}
            onPress={()=> navigation.navigate('Habilidades')}
        >
            <Text style={{color:'#fff', fontWeight:'bold'}}>About me</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    conteaner:{
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        height:'8%',
        backgroundColor:'#8A2BE2',
        borderRadius: 10,
    }
})
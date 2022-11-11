import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text , Linking} from 'react-native'
import { AntDesign } from '@expo/vector-icons';


export default function ViewButtons(){
    return(
        <View style={styles.conteaner}>
            <View style={styles.conteanerIcons}>
                <View>
                    <TouchableOpacity style={styles.buttonIcons}
                        onPress={()=> Linking.openURL('https://www.linkedin.com/in/felipe-silva-508777190/')}
                    >
                        <AntDesign 
                            name='linkedin-square' 
                            size={30} 
                            color= '#fff' 
                        />
                    </TouchableOpacity>
                </View>
                
                <View>
                    <TouchableOpacity style={styles.buttonIcons}
                        onPress={()=> Linking.openURL('https://github.com/felipe44y')}
                    >
                        <AntDesign 
                            name='github' 
                            size={30} 
                            color='#fff' 
                        />
                    </TouchableOpacity>
                </View>
                
                <View>
                    <TouchableOpacity style={styles.buttonIcons}
                        onPress={()=> Linking.openURL('https://www.instagram.com/_lipim_44/')}
                    >
                        <AntDesign 
                            name='instagram' 
                            size={30} 
                            color='#fff' 
                        />
                    </TouchableOpacity>
                </View>
            </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color:'#fff', fontWeight:'bold'}}>Curriculo</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    conteaner:{
        backgroundColor:'#363636',
        height:'25%',
        width:'80%',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        width:'60%',
        height:'30%',
        backgroundColor:'#8A2BE2',
        borderRadius: 10,
    },
    conteanerIcons:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        width: '80%'
    },
    buttonIcons:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1C1C1C',
        width:50,
        height:50,
        borderRadius: 5,
    },
})
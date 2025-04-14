import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style'
import * as Animatable from 'react-native-animatable'


export default function Start({navigation}) {
    return (
        <View style={styles.containerMain}>

        
            <Animatable.View style={styles.containerContentImage} animation="bounceIn" duration={2200}>
                <Image source={require("../../../assets/logo.png")}/>
            </Animatable.View>
            
            <Animatable.View style={styles.containerContentText} animation={"slideInUp"} duration={2000}>

        
                <Text style={styles.textContent}>Bem vindo, vamos iniciar o check list?</Text>
                
                <TouchableOpacity style={styles.btnGo} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textBtn}>Vamos Lá</Text>
                </TouchableOpacity>

            </Animatable.View>
    
            <StatusBar style="light"/>
        </View>
    )
}   
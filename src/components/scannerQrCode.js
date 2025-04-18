import { Camera, useCameraPermissions, CameraView } from "expo-camera";
import React, { useEffect, useState, useRef } from "react";
import {StyleSheet, Text, View, Button, Modal, Alert, TouchableOpacity} from 'react-native'


export default function HandleCam(){

    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [ permission, requestPermission ] = useCameraPermissions()

    const qrCodeLock = useRef(false)

    async function hadleOpenCamera() {
        
        try {

            const { granted } = await requestPermission()

            if(!granted) {
                Alert.alert("Você precisa permitir acesso a camera")
            }
            setModalIsVisible(true)
            qrCodeLock.current = false

        } catch (error) {
            console.log(error)
        }
    }

    function qrCodeRead(data) {
        Alert.alert(data)
        setModalIsVisible(false)
    }

    return (
        <View style={styles.containerMain}>
            

            <TouchableOpacity onPress={hadleOpenCamera} style={styles.btnQrCode}>
                <Text style={styles.textContQrCode}>
                    Ler QrCode
                </Text>
            </TouchableOpacity>
        
            
            <Modal visible={modalIsVisible} style={{flex:1}}>

                <CameraView 
                    facing="back" 
                    style={{flex:1}}
                    onBarcodeScanned={({data}) => {

                        if(data && !qrCodeLock.current){
                            qrCodeLock.current = true
                            setTimeout(() => qrCodeRead(data), 1000)
                        } 
                    }}    
                />

                <View style={styles.footer}>

                    <TouchableOpacity 
                        onPress={() => setModalIsVisible(false)}
                        style={styles.btnCancel}    
                    > 
                        <Text style={styles.contentBtnCancel}>X</Text>

                    </TouchableOpacity>

                </View>

            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        position:"absolute",
        bottom:80,
        right:32,
        left:32,
        alignItems:"center"
    },  

    btnCancel:{
        backgroundColor:"#f45",
        width:60,
        height: 60,
        borderRadius:"50%",
        justifyContent:"center",
        alignItems:"center"
    },

    contentBtnCancel:{
        fontSize:25,
        fontWeight:"bold",
        color:"#fff"
    },
    btnQrCode:{
        backgroundColor:"#04ff",
        padding:10,
        borderRadius:10,
    },
    containerMain:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
    },

    textContQrCode:{
        fontSize:20,
        color:"#fff"
    }
})





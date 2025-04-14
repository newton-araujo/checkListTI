import React, {useEffect,useState}from 'react'
import {View, Text} from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Main(props){

    return(
        <> 
            <View style={styles.contentTitle}>
                <Text style={styles.greeting}>Bom Plantão, {props.user}</Text>
                <Text style={styles.textAlert}>Documente os problemas encontrados.</Text>
            </View>

            <View style={styles.contentInfor}>
                <View style={styles.contentIcon}>
                    <Icon name='server' size={60} color={"#fff"}/>
                    <View style={styles.descText}>
                        <Text style={styles.title}>Salas Racks</Text>
                        <Text style={styles.contentText}>sala de rack limpa, organizada, com Wi-Fi estável e ar-condicionado no ponto!</Text>
                    </View>
                </View>

                <View style={styles.contentIcon}>
                    <Icon name='building'size={60} color={"#fff"}/>
                    <View style={styles.descText}>
                        <Text style={styles.title}>Paineis e Totens</Text>
                        <Text style={styles.contentText}>painéis e totens reiniciados e prontos antes do início das atividades do hospital!</Text>
                    </View>
                </View>

                <View style={styles.contentIcon}>
                    <Icon name='snowflake'size={60} color={"#fff"}/>
                    <View style={styles.descText}>
                        <Text style={styles.title}>Data Center</Text>
                        <Text style={styles.contentText}>data center limpo, clima abaixo de 16,5 °C e links voando sem parar!</Text>
                    </View>
                </View>

                <Text style={styles.titleMain}>Importante</Text>


                <View style={styles.contentQrcode}>
                    <Icon name='qrcode'size={60} color={"#fff"}/>
                    <View style={styles.descText}>
                        <Text style={styles.title}>QrCode</Text>
                        <Text style={styles.contentText}>Todos os locais do checklist contarão com um QR Code próprio para cada ambiente. Ao finalizar o checklist, é necessário escanear o QR Code correspondente.</Text>
                    </View>
                </View>


            </View>
        </>


    )
}


    
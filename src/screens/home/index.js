import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import Main from '../main';
import DataCenter from '../datacenter';



export default function Home({ route }) {

  {/*const { userLogged } = route.params;*/}

  const [activeTab, setActiveTab] = useState("main")
  const renderTab = () => {

    switch (activeTab) {
        case "main":
            return <Main user={'Newton'}/>
        case "dc":
            return <DataCenter />
        default:
            break;
    }

  }
  return (
    <View style={styles.container}>
        <StatusBar style="dark"/>
            
            

        <ScrollView style={styles.contentMain}>

            { renderTab() }

        </ScrollView>

        <View style={styles.BtnManeger}>

            <TouchableOpacity onPress={() => setActiveTab("main")}>
                <Icon name='home' size={30} color={"#323139"}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Icon name='server' size={30} color={"#323139"}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Icon name='building' size={30} color={"#323139"}/>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => setActiveTab("dc")}>
                <Icon name='snowflake' size={30} color={"#323139"}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Icon name='user' size={30} color={"#323139"}/>
            </TouchableOpacity>

        </View>

    </View>
  );
}



  
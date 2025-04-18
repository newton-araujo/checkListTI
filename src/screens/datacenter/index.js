import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Switch, ScrollView, TouchableOpacity, Modal, Button, Alert} from 'react-native';
import { Camera, useCameraPermissions, CameraView } from "expo-camera";
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HandleCam from '../../components/scannerQrCode';



export default function DataCenter() {
    const [ar01, setAr01] = useState('');
    const [arBkp, setBkp] = useState('');
    const [observation, setObservation] = useState('');

    const itens = ["Ar-Condicionado", "Luz e Energia", "Organização", "Limpeza", "Wi-Fi"];
    const [checkedItens, setCheckItens] = useState(Array(itens.length).fill(false));

    const itensDc = ["Core1", "Core2", "Link1", "Link2", "Link3"];
    const [checkedItensDc, setCheckedItensDc] = useState(Array(itensDc.length).fill(false));

    const toggleCheckbox = (index) => {
        const updated = [...checkedItens];
        updated[index] = !updated[index];
        setCheckItens(updated);
    };

    const toggleCheckDc = (i) => {
        const updated = [...checkedItensDc];
        updated[i] = !updated[i];
        setCheckedItensDc(updated);
    };

    const allChecked = checkedItens.every(item => item);
    const allCheckedDc = checkedItensDc.every(i => i);


    return (
        <ScrollView style={styles.containerMain}>
            <StatusBar style='dark' />

            {/* Title */}
            <View style={styles.contentTitle}>
                <Icon name="snowflake" color={"#323139"} size={100} />
                <Text style={styles.title}>DataCenter</Text>
            </View>

            {/* Air information */}
            <View style={styles.contentFormAr}>
                <Text style={styles.titleAr}>Temperatura:</Text>
                <View style={styles.inputsAr}>
                    <View style={styles.contentInput}>
                        <Text style={styles.labelAr}>AR-01</Text>
                        <TextInput
                            placeholder='AR-01'
                            style={styles.inputText}
                            keyboardType='numeric'
                            value={ar01}
                            onChangeText={setAr01} // Controlando o estado
                        />
                    </View>

                    <View style={styles.contentInput}>
                        <Text style={styles.labelAr}>AR-BKP</Text>
                        <TextInput
                            placeholder='AR-BKP'
                            style={styles.inputText}
                            keyboardType='numeric'
                            value={arBkp}
                            onChangeText={setBkp} // Controlando o estado
                        />
                    </View>
                </View>
                <View style={styles.descriptionAr}>
                    <Text style={{ color: "#fff" }}>* Se a temperatura estiver acima de 17 °C, abrir uma Ordem de Serviço (OS) e informar a equipe de manutenção.</Text>
                </View>
            </View>

            {/* Checkboxes */}
            <View>
                <Text style={styles.titleCheck}>- Limpeza e iluminação -</Text>
                <View style={styles.containerCheckBox}>
                    {itens.map((item, index) => (
                        <View key={index} style={styles.chkBox}>
                            <Text style={styles.labelCheck}>{item}</Text>
                            <Switch
                                value={checkedItens[index]}
                                onValueChange={() => toggleCheckbox(index)}
                            />
                        </View>
                    ))}
                    <Text style={{ color: allChecked ? "#04ff86" : "#f45", paddingTop: 10 }}>
                        {allChecked ? "✅ Todos os itens checados!" : ""}
                    </Text>
                </View>

                <Text style={styles.titleCheck}>- Switch Core e Links -</Text>
                <View style={styles.containerCheckBox}>
                    {itensDc.map((item, index) => (
                        <View key={index} style={styles.chkBox}>
                            <Text style={styles.labelCheck}>{item}</Text>
                            <Switch
                                value={checkedItensDc[index]}
                                onValueChange={() => toggleCheckDc(index)}
                            />
                        </View>
                    ))}
                    <Text style={{ color: allCheckedDc ? "#04ff86" : "#f45", paddingTop: 10 }}>
                        {allCheckedDc ? "✅ Todos os itens checados!" : ""}
                    </Text>
                </View>
            </View>

            {/* Observações */}
            <View>
                <Text style={styles.titleCheck}>- Observações -</Text>
                <View style={styles.contentObs}>
                    <TextInput
                        placeholder='obs.:'
                        onChangeText={setObservation}
                        value={observation}
                        style={styles.observation}
                        multiline={true}
                        numberOfLines={4}
                    />
                </View>
            </View>

            {/* QR Code Scanner */}
            
            <View style={styles.cotentCam}>
                <HandleCam />        
            </View>


        </ScrollView>
    );
}

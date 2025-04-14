import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {View, Text, TextInput, Vibration, ScrollView, Switch} from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome5';




export default function DataCenter() {

    const [ar01, setAr01] = useState('')
    const [arBkp, setBkp] = useState('')
    const [observation, setObservation] = useState('')

    {/* Variables CheckBox*/}

    const itens = ["Ar-Condicionado","Luz e Energia","Organização","Limpeza","Wi-Fi"]
    const [checkedItens, setCheckItens] = useState(Array(itens.length).fill(false));

    const itensDc = ["Core1","Core2","Link1","Link2","Link3"]
    const [checkedItensDc, setCheckedItensDc] = useState(Array(itens.length).fill(false))

    const toggleCheckbox = (index) =>{
      const updated = [...checkedItens];
      updated[index] = !updated[index]
    
      setCheckItens(updated);
    }

    const toggleCheckDc = (i) => {
      const updated = [...checkedItensDc]
      updated[i] = !updated[i]

      setCheckedItensDc(updated);
    }

    const allChecked = checkedItens.every(item => item);
    const allCheckedDc = checkedItensDc.every(i => i)

    return (

      <ScrollView style= {styles.containerMain}>
        <StatusBar style='dark'/>
        
        {/* Title */}
        <View style={styles.contentTitle}>

          <Icon name="snowflake" color={"#323139"} size={100}/>
          <Text style={styles.title}>DataCenter</Text>

        </View>

        {/* Air information */}
        <View style={styles.contentFormAr}>
            <View>
                <Text style={styles.titleAr}>Temperatura:</Text>
            </View>
            <View style={styles.inputsAr}>

              <View style={styles.contentInput}>
                  <Text style={styles.labelAr}>AR-01</Text>
                  <TextInput 
                      placeholder='AR-01'
                      style={styles.inputText}
                      keyboardType='numeric'
                    />
              </View>


              <View style={styles.contentInput}>
                  <Text style={styles.labelAr}>AR-BKP</Text>
                  <TextInput 
                      placeholder='AR-BKP'
                      style={styles.inputText}
                      keyboardType='numeric'
                    />
              </View>

            </View>

            <View style={styles.descriptionAr}>
              <Text style={{color:"#fff"}}>* Se a temperatura estiver acima de 17 °C, abrir uma Ordem de Serviço (OS) e informar a equipe de manutenção.</Text>
            </View>
        </View>
        
        {/*Check Box*/}

        <View>

          <View>
            <Text style={styles.titleCheck}>- Limpeza e iluminação -</Text>
          </View>

          <View style={styles.containerCheckBox}>
            {
              itens.map((item, index) => (
                <View key={index} style={styles.chkBox}>
                  
                  <Text style={styles.labelCheck}>{item}</Text>
                  <Switch 
                    value={checkedItens[index]}
                    onValueChange={() => toggleCheckbox(index)}
                  />
                
                </View>
              ))
              
            }
            <Text style={{color: allChecked ? "#04ff86":"#f45", paddingTop:10}}>
              {allChecked ? "✅ Todos os itens checados!" : ""}
            </Text>
          </View>

          <View>
            <Text style={styles.titleCheck}>- Switch Core e Links -</Text>
          </View>

          <View style={styles.containerCheckBox}>
            {
              itensDc.map((item, index) => (
                <View key={index} style={styles.chkBox}>
                  
                  <Text style={styles.labelCheck}>{item}</Text>
                  <Switch 
                    value={checkedItensDc[index]}
                    onValueChange={() => toggleCheckDc(index)}
                  />
                
                </View>
              ))
              
            }
            <Text style={{color: allCheckedDc ? "#04ff86":"#f45", paddingTop:10}}>
              {allCheckedDc ? "✅ Todos os itens checados!" : ""}
            </Text>
          </View>

        </View>

        <View>
            <Text style={styles.titleCheck}>- Observações -</Text>
          
            <View style={styles.contentObs}>
                <TextInput 
                placeholder='obs.:' 
                onChangeText={setObservation}
                value={ observation }
                style={styles.observation}  
                multiline={true}
                numberOfLines={4}          
              />
            </View>
           
        </View>

        <View style={styles.btns}>
            
            

        </View>
          
        


      </ScrollView>
    )
}
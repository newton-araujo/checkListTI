import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Platform} from 'react-native'
import styles from './style'
import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ErroInput from '../../components/erroInputs'


export default function Login({navigation}) {

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [erroInput, setErroInput] = useState(false)
    const [msgError, setMsgError] = useState('')

    {/* Validation */}
    const validInputs = () =>{
        if(user === '' || pass  === '') {
            setErroInput(true)
            setMsgError('Preencha todos os campos')

        } 

        if (user == 'admin' && pass == '1234') {
            navigation.navigate("Home", {userLogged:user})
            setPass("")
            setUser("")
        }
    
    }

    return (
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
        {/* close keboard */}
            <KeyboardAvoidingView style={styles.containerMain}>

                <StatusBar style="dark" />

                <View style={styles.containerSup}>

                   {/* back to start */}
                    <TouchableOpacity style={styles.btnBack} onPress={()=>navigation.navigate("Start")}>
                        <Icon name="arrow-left" size={30} color="#333" solid />
                    </TouchableOpacity>
                    <Text style={styles.contentText}>Login</Text>
                </View>

                {/* container form (User and Pass) */}
                <View style={styles.containerForm}>
                
                    <TextInput 
                        placeholder='Usuário' 
                        style={styles.input}
                        value={user}
                        onChangeText={setUser}
                    />

                    <View style={styles.showPass}>
                        <TextInput 
                            placeholder='Senha' 
                            style={styles.inputPass} 
                            secureTextEntry={!showPassword}
                            value={pass}
                            onChangeText={setPass}
                            />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword )}>
                            <Icon name={showPassword ? "eye" : "eye-slash"} size={20}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.signIn} onPress={() => validInputs()}>
                        <Text style={styles.txtBtn}>Acessar</Text>
                    </TouchableOpacity>

                    {/*Component ErroInput with param msgError */}
                    {erroInput ? <ErroInput msgErr={msgError}/> : ''}
                    
                </View>
            </KeyboardAvoidingView>


        </TouchableWithoutFeedback>
 
    )
}

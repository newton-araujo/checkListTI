import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


{/* This components is from page LOGIN.*/}
export default function ErroInput(props){

    return (
        <View>
            <Text style={styles.contentText}>{props.msgErr}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contentText: {
        color:"#f45",
        fontWeight:"bold"
    }
});


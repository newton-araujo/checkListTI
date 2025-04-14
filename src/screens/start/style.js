import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerMain : {
        backgroundColor:"#323139",
        width:"100%",
        height:"100%"
    },

    containerContentImage:{
        width:"100%",
        height:"50%",
        marginTop:31,
        alignItems:"center",
        justifyContent:"center"
    },

    containerContentText: {
        width:"100%",
        height:"50%",
        backgroundColor:"#04ff86",
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        justifyContent:"center",
        alignItems:"center"
    },

    textContent:{
        fontSize:30,
        fontWeight:"bold",
        padding:10,
        color:"#323139",
        width:300,
    },

    btnGo:{
        backgroundColor:"#323139",
        width: 140,
        padding:10,
        borderRadius:20,
        marginTop:20
    },

    textBtn:{
        fontSize:20,
        fontWeight:"bold",
        color:"#fff",
        textAlign:"center"
    }

})


export default styles
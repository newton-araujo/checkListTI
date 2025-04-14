import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    
  
  contentTitle: {
        width: "100%",
        height:170,
        padding:20,
        backgroundColor:"#04ff86",
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        justifyContent:"center",
        gap:5
      },
    
    greeting: {
        fontSize:30,
        fontWeight:"bold"
      },
    
    textAlert: {
        color:"#323139"
      },

    titleMain:{
      color:"#323139",
      fontSize:30,
      fontWeight:"bold",
      textAlign:"center",
      borderWidth:1,
      padding:5,
      borderRadius:15,
      backgroundColor:"#04ff86",
      marginTop:10
    }, 

    contentInfor: {
      padding:20,
      justifyContent:"space-around",
      flex:1,
      gap:20,
    },

    contentIcon:{
      flexDirection:"row",
      alignItems:"center",
      gap:20
    },

    title: {
      color:"#fff",
      fontSize:20,
      fontWeight:"bold",
      padding:5
    },

    contentText: {
      width:260,
      color:"#fff",
      padding:5
    },
    

    //QrCode

    contentQrcode: {
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-around",
    }

})

export default styles
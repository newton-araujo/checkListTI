import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  containerMain:{
    width: "100%",
    height: "100%",
    backgroundColor:"#04ff86"
  },

  containerSup :{
    width: "100%",
    height:"40%",
    backgroundColor:"#fff",
    borderEndStartRadius:60,
    paddingTop:80,
    paddingLeft:30,
    gap:90
  },

  contentText:{
    fontSize:50,
    fontWeight:"bold"
  },

  containerForm:{
    width:"100%",
    height:"45%",
    justifyContent:"center",
    alignItems:"center",
    gap:20
  },

  input:{
    borderBottomWidth:2,
    width:220,
    borderEndColor:"#32313999",
    fontSize:17,
    fontWeight:"bold",
    paddingBottom:14
  },
  signIn:{
    backgroundColor:"#323139",
    padding:10,
    width:220,
    borderRadius:10
  },

  txtBtn:{
    fontSize:17,
    fontWeight:"bold",
    color:"#fff",
    textAlign:"center"
  },
  inputPass:{

    fontSize:17,
    fontWeight:"bold"
  },
  showPass:{
    width:220,
    borderBottomWidth:2,
    paddingBottom:14,
    borderEndColor:"#32313999",
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row"
  }

})


export default styles

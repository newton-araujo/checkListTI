import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  containerMain:{
    flex:1,
  },

  contentTitle: {
    height:170,
    flexDirection:"row",
    backgroundColor:"#04ff86",
    alignItems:"center",
    paddingTop:20,
    paddingLeft:30,
    gap:20
  },

  title:{
    fontSize:40,
  },

  //Form 
  contentFormAr:{
    padding:20,
    height:200,
    justifyContent:"center",
    gap:10
  },

  titleAr:{
    color:"#fff",
    fontSize:17,
    fontWeight:"bold"
  },

  inputsAr:{
    gap:10
  },

  inputText:{
    backgroundColor:"#ffffff",
    width:120,
    padding:8,
    color:"#323139",
    fontWeight:"bold",
    borderRadius:10,
  },

  contentInput:{
    flexDirection:"row",
    alignItems:"center",
    gap:20
  },

  labelAr:{
    color:"#ffff",
    width:60,
    fontWeight:"bold"
  },

  // Check Box

  titleCheck:{
    fontSize:20,
    color:"#323138",
    fontWeight:"bold",
    backgroundColor:"#04ff86",
    textAlign:"center",
    padding:10
  },

  containerCheckBox: {
    height:150,
    flexWrap:"wrap",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    paddingTop:10
  },

  chkBox:{
    padding:10,
    flexDirection:"row",
    padding:10,
    gap:5,
    alignItems:"center",
  },

  labelCheck:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:11
  },

  observation: {
    width: 350,
    height:100,
    backgroundColor:"#fff",
    padding:5,
    borderRadius:10,
    fontSize:17,
    fontWeight:"bold"
  },

  contentObs:{
    alignItems:"center",
    paddingTop:10,
    paddingBottom:10,
  },

  //BtnQrCode
  btns:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    height:100
  },

  btnQrCode:{
    padding:15,
    backgroundColor:"#04ff",
    borderRadius:10,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:10
  },

  contentBtn:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:17
  },

  cotentCam:{
    height:80
  }


})

export default styles

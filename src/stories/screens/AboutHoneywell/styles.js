import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    flexDirection: 'column',
  },
  navigateToWelcomeView: {
  },
  onClickWelcome: {
    flexDirection: 'row',
  },
  imageBack:
  {
    marginLeft: 20,
    marginTop: 20
  },
  welcomeLink:
  {
    height: 20,
    width: 67,
      color: "#1792E5",
        fontFamily: "Honeywell Sans TT",
          fontSize: 16,
            fontWeight: "500",
              letterSpacing: -0.38,
              	lineHeight: 20,
    marginLeft: 2,
    marginTop: 27
  },
  scroll: {
    padding: 20
  },
  aboutHeader: {
    height: 26,
    width: 229,
      color: "#FFFFFF",
        fontFamily: "Honeywell Sans TT",
          fontSize: 22,
            fontWeight: "bold",
            	lineHeight: 26
  },
  aboutContent: {
    height: 141,
    width: 335,
    color: "#FFFFFF",
      fontFamily: "Honeywell Sans TT",
      fontSize: 16,
        fontWeight: "300",
        	lineHeight: 20,
    marginTop: 20
  },
  accessManual:{
    height: 18,
    width: 147,
      color: "#1792E5",
        fontFamily: "Honeywell Sans TT",
        fontSize: 15,
          fontWeight: "500",
            letterSpacing: -0.36,
            	lineHeight: 18,
    marginTop: 5
  },
  feedback:{
    height: 23,
    width: 166,
    color: "#FFFFFF",
      fontFamily: "Honeywell Sans TT",
      fontSize: 14,
        fontWeight: "500",
        	lineHeight: 17,
    marginTop: 15,
    
  },
  feedbackTxtArea: {
    height: 150,
    backgroundColor: '#F5FCFF',
  },
  feedbackText: {
    textAlignVertical: 'top',  // hack android
    fontSize: 14,
    color: '#333',
  },
  nameTxtArea: {
    height: 50,
    backgroundColor: '#F5FCFF',
  },
  submitClick:{
    backgroundColor: "#1792E5",
    padding: 16,
    marginTop: 30,
  },
  submitText:
  {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
  },
  contactUs:
  {
    color: "#A0A0A0",
    textDecorationLine: "underline",
    padding:20,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500'
  }

});

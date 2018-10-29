import { StyleSheet } from "react-native";

const styles: any = StyleSheet.create({
    background: {
        backgroundColor: "#303030",
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image2: {
        width: 27,
        height: 27,
        // padding: 5,
        // top: 5,
        // marginLeft: 20
    },
    pickerView:{ borderBottomWidth: 1, flex: 1, marginHorizontal: 10 },
    pickerText:{ fontSize: 18, marginTop: 15 ,fontFamily:"Honeywell Sans TT"},
    pickerColor:{ color: '#C4C4C4' },
    prevSelectionData:{ fontSize: 16, color: '#919191', marginBottom: 1 ,fontFamily:"Honeywell Sans TT",fontWeight:"300"},
    mainContainer:{ flex: 1, /* marginHorizontal: 10, marginBottom:10, */ backgroundColor: 'white', },
    titleView:{ flexDirection: 'row', height: 50, alignItems: 'center',marginLeft:10, marginRight:10 },
    partNumberView:{ flex: 1, flexGrow: 2, marginLeft: 10 },
    partNumberText:{ height:21,fontSize: 18, color: '#000', fontWeight: "500",	letterSpacing: -0.43,	lineHeight: 21},
    clearView:{ flex: 1 },
    clearText:{ textAlign: 'right', height:15,color: '#1792E5' ,fontFamily:"Honeywell Sans TT Bold",fontSize:12,lineHeight:15},
    partView:{ flex: 1, elevation: 7, marginBottom: 20, backgroundColor: '#ddd',marginLeft:10, marginRight:10, borderWidth: 1, borderColor: '#ddd' },
    partInnerView:{ height: 50, backgroundColor: '#C84E55', justifyContent: 'center', paddingLeft: 10 },
    partText:{ fontSize: 14,height:22,fontWeight:"bold", color: '#fff', fontFamily:"Honeywell Sans TT Bold",lineHeight:22},
    mostOuterFilterView:{ backgroundColor: '#EBEBEB', paddingHorizontal: 10, height: 60 },
    outerFilterView:{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft:-10 },
    innerFilterView:{ flex: 1, flexGrow:9,position:'relative' },
    hintIcon:{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
    previousContainer:{ marginVertical: 15 },
    prevLabel:{ fontSize: 16, color: '#000', marginBottom: 15,fontFamily:"Honeywell Sans TT" },
    dropDownView:{ backgroundColor: '#fff', flex: 3,zIndex:-1 },
    submitButton: {
        height:60,
		backgroundColor: '#1792E5',
		alignItems: 'center',
        justifyContent: 'center',
	  },
	  submitText: { 
		color: '#fff',
        fontSize:18,
        fontWeight:'500',
        fontFamily:"Honeywell Sans TT"
	 },
    inputBox: {
        alignSelf: 'stretch',
        color: '#000',
        fontFamily:"Honeywell Sans TT",
        fontSize: 16,
        elevation: 2,
        backgroundColor: '#fff',
        marginVertical: 10,
        marginLeft: 10,
        paddingLeft:5,
        height: 40
        
    },
    rowViewContainer: {
		fontSize: 16,
        color:"#fff",
        fontFamily:"Honeywell Sans TT",
        paddingTop:10,
		justifyContent: "center",
		alignItems:"center",
		textAlign:'center',
		fontWeight:"bold"
    },
    searchResultStyle: {
        marginTop: 5,
        backgroundColor:'#555',
        zIndex:1,
        left:0,
        right:0,
        height: '100%',
        elevation:6,
        // position:'absolute',
        // top:60,
		// alignSelf: 'stretch',
    },
    searchResultCellStyle:{
        height: 45,
        justifyContent: "center",
        alignItems:'flex-start'
    },
    searchResultCellTextStyle: {
        marginHorizontal: 10,
        fontFamily:'Honeywell Sans TT', 
        fontSize:16,
        color:'black',
    },
    next:
    {
        fontSize: 16,
        fontWeight:"500",
        lineHeight:20,
        height:20,
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center'
    },
    nextBtnViewCss:
    {
        margin: 10,
        // marginLeft: 10,
        // marginRight:10, 
        height: 50, 
        backgroundColor: '#00bfff', 
        justifyContent: 'center', 
        alignItems: 'center',
        // position: 'absolute',
        // bottom: 10
        
    },
    home:
    {
        fontSize: 17,
        left: 15,
        fontWeight:"500",
        height:21,
        fontFamily:"Honeywell Sans TT",
        color: 'white',
        letterSpacing: -0.41,
        lineHeight:21
    },
    info:
    {
        // width: 30,
        // height: 30,
    // marginTop: 22,
        left: 6,
    // marginRight:50

    }
});
export default styles;

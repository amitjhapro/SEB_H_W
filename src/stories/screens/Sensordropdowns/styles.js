import { StyleSheet } from "react-native";

const styles: any = StyleSheet.create({
    pickerView:{ flex: 1, marginHorizontal: 10 },
    pickerText:{ fontSize: 18, marginTop: 15 ,fontFamily:"Honeywell Sans TT"},
    pickerColor:{ color: '#C4C4C4' },
    prevSelectionData:{ fontSize: 16, color: '#919191', marginBottom: 10 ,fontFamily:"Honeywell Sans TT"},
    mainContainer:{ flex: 1, marginHorizontal: 10, marginBottom:10 },
    titleView:{ flexDirection: 'row', height: 50, alignItems: 'center' },
    partNumberView:{ flex: 1, flexGrow: 2, marginLeft: 10 },
    partNumberText:{ fontSize: 20, color: '#000',fontFamily:"Honeywell Sans TT" },
    clearView:{ flex: 1 },
    clearText:{ textAlign: 'right', color: '#1792E5' },
    partView:{ flex: 1, elevation: 5, marginBottom: 10, backgroundColor: '#ddd' },
    partInnerView:{ height: 50, backgroundColor: '#C84E55', justifyContent: 'center', paddingLeft: 10 },
    partText:{ fontSize: 16, color: '#fff', fontWeight: '600', fontFamily:"Honeywell Sans TT"},
    mostOuterFilterView:{ backgroundColor: '#EBEBEB', paddingHorizontal: 10 },
    outerFilterView:{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    innerFilterView:{ flex: 1, flexGrow: 9,position:'relative' },
    hintIcon:{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
    previousContainer:{ marginVertical: 15 },
    prevLabel:{ fontSize: 16, color: '#000', marginBottom: 15,fontFamily:"Honeywell Sans TT" },
    dropDownView:{ backgroundColor: '#fff', flex: 3,zIndex:-1, paddingTop: 5 },
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
        fontSize: 14,
        fontFamily:"Honeywell Sans TT",
        elevation: 2,
        backgroundColor: '#fff',
        marginVertical: 10
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
    listViewbox: {
        marginTop: 5,
        backgroundColor:'#555',
        zIndex:1,
        left:0,
        right:0,
        elevation:6,
        position:'absolute',
        top:60,
		alignSelf: 'center',
	},
});
export default styles;

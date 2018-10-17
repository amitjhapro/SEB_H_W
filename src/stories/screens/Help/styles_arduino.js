import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container:{
    backgroundColor: "#f6f6f6",
    flex: 1,
   
  },
 background: {
        backgroundColor: "#303030",
        padding: 15,
       // height:64,
        width:375

    },
    home: {
        fontSize: 17,
        right: 2,
        color: 'white',
       left: 20,
       top:3
        //letterSpacing:-0.41
    },
      image2: {
        width: 13,
        height: 19,
        //left: 2,
        top: 6,
       marginLeft: 10
    },
    help:
    {
        color:'black',
        fontSize:18,
        fontWeight:"500",
        marginLeft:20,
        top:20,
        letterSpacing:-0.43,
        lineHeight:21,
       height:60
    },
    division:
    {
       
       borderTopWidth:0.2,
       
       // borderLeftWidth:1,
       // borderRightWidth:1,
        marginLeft:10,
       
        borderTopColor:'grey',
        borderLeftColor:'grey',
        borderRightColor:'grey',
        backgroundColor:'white',
        padding:30,
        marginRight:10,
      flexDirection:'row'
    
    },
    division2:
    {
        flexDirection:'row',
        borderTopWidth:0.2,
         marginLeft:10,
        borderBottomWidth:0.2,
       borderBottomColor:'grey',
        borderTopColor:'grey',
        borderLeftColor:'grey',
        borderRightColor:'grey',
        backgroundColor:'white',
        padding:30,
        marginRight:10,
//         	shadowOffset:{  width: 10,  height: 10,  },
// shadowColor: 'black',
// shadowOpacity: 2.0,
//   shadowRadius:2,
 // elevation: 2
       
    },
card:
{
   
    marginLeft:10,
    marginRight:10
},
 cardheader:
    {
        backgroundColor:"#B5131C",
        height:30
    },
    faq:
    {
        fontSize:14,
        color:'white'
    },
    image:
    {
        right:17
    },
    text:
    {
        top:5,
        fontSize:16,
        fontWeight:"300"
    },
    stepnum:
    {
    fontSize:14,
    fontWeight:"300"
    },
sebimage:
{
    top:10,
    bottom:10,
    marginLeft:15
},
 steps:
    {
    fontSize:14,
    fontWeight:"300",
    marginLeft:15
    },
 
});
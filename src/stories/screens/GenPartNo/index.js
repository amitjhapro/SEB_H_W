import * as React from "react";
//import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
//import { Text, View, TouchableOpacity, ScrollView, Button, Image, Picker, Select, options } from 'react-native'
import styles from "./styles";
import Textarea from 'react-native-textarea';
import SmartPicker from 'react-native-smart-picker'
import Sensordropdowns from '../Sensordropdowns';
import {
  StyleSheet,Image,
  Text,
  TextInput,
  ListView,
  View,Icon,
  TouchableOpacity, StatusBar, ScrollView, Picker
} from 'react-native';
class GenPartNo extends React.Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
        dataSource: ds.cloneWithRows(partnumbers),
        sensor: '',
        prevSelectionArr:[]
    }
}

/** By using react navigation header created */
static navigationOptions = () => ({
    title: 'Sensor Selection',
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#303030'
    },
    headerLeft: <Icon name={'ios-arrow-back'} style={{ marginLeft: 10 }} color={'#fff'} size={25} />
});

/** This function used to filter the partnumber data on searching using textbox */
SearchFilterFunction(text){
const newData = partnumbers.filter(function(item){
  const itemData = item.name.toUpperCase()
  const textData = text
  if(item.partnumber.indexOf(textData) > -1){
    return itemData;
  }
})

this.setState({
  dataSource: this.state.dataSource.cloneWithRows(newData), // Filtered datas are setting to the state
        isModalVisible: (newData!='' && text!='') ? 1 : 0, // this state to toggle the search result container
        text:text // value of text entered stored in this state
})

}

/** This function is used to rest all the data */
clear() {
    this.setState({
        sensor:'',
        prevSelectionArr:[]
    })
}
  
/** This Function updates the previous selection container */
  GetListViewItem (cName) {
  this.state.prevSelectionArr.push(cName);
  let uniqueArr = [...new Set(this.state.prevSelectionArr)]; // removing duplicate partnumber
  this.setState({
      isModalVisible : 0,
      prevSelectionArr:uniqueArr,
      text:''
  })
 }  

 //This function returns the previous selection Content
 getPreviousData(){
     return(
         this.state.prevSelectionArr.map((data,value)=>{
             return(
                <Text key={value} style={styles.prevSelectionData}>{data}</Text>
             )
         })
     )
 }

 updateSensor = (sensor) => {
    this.setState({ sensor: sensor }) //Updating the selected value in picker dropdown
}

render() {
  return (


     
    <View style={styles.mainContainer}> 
         <View style={styles.background} flexDirection='row'>
				<TouchableOpacity onPress={() =>
							this.props.navigation.navigate("Sebboard"/* , {name: { item }} */ )}>
					<Image source={require('../../../assets/leftarrow.png')} style={styles.image2} />
				</TouchableOpacity>
				<Text style={styles.home} onPress={() =>
							this.props.navigation.navigate("Sebboard"/* , {name: { item }} */ )}>Sensor Selection</Text>
			</View>
{/*     <StatusBar
                    barStyle="light-content"
                    backgroundColor="#000"
                /> */}

                <View style={styles.titleView}>
                    <View style={styles.partNumberView}>
                        <Text style={styles.partNumberText}>Generate Part Number</Text>
                    </View>
                    <View style={styles.clearView}>
                        <Text onPress={() => this.clear()} style={styles.clearText}>Clear All</Text>
                    </View>
                </View>

                <View style={styles.partView}>
                    <View style={styles.partInnerView}>
                        <Text style={styles.partText}>Part Number</Text>
                    </View>

                    <View style={styles.mostOuterFilterView}>
                        <View flexDirection='row' style={styles.outerFilterView}>
                            <View style={styles.innerFilterView}>
                                <TextInput onChangeText={(text) => this.SearchFilterFunction(text)} placeholder="Type Part Number" style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' value={this.state.text} />
                                {
                                    this.state.isModalVisible ? 
                                    <ListView
                                    dataSource={this.state.dataSource}
                                    renderSeparator= {this.ListViewItemSeparator}
                                    renderRow={
                                        (rowData) => 
                                        <Text style={styles.rowViewContainer} 
                                        onPress = {this.GetListViewItem.bind(this,rowData.name)}>{rowData.name}</Text>
                                    }
                                    style={styles.listViewbox}
                                    />
                                    :
                                    null
                                } 
                            </View>
                            <View>
            <Image source={require('../../../assets/info.png')} style={styles.info} />
          </View>

                        </View>



                    </View>

                    <Sensordropdowns sensor={this.state.sensor} updateSensor={this.updateSensor}/>

                </View>
                <TouchableOpacity style={styles.nextBtnViewCss}
					onPress={() =>
						this.props.navigation.navigate("Sebdevice"/* , {name: { item }} */)}>
					<Text style={styles.next} >Go</Text>
				</TouchableOpacity>


</View>
  );
}
}
const partnumbers = [
    {"partnumber":"101","name":"Sensor 1"},
    {"partnumber":"102","name":"Sensor 2"},
    {"partnumber":"103","name":"Sensor 3"},
    {"partnumber":"104","name":"Sensor 4"},
    {"partnumber":"105","name":"Sensor 5"},
    {"partnumber":"106","name":"Sensor 6"},
    {"partnumber":"107","name":"Sensor 7"},
    {"partnumber":"108","name":"Sensor 8"},
    {"partnumber":"109","name":"Sensor 9"},
    {"partnumber":"110","name":"Sensor 10"}
  ]

export default GenPartNo;

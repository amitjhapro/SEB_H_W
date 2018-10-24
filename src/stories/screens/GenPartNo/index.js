import * as React from "react";
//import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import { connect } from 'react-redux';
import styles from "./styles";
import Textarea from 'react-native-textarea';
import SmartPicker from 'react-native-smart-picker'
import Sensordropdowns from '../Sensordropdowns';
import * as sensorData from "../data.json";
import {
  StyleSheet,Image,
  Text,
  TextInput,
  ListView,
  View,Icon,
  TouchableOpacity, StatusBar, ScrollView, Picker, Alert
} from 'react-native';
import globalStyles from "../../../globalStyles";

class GenPartNo extends React.Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
    
    // creating a mapping for dropdown lists for checking if any of the dropdown values is set
    const {selectedSensorBoardID, selectedSensorSeriesID} = this.props.navigation.state.params
    const mappedOptions = sensorData.SensorTypes[selectedSensorBoardID].series[selectedSensorSeriesID].parts.map((data, index) => {
        return [data.name,null] // initially no values are selected so by default all are set to 'null' 
    });
    
    this.state = {
        dataSource: ds.cloneWithRows(partnumbers),
        sensor: '',
        text:'',
        optionMapping: mappedOptions,
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

/** This function is used to reset all the data */
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

clearPartNumberTextInput = () => {
    const {selectedSensorBoardID, selectedSensorSeriesID} = this.props.navigation.state.params
    const mappedOptions = sensorData.SensorTypes[selectedSensorBoardID].series[selectedSensorSeriesID].parts.map((data, index) => {
        return [data.name,null]
    });
    this.setState({text:'',optionMapping:mappedOptions})
};

generatePartNumber = (value, index, data) => {
    
    this.setState({
        optionMapping: this.updateMappedOptions(value,index,data)
    },()=>{
        // if(this.state.text == ''){
        //     this.setState({text:value})
        // }else{
        //     this.setState({text:this.state.text+"-"+value})
        // }
        let temp = ""
        this.state.optionMapping.forEach(element => {
            if(element[1] != null){
                temp+= element[1];
            }
            
        });
        this.setState({text:temp})
    })
    
    // const { label,optionIndex } = data // data holds dropdown label and its index position when rendered
    // Alert.alert(
    //     `Index-${index} -- Value-${value} -- Label ${label} -- optionIndex ${optionIndex}`
    // )
}

updateMappedOptions = (value, index, data) => {
    let options = this.state.optionMapping
    const { label,optionIndex } = data 
    
    // update the local mapping when dropdown is selected
    options[optionIndex] = [label,value]
    return options
}

shouldResetDropdownSelections = () => {
    return this.state.text == ''? true : false
}

goToGraph = () => {
    return this.state.optionMapping.some((element,index) => {
        if(element[1] === null){
            Alert.alert(
                'Invalid Part #',
                'Please ensure you have entered all the options'
              )
        }
        return element[1] === null
    });
}

renderSensorConfigurationSection = () => {
    if(true){
        return
    }
    return(
        <View style={styles.partView}>
            <View style={styles.partInnerView}>
                <Text style={styles.partText}>Sensor Configuration</Text>
            </View>

            {/* PARTS DROPDOWN LISTING */}
            <Sensordropdowns 
                sensor={this.state.sensor} 
                updateSensor={this.updateSensor} 
                selectedSensorData={this.props.navigation.state.params} 
                generatePartNumberCallback={this.generatePartNumber} 
                resetSelection={this.shouldResetDropdownSelections()}
            />
        </View>
    );
}

render() {
  return (
    <View style={globalStyles.backgroundStyles}> 
         {/* NAVIGATION BAR */}
         <View style={styles.background}>
            <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate("Sebboard"/* , {name: { item }} */ )}>
                <Image source={require('../../../assets/leftarrow.png')} style={styles.image2} />
            </TouchableOpacity>
            <Text style={styles.home} onPress={() =>
                        this.props.navigation.navigate("Sebboard"/* , {name: { item }} */ )}>Sensor Selection</Text>
        </View>
        {/* <StatusBar
            barStyle="light-content"
            backgroundColor="#000"
        />  */}

        {/* LABEL WITH CLEAR TEXT BUTTON */}
        <ScrollView>
        <View style={styles.titleView}>
            <View style={styles.partNumberView}>
                <Text style={styles.partNumberText}>Generate Part Number</Text>
            </View>
            <View style={styles.clearView}>
                <TouchableOpacity onPress={this.clearPartNumberTextInput}>
                    <Text style={styles.clearText}>Clear All</Text>
                </TouchableOpacity>
            </View>
        </View>
        
        {/* PARTS NUMBER GENERATOR TEXTFIELD */}
        <View style={styles.partView}>
            <View style={styles.partInnerView}>
                <Text style={styles.partText}>Part Number</Text>
            </View>
            <View style={styles.mostOuterFilterView}>
                <View flexDirection='row' style={styles.outerFilterView}>
                    <View style={styles.innerFilterView}>
                        <TextInput 
                        onChangeText={(text) => this.SearchFilterFunction(text)} 
                        placeholder="Type Part Number" 
                        style={styles.inputBox} 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        value={this.state.text} 
                        />
                        {
                            this.state.isModalVisible ? 
                            <ListView
                            dataSource={this.state.dataSource}
                            renderSeparator= {this.ListViewItemSeparator}
                            renderRow={
                                (rowData) => 
                                <Text 
                                style={styles.rowViewContainer} 
                                onPress = {this.GetListViewItem.bind(this,rowData.name)}
                                >
                                    {rowData.name}
                                </Text>
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

            {/* PARTS DROPDOWN LISTING */}
            <Sensordropdowns 
                sensor={this.state.sensor} 
                updateSensor={this.updateSensor} 
                selectedSensorData={this.props.navigation.state.params} 
                generatePartNumberCallback={this.generatePartNumber} 
                resetSelection={this.shouldResetDropdownSelections()}
            />
            
        </View>
        {this.renderSensorConfigurationSection()}
        </ScrollView>
        {/* GO BUTTON */}
        <TouchableOpacity style={styles.nextBtnViewCss}
            // onPress={() => this.props.navigation.navigate("Sebdevice"/* , {name: { item }} */)}>
            onPress={ this.goToGraph }>
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


const mapStateToProps = ({ genPartNoReducer }) => {
    return {
        optionMapping: genPartNoReducer.optionMapping
      }
}
export default connect(mapStateToProps)(GenPartNo);

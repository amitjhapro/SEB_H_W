import React, { Component } from 'react';
/** Importing required components */
import {
    StyleSheet,
    Text,
    View,
    ScrollView, Picker
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import * as sensorData from "../data.json";
import styles from './styles';
// import * as sensorData from './sensorData.json';
export default class Sensordropdowns extends Component {
    /** Default state values are initialised in constructor */
    jsonData = sensorData
    constructor(props) {
        super(props)
        
    }

    onChangeText = (value, index, data)=>{
        // 'data' holds lable and dropdown index as well to pass back to GenPartNo
        this.props.generatePartNumberCallback(value,index,{label: data[0].optionLabel, optionIndex:data[0].optionIndex})
    }

    shouldResetSelection = (data) => {
        if(!this.props.resetSelection){
            return
        }
        // if(data.options.length==1){
        //     return data.options[0].name
        // }else{
            return "Select "+data.description.split(" ").splice(-1)
        // }
        
    }

    /** This function returns the set of dropdowns extracted from data.json file */
    getPickerData = () => {
        const { selectedSensorBoardID,selectedSensorSeriesID  } = this.props.selectedSensorData
        return (
          <View style={{ flex: 1 }}>
              {
                this.jsonData.SensorTypes[selectedSensorBoardID].series[selectedSensorSeriesID].parts.map((data, index) => {                  
                  return (
                      <View key={index} style={styles.pickerView}>
                          {/* <Text style={styles.pickerText}>{data.name}</Text> */}
                          {/* <Picker style={styles.pickerColor} selectedValue={this.props.sensor} onValueChange={this.props.updateSensor} >
                              <Picker.Item  label={"Select "+data.description.split(" ").splice(-1)} value={0} /> 
                              {
                                data.options.map((optiondata, optionvalue) => {
                                  return (
                                      <Picker.Item key={optionvalue} label={optiondata.description} value={optiondata.id} />
                                  )
                                })
                              }
                          </Picker> */}
                          <Dropdown
                            // ref={this.codeRef}
                            // value={"Select "+data.description.split(" ").splice(-1)}
                            value={this.shouldResetSelection(data)}
                            onChangeText={this.onChangeText}
                            label={data.description}
                            baseColor={'black'}
                            textColor={'gray'}
                            labelFontSize={22}                            
                            fontSize={18}
                            titleTextStyle={{marginVertical:50}}
                            itemPadding={10}
                            labelPadding={10}
                            data={data.options.map((optiondata, optionIndex) => {
                              return (
                                { value: optiondata.name, label: optiondata.description , optionLabel: data.name, optionIndex:index } // holding label and dropdown index value as well
                              )
                            })}
                            // propsExtractor={({ props }, index) => props}
                          />
                      </View>
                  )                              
                })
              }
          </View>
      )
    }

    render() {
        return (
            <View style={styles.dropDownView}>
                {this.getPickerData()}
            </View>
        );
    }
}
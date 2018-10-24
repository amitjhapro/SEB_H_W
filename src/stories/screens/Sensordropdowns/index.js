import React, { Component } from 'react';
/** Importing required components */
import {
    StyleSheet,
    Text,
    View,
    ScrollView, Picker
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
//import jsonData from "../data.json";
import styles from './styles';
import * as sensorData from './sensorData.json';
export default class Sensordropdowns extends Component {
    /** Default state values are initialised in constructor */
    jsonData = sensorData
    constructor(props) {
        super(props)
       // this.setState.jsonData= this.
        
    }

    /** This function returns the set of dropdowns extracted from data.json file */
    getPickerData = () => {
        return (
          <View style={{ flex: 1 }}>
              {
                this.jsonData.SensorTypes[0].series[0].parts.map((data, value) => {                  
                  return (
                      <View key={value} style={styles.pickerView}>
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
                            value={"Select "+data.description.split(" ").splice(-1)}
                            // onChangeText={this.onChangeText}
                            label={data.name}
                            baseColor={'black'}
                            textColor={'gray'}
                            labelFontSize={22}                            
                            fontSize={18}
                            titleTextStyle={{marginVertical:50}}
                            itemPadding={10}
                            labelPadding={10}
                            data={data.options.map((optiondata, optionvalue) => {
                              return (
                                { value: optiondata.id, label: optiondata.description }
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
            <ScrollView style={styles.dropDownView}>
                {this.getPickerData()}
            </ScrollView>
        );
    }
}
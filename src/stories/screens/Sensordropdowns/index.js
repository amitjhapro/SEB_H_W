import React, { Component } from 'react';
/** Importing required components */
import {
    StyleSheet,
    Text,
    View,
    ScrollView, Picker
} from 'react-native';
//import jsonData from "../data.json";
import styles from './styles';
export default class Sensordropdowns extends Component {
    /** Default state values are initialised in constructor */
     jsonData = {
        "SensorTypes": [
          {
            "name": "Magnetics",
            "id": 3,
            "series": [
       
              {
                "name": "MagneticsSeries",
                "code": "",
                "id": 1,
                "description": "Magnetics Series",
                "parts": [
                  {
                    "name": "MagneticsSeries",
                    "description": "Magnetics Series",
                    "partPosition": 0,
                    "options": [
                      {
                        "id": 1,
                        "name": "SS",
                        "description": "Commercial Solid State"
                      },
                      {
                        "id": 2,
                        "name": "VF",
                        "description": "Vehicle Solid State"
                      },
                      {
                        "id": 3,
                        "name": "SL",
                        "description": "Solid State Low Gauss"
                      },
                      {
                        "id": 4,
                        "name": "SM",
                        "description": "Solid State Magnetoresistive"
                      },
                      {
                        "id": 5,
                        "name": "VM",
                        "description": "Vehicle Magnetoresistive"
                      },
                      {
                        "id": 6,
                        "name": "SG",
                        "description": "Solid State Gear Tooth"
                      },
                      {
                        "id": 7,
                        "name": "VG",
                        "description": "Vehicle Solid State Gear Tooth"
                      },
                      {
                        "id": 8,
                        "name": "SR",
                        "description": "Customised or Overmoulded first level products"
                      }
       
                    ]
                  },
                  {
                    "name": "PackageStyle",
                    "description": "Package Style",
                    "partPosition": 2,
                    "options": [
                      {
                        "id": "SOT23",
                        "name": "1",
                        "description": "SOT-23"
       
                      },
                      {
                        "id": "SOT89B",
                        "name": "2",
                        "description": "SOT-89B"
       
                      },
                      {
                        "id": "SIP2pin",
                        "name": "3",
                        "description": "SIP 2 pin"
       
                      },
                      {
                        "id": "TO92SIP3pin",
                        "name": "4",
                        "description": "TO-92 SIP 3 pin"
       
                      },
                      {
                        "id": "TO92SIP4pin",
                        "name": "5",
                        "description": "TO-92 SIP 4 pin"
       
                      }
                    ]
                  },
                  {
                    "name": "MagneticType",
                    "description": "Magnetic Sensor Type",
                    "partPosition": 3,
                    "options": [
                      {
                        "id": "Bipolar",
                        "name": "0",
                        "description": "Bipolar",
                        "command": "03"
                      },
                      {
                        "id": "Unipolar",
                        "name": "1",
                        "description": "Unipolar",
                        "command": "03"
                      },
                      {
                        "id": "Omnipolar",
                        "name": "2",
                        "description": "Omnipolar",
                        "command": "03"
                      },
                      {
                        "id": "Latch",
                        "name": "3",
                        "description": "Latch",
                        "command": "03"
                      },
                      {
                        "id": "Linear",
                        "name": "4",
                        "description": "Linear (Analog)",
                        "command": "05"
                      },
                      {
                        "id": "Current",
                        "name": "5",
                        "description": "2-Pin (Current)",
                        "command": "05"
                      },
                      {
                        "id": "SpeedAndDirection",
                        "name": "6",
                        "description": "Speed and Direction",
                        "command": "04"
                      }
                    ]
                  },
                  {
                    "name": "RelativeOperateGauss",
                    "description": "Relative operate Gauss",
                    "partPosition": 4,
                    "options": [
                      {
                        "id": 1,
                        "name": "0",
                        "description": "Low"
                      },
                      {
                        "id": 2,
                        "name": "1",
                        "description": "Medium"
                      },
                      {
                        "id": 3,
                        "name": "2",
                        "description": "High"
                      }
                    ]
                  },
                  {
                    "name": "Electrical/Magneticoptions",
                    "description": "Electrical/Magnetic options",
                    "partPosition": 5,
                    "options": [
                      {
                        "id": "ExternalPullup",
                        "name": "A",
                        "description": "Open Collector (External Pullup)"
                      },
                      {
                        "id": "InternalPullUp",
                        "name": "P",
                        "description": "Built in Pull up resistor"
                      }
       
                    ]
                  }
                ]
              }
            ]
          } 
        ]
      }
        
    constructor(props) {
        super(props)
       // this.setState.jsonData= this.
        
    }

    /** This function returns the set of dropdowns extracted from data.json file */
    getPickerData = () => {
        return (
            <View style={{ flex: 1 }}>
                {this.jsonData.SensorTypes.map((sensordata, sensorvalue) => {
                    return (
                        sensordata.series.map((seriesdata, seriesvalue) => {
                            return (
                                seriesdata.parts.map((data, value) => {
                                    return (
                                        <View key={value} style={styles.pickerView}>
                                            <Text style={styles.pickerText}>{data.name}</Text>
                                            <Picker style={styles.pickerColor} selectedValue={this.props.sensor} onValueChange={this.props.updateSensor} >
                                                <Picker.Item  label={"Select "+data.description.split(" ").splice(-1)} value={0} /> 
                                                {data.options.map((optiondata, optionvalue) => {
                                                    return (
                                                        <Picker.Item key={optionvalue} label={optiondata.description} value={optiondata.id} />
                                                    )
                                                })
                                                }
                                            </Picker>
                                        </View>
                                    )
                                })
                            )
                        })

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
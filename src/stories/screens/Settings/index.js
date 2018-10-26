import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Button, Image } from 'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import styles from "./styles";
class project extends Component {
    constructor(props) {
        super(props);
    };
    onSelect(index, value) {
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerbackground} flexDirection='row'>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Image source={require('../../../assets/menu.png')} style={styles.menu} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.headertext}
                            onPress={() =>
                                this.props.navigation.navigate("HostBoard")}>Settings</Text>
                    </View>
                </View>
                <ScrollView>
                    <View>
                        <Text style={styles.content}>Settings and Configurations</Text>
                    </View>
                    <View flexDirection='column' style={styles.divisionheader}>
                        <Text style={styles.header}>Graph Settings</Text>
                    </View>
                    <View style={styles.division} elevation={5} >
                        <View flexDirection='column'>
                            <View style={styles.scale}>
                                <Text style={styles.textstyle}>Scale</Text>
                            </View>
                            <View style={styles.radiobutton}>
                                <RadioGroup style={styles.radio}
                                    onSelect={(index, value) => this.onSelect(index, value)} color={'black'}
                                >
                                    <RadioButton value={'item1'} style={styles.radio1}>
                                        <Text style={styles.textstyle}>Auto</Text>
                                    </RadioButton>
                                    <RadioButton value={'item2'} style={styles.radio2}>
                                        <Text style={styles.textstyle}>Fixed</Text>
                                    </RadioButton>
                                </RadioGroup>
                            </View>
                        </View>
                    </View>
                    <View style={styles.division} elevation={5}>
                        <View flexDirection='column'>
                            <View style={styles.scale}>
                                <Text style={styles.textstyle}>Temperature Unit</Text>
                            </View>
                            <View style={styles.radiobutton}>
                                <RadioGroup style={styles.radio}
                                    onSelect={(index, value) => this.onSelect(index, value)} color={'black'}
                                >
                                    <RadioButton value={'item1'} style={styles.radio1}>
                                        <Text style={styles.textstyle}>Deg C</Text>
                                    </RadioButton>

                                    <RadioButton value={'item2'} style={styles.radio2}>
                                        <Text style={styles.textstyle}>Deg F</Text>
                                    </RadioButton>
                                </RadioGroup>
                            </View>
                        </View>
                    </View>
                    <View style={styles.division} elevation={5}>
                        <Text style={styles.textstyle}>Graph Plot</Text>
                        <View>
                        </View>
                    </View>
                    <View style={styles.division} elevation={5} >
                        <View flexDirection='column'>
                            <View style={styles.scale}>
                                <Text style={styles.textstyle}>Values</Text>
                            </View>
                            <View style={styles.radiobutton}>
                                <RadioGroup style={styles.radio}
                                    onSelect={(index, value) => this.onSelect(index, value)} color={'black'}
                                >
                                    <RadioButton value={'item1'} style={styles.radio1}>
                                        <Text style={styles.textstyle}>Engineering</Text>
                                    </RadioButton>

                                    <RadioButton value={'item2'} style={styles.radio2}>
                                        <Text style={styles.textstyle}>Raw Count</Text>
                                    </RadioButton>
                                </RadioGroup>
                            </View>
                        </View>
                    </View>
                    <View flexDirection='column' style={styles.divisionheader}>
                        <Text style={styles.header}>Alarm Settings</Text>
                    </View>
                    <View style={styles.division} elevation={5}>
                        <View flexDirection='column'>
                            <View style={styles.scale}>
                                <Text style={styles.textstyle}>Alarm type</Text>
                            </View>
                            <View style={styles.radiobutton}>
                                <RadioGroup style={styles.radio}
                                    onSelect={(index, value) => this.onSelect(index, value)} color={'black'}
                                >
                                    <RadioButton value={'item1'} style={styles.radio1}>
                                        <Text style={styles.textstyle}>Vibrate</Text>
                                    </RadioButton>

                                    <RadioButton value={'item2'} style={styles.radio2}>
                                        <Text style={styles.textstyle}>Ring</Text>
                                    </RadioButton>
                                </RadioGroup>
                            </View>
                        </View>
                    </View>
                    <View flexDirection='row' style={styles.division} elevation={5}>
                        <View flexDirection='column'>
                            <View style={styles.scale}>
                                <Text style={styles.textstyle}>High Limit</Text>
                            </View>
                        </View>
                    </View>
                    <View flexDirection='row' style={styles.division} elevation={5}>
                        <Text style={styles.textstyle}>Low Limit</Text>
                        <View>

                        </View>
                    </View>
                    <View flexDirection='column' style={styles.divisionheader}>
                        <Text style={styles.header}>Profile Settings</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SaveProfile')}>
                    <View flexDirection='row' style={styles.division} elevation={5} >
                       
                            <View >
                                <Text style={styles.saveprofile}>Save Profile</Text>
                            </View>
                       
                        <View>
                        </View>
                        
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('LoadProfile')}>
                    <View flexDirection='row' style={styles.division} elevation={5}>
                       
                            <View >
                                <Text style={styles.saveprofile}>Load Profile</Text>
                            </View>
                        
                    </View>
                    </TouchableOpacity>
                    <View flexDirection='column' style={styles.divisionheader}>
                        <Text style={styles.header}>Data Log Settings</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SendData')}>
                    <View flexDirection='row' style={styles.division} elevation={5}>
                       
                            <View >
                                <Text style={styles.saveprofile}>Send Data</Text>
                            </View>

                       
                        <View>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <View>
                        <Text>{"\n"}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default project

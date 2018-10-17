import * as React from "react";
import { Text, View, TouchableOpacity,Image } from 'react-native'
import styles from "./styles";

class HostBoard extends React.Component {
    constructor(props) {
        super();
        this.state = {
            status: false,
            status1: true,
            status2: false,
        }
    }
    listClickEvent = (event) => {
        console.log("dataaaa----" + event);
        this.setState({ status: event });
        this.setState({ status2: true });
    }
    list2ClickEvent = (event) => {
        console.log("dataaaa----" + event);
        this.setState({ status1: event });
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                }}>
                <View style={styles.background} flexDirection='row'>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                        <Image source={require('../../../assets/hamburgerMenu.png')} style={styles.image2} />
                    </TouchableOpacity>
                    <Text style={styles.home}>Home</Text>
                </View>

                <View>
                    <Image source={require('../../../assets/sensor.png')} style={{ height: 220, width: 412, position: 'absolute', resizeMode: 'cover' }} />
                </View>
                <View style={styles.subheaderCss}>
                    <Text style={styles.header}> Hostboard Selection </Text>
                </View>
                <View flexDirection='column' style={styles.division}>
                    <Text style={styles.header}>Select Host Board</Text>
                </View>

                <View style={styles.listViewCss}>
                    <TouchableOpacity id="a" onPress={() => this.listClickEvent('1')}>
                        <View flexDirection='row' style={styles.division1} >
                            <View flexDirection='column' style={styles.col3Css}>
                                <Image source={require('../../../assets/micro.png')} style={styles.ListImgCSS} />
                            </View>
                            <View flexDirection='column' style={styles.col5Css}>
                                <Text style={styles.label}>Arduino Yun</Text>
                            </View>
                            <View flexDirection='column' style={styles.col2Css}>
                                <Image source={this.state.status == '1' ? require('../../../assets/CheckboxActive.png') : require('../../../assets/Checkbox.png')} style={styles.ListImgCSS} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.listClickEvent('2')}>
                        <View flexDirection='row' style={styles.division1}>
                            <View flexDirection='column' style={styles.col3Css}>
                                <Image source={require('../../../assets/micro.png')} style={styles.ListImgCSS} />
                            </View>
                            <View flexDirection='column' style={styles.col5Css}>
                                <Text style={styles.label}>RaspBerry Pi</Text>
                            </View>
                            <View flexDirection='column' style={styles.col2Css}>
                                <Image source={this.state.status == '2' ? require('../../../assets/CheckboxActive.png') : require('../../../assets/Checkbox.png')} style={styles.ListImgCSS} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View flexDirection='column' style={styles.division2}>
                    <Text style={styles.header}>Select Wireless Option</Text>

                </View>

                <View style={styles.listViewCss}>
                    <TouchableOpacity onPress={() => this.list2ClickEvent('2')} disabled={true}>
                        <View flexDirection='row' style={styles.division1}>
                            <View flexDirection='column' style={styles.col3Css}>
                                <Image source={require('../../../assets/bluetooth.png')} />
                            </View>
                            <View flexDirection='column' style={styles.col5Css}>
                                <Text style={styles.label}>BLE</Text>
                            </View>
                            <View flexDirection='column' style={styles.col2Css}>
                                <Image source={require('../../../assets/Checkbox.png')} style={styles.ListImgCSS} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.list2ClickEvent('2')}>
                        <View flexDirection='row' style={styles.division1}>
                            <View flexDirection='column' style={styles.col3Css}>
                                <Image source={require('../../../assets/wifi.png')} />
                            </View>
                            <View flexDirection='column' style={styles.col5Css}>
                                <Text style={styles.label}>Wifi</Text>
                            </View>
                            <View flexDirection='column' style={styles.col2Css}>
                                <Image source={this.state.status1 ? require('../../../assets/CheckboxActive.png') : require('../../../assets/Checkbox.png')} style={styles.ListImgCSS} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                
                        {this.state.status2 ?<TouchableOpacity style={styles.nextBtnViewCss}
					onPress={() =>
						this.props.navigation.navigate("Sebdevice"/* , {name: { item }} */)}>
					<Text style={styles.next} >Next</Text>
				</TouchableOpacity>:
                    <TouchableOpacity style={styles.nextBtnViewCss1} >
                        <Text style={styles.next1} >Next</Text>
                    </TouchableOpacity>}
                
            </View>
        );
    }
}

export default HostBoard;

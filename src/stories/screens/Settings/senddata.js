import * as React from "react";
import { Text, View, TouchableOpacity, Image } from 'react-native'
import styles from "./styles";
import { Card, CardItem, } from 'native-base';
class LoadProfile extends React.Component {
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
            <View style={styles.container}>
                <View style={styles.headerbackground} flexDirection='row'>
                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate("Settings")}>
                        <Image source={require('../../../assets/leftarrow.png')} style={styles.back} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.headertext}
                            onPress={() =>
                                this.props.navigation.navigate("HostBoard")}>Settings</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.content}>Send Data</Text>
                </View>
                <View style={styles.listViewCss}>
                    <TouchableOpacity id="a" onPress={() => this.listClickEvent('1')}>
                        <View flexDirection='row' style={styles.division1} >
                            <View flexDirection='column' style={styles.col5Css}>
                                <Text style={styles.label}>Data 1</Text>
                                <Text style={styles.label1}>Date Saved:dd-mm-yy</Text>
                            </View>
                            <View flexDirection='column' style={styles.col2Css}>
                                <Image source={this.state.status == '1' ? require('../../../assets/CheckboxActive.png') : require('../../../assets/Checkbox.png')} style={styles.ListImgCSS} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.listClickEvent('2')}>
                        <View flexDirection='row' style={styles.division1}>

                            <View flexDirection='column' style={styles.col5Css}>
                                <Text style={styles.label}>Data 2</Text>
                                <Text style={styles.label1}>Date Saved:dd-mm-yy</Text>
                            </View>
                            <View flexDirection='column' style={styles.col2Css}>
                                <Image source={this.state.status == '2' ? require('../../../assets/CheckboxActive.png') : require('../../../assets/Checkbox.png')} style={styles.ListImgCSS} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
               
                <View style={styles.btnCss}>
                    {this.state.status2 ? <TouchableOpacity style={styles.submit} onPress={() =>
                        this.props.navigation.navigate()}>
                        <Text style={styles.next} >Send Data</Text>
                    </TouchableOpacity> :
                        <TouchableOpacity style={styles.submit1} >
                            <Text style={styles.next1} >Send Data</Text>
                        </TouchableOpacity>}
                </View>
            </View>
        );
    }
}

export default LoadProfile;

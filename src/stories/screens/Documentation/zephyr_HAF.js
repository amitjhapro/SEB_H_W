import * as React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Content, List, ListItem, CheckBox, } from 'native-base';
import { Card, CardItem, } from 'native-base';
import styles from "./styles";
class ZephyrHAF extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerbackground} flexDirection='row'>
                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate("AmplifiedAirflow")}>
                        <Image source={require('../../../assets/leftarrow.png')} style={styles.back} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.headertext}
                            onPress={() =>
                                this.props.navigation.navigate("AmplifiedAirflow")}>Amplified Airflow Sensors</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.content}>Honeywell Zephyr HAF Series</Text>
                </View>
                <ScrollView>
                    <TouchableOpacity >
                        <View style={styles.division} elevation={5}>
                            <View style={styles.pdf}>
                                <Image source={require('../../../assets/pdf.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view1}>
                                <Text style={styles.text_style1}>AWM400000 Series Airflow Sensors,Unamplified and </Text>
                            </View>
                            <View style={styles.installation}>
                                <Image source={require('../../../assets/installation.png')} style={styles.rightarrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  >
                        <View style={styles.division} elevation={5}>
                            <View style={styles.pdf}>
                                <Image source={require('../../../assets/pdf.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view1}>
                                <Text style={styles.text_style1}>AWM400000 Series Airflow Sensors,Unamplified &#38; Amplified </Text>
                            </View>
                            <View style={styles.installation}>
                                <Image source={require('../../../assets/installation.png')} style={styles.rightarrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={styles.division} elevation={5}>
                            <View style={styles.pdf}>
                                <Image source={require('../../../assets/pdf.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view1}>
                                <Text style={styles.text_style1}>AWM40000 Series Microbridge Mass Gas-flow Sensors </Text>
                            </View>
                            <View style={styles.installation}>
                                <Image source={require('../../../assets/installation.png')} style={styles.rightarrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={styles.division2} elevation={5}>
                            <View style={styles.pdf}>
                                <Image source={require('../../../assets/pdf.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view1}>
                                <Text style={styles.text_style1}>Airflow Sensors Line Guide</Text>
                            </View>
                            <View style={styles.installation}>
                                {/* <Image source={require('../../../assets/installation.png')} style={styles.rightarrow} />  */}
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

export default ZephyrHAF;















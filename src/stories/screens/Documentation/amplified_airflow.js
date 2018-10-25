import * as React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Content, List, ListItem, CheckBox, } from 'native-base';
import { Card, CardItem, } from 'native-base';
import styles from "./styles";
class AmplifiedAirflow extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerbackground} flexDirection='row'>
                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate("AirflowSensors")}>
                        <Image source={require('../../../assets/leftarrow.png')} style={styles.back} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.headertext}
                            onPress={() =>
                                this.props.navigation.navigate("AirflowSensors")}>Airflow Sensors</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.content}>Amplified Airflow Sensors</Text>
                </View>
                <ScrollView>
                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate("ZephyrHAF")} >
                        <View style={styles.division} elevation={5}>
                            <View style={styles.sensor_image}>
                                <Image source={require('../../../assets/hafseries.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view}>
                                <Text style={styles.text_style}>Honeywell Zephyr HAF Series </Text>
                            </View>
                            <View style={styles.arrow_image}>
                                <Image source={require('../../../assets/rightarrow.png')} style={styles.rightarrow} />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <View style={styles.division} elevation={5}>
                            <View style={styles.sensor_image}>
                                <Image source={require('../../../assets/awm3000.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view}>
                                <Text style={styles.text_style}>AWM 3000 Series </Text>
                            </View>
                            <View style={styles.arrow_image}>
                                <Image source={require('../../../assets/rightarrow.png')} style={styles.rightarrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  >
                        <View style={styles.division} elevation={5}>
                            <View style={styles.sensor_image}>
                                <Image source={require('../../../assets/awm5000.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view}>
                                <Text style={styles.text_style}>AWM 5000 Series </Text>
                            </View>
                            <View style={styles.arrow_image}>
                                <Image source={require('../../../assets/rightarrow.png')} style={styles.rightarrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  >
                        <View style={styles.division} elevation={5}>
                            <View style={styles.sensor_image}>
                                <Image source={require('../../../assets/awm700.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view}>
                                <Text style={styles.text_style}>AWM 700 Series </Text>
                            </View>
                            <View style={styles.arrow_image}>
                                <Image source={require('../../../assets/rightarrow.png')} style={styles.rightarrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={styles.division2} elevation={5}>
                            <View style={styles.sensor_image}>
                                <Image source={require('../../../assets/awm40000.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view}>
                                <Text style={styles.text_style}>AWM 40000 Series</Text>
                            </View>
                            <View style={styles.arrow_image}>
                                <Image source={require('../../../assets/rightarrow.png')} style={styles.rightarrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

export default AmplifiedAirflow;















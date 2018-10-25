import * as React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Content, List, ListItem, CheckBox, } from 'native-base';
import { Card, CardItem, } from 'native-base';
import styles from "./styles";
class Documentation extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerbackground} flexDirection='row'>
                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate("HostBoard")}>
                        <Image source={require('../../../assets/leftarrow.png')} style={styles.back} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.headertext}
                            onPress={() =>
                                this.props.navigation.navigate("HostBoard")}>Home</Text>
                    </View>
                </View>
                <ScrollView>
                    <View>
                        <Text style={styles.content}>Documentation</Text>
                    </View>

                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate("AirflowSensors")} >
                        <View style={styles.division} elevation={5}>
                            <View style={styles.sensor_image}>
                                <Image source={require('../../../assets/airflow.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view}>
                                <Text style={styles.text_style}>Airflow Sensors </Text>
                            </View>
                            <View style={styles.arrow_image}>
                                <Image source={require('../../../assets/rightarrow.png')} style={styles.rightarrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  >
                        <View style={styles.division} elevation={5}>
                            <View style={styles.sensor_image}>
                                <Image source={require('../../../assets/current.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view}>
                                <Text style={styles.text_style}>Current Sensors </Text>
                            </View>
                            <View style={styles.arrow_image}>
                                <Image source={require('../../../assets/rightarrow.png')} style={styles.rightarrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  >
                        <View style={styles.division} elevation={5}>
                            <View style={styles.sensor_image}>
                                <Image source={require('../../../assets/force.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view}>
                                <Text style={styles.text_style}>Force Sensors </Text>
                            </View>
                            <View style={styles.arrow_image}>
                                <Image source={require('../../../assets/rightarrow.png')} style={styles.rightarrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={styles.division} elevation={5}>
                            <View style={styles.sensor_image}>
                                <Image source={require('../../../assets/humidity.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view}>
                                <Text style={styles.text_style}>Humidity,Thermal &#38; Flexible Heater </Text>
                            </View>
                            <View style={styles.arrow_image}>
                                <Image source={require('../../../assets/rightarrow.png')} style={styles.rightarrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={styles.division} elevation={5}>
                            <View style={styles.sensor_image}>
                                <Image source={require('../../../assets/inertial.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view}>
                                <Text style={styles.text_style}>Inertial Measurement Units </Text>
                            </View>
                            <View style={styles.arrow_image}>
                                <Image source={require('../../../assets/rightarrow.png')} style={styles.rightarrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={styles.division} elevation={5}>
                            <View style={styles.sensor_image}>
                                <Image source={require('../../../assets/magneticsensors.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view}>
                                <Text style={styles.text_style}>Magnetic Sensors ICs </Text>
                            </View>
                            <View style={styles.arrow_image}>
                                <Image source={require('../../../assets/rightarrow.png')} style={styles.rightarrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  >
                        <View style={styles.division} elevation={5}>
                            <View style={styles.sensor_image}>
                                <Image source={require('../../../assets/motionsensors.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view}>
                                <Text style={styles.text_style}>Motion &#38; Position Sensors </Text>
                            </View>
                            <View style={styles.arrow_image}>
                                <Image source={require('../../../assets/rightarrow.png')} style={styles.rightarrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={styles.division} elevation={5}>
                            <View style={styles.sensor_image}>
                                <Image source={require('../../../assets/particlesensors.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view}>
                                <Text style={styles.text_style}>Particle Sensor </Text>
                            </View>
                            <View style={styles.arrow_image}>
                                <Image source={require('../../../assets/rightarrow.png')} style={styles.rightarrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  >
                        <View style={styles.division} elevation={5}>
                            <View style={styles.sensor_image}>
                                <Image source={require('../../../assets/pressuresensors.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view}>
                                <Text style={styles.text_style}>Pressure Sensors &#38; Transducers </Text>
                            </View>
                            <View style={styles.arrow_image}>
                                <Image source={require('../../../assets/rightarrow.png')} style={styles.rightarrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={styles.division2} elevation={5}>
                            <View style={styles.sensor_image}>
                                <Image source={require('../../../assets/speedsensors.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view}>
                                <Text style={styles.text_style}>Speed Sensors</Text>
                            </View>
                            <View style={styles.arrow_image}>
                                <Image source={require('../../../assets/rightarrow.png')} style={styles.rightarrow} />
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

export default Documentation;















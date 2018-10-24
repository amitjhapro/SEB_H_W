import * as React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Content, List, ListItem, CheckBox, } from 'native-base';
import { Card, CardItem, } from 'native-base';
import styles from "./styles";
class AirflowSensors extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerbackground} flexDirection='row'>
                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate("Documentation")}>
                        <Image source={require('../../../assets/leftarrow.png')} style={styles.back} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.headertext}
                            onPress={() =>
                                this.props.navigation.navigate("Documentation")}>Documentation</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.content}>Airflow Sensors</Text>
                </View>
                <ScrollView>
                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate("AmplifiedAirflow")} >
                        <View style={styles.division} elevation={5}>
                            <View style={styles.sensor_image}>
                                <Image source={require('../../../assets/airflow.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view}>
                                <Text style={styles.text_style}>Amplified Airflow Sensors </Text>
                            </View>
                            <View style={styles.arrow_image}>
                                <Image source={require('../../../assets/rightarrow.png')} style={styles.rightarrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={styles.division2} elevation={5}>
                            <View style={styles.sensor_image}>
                                <Image source={require('../../../assets/unamplifiedairflow.png')} style={styles.sensors} />
                            </View>
                            <View style={styles.Text_view}>
                                <Text style={styles.text_style}>Unamplified Airflow Sensors</Text>
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

export default AirflowSensors;















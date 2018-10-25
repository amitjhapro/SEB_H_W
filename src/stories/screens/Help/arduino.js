import * as React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Content, List, ListItem, CheckBox, } from 'native-base';
import { Card, CardItem, } from 'native-base';
import styles from "./styles";
class Arduinohelp extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerbackground} flexDirection='row'>
                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate("Help"/* , {name: { item }} */)}>
                        <Image source={require('../../../assets/leftarrow.png')} style={styles.back} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.headertext}
                            onPress={() =>
                                this.props.navigation.navigate("Help"/* , {name: { item }} */)}>Help</Text>
                    </View>
                </View>
                <ScrollView>
                    <View>
                        <Text style={styles.content}>Arduino YUN2</Text>
                    </View>
                    <Card style={styles.steps_card}>
                        <CardItem header style={styles.cardheader} >
                            <Text style={styles.faq}>Steps to Perform</Text>
                        </CardItem>
                        <CardItem>
                            <View flexDirection='column'>
                                <View flexDirection='row'>
                                    <Text style={styles.stepnum}>1.</Text>
                                    <Text style={styles.steps}>Mount the SEB on top of the Arduino using native connectors, as shown in below figure</Text>
                                </View>
                                <View style={styles.sebimage}>
                                    <Image source={require('../../../assets/seb.png')} />
                                </View>
                                <View>
                                    <Text style={styles.steps}>{"\n"}</Text>
                                </View>
                                <View flexDirection='row'>
                                    <Text style={styles.stepnum}>1.</Text>
                                    <Text style={styles.steps}>Power ON the Arduino YUN using USB cable</Text>

                                </View>
                                <View flexDirection='row'>
                                    <Text style={styles.stepnum}>2.</Text>
                                    <Text style={styles.steps}>Open the mobile application</Text>
                                </View>
                                <View flexDirection='row'>
                                    <Text style={styles.stepnum}>3.</Text>
                                    <Text style={styles.steps}>Select the host board</Text>
                                </View>
                                <View flexDirection='row'>
                                    <Text style={styles.stepnum}>4.</Text>
                                    <Text style={styles.steps}>Select the communication protocol</Text>
                                </View>
                                <View flexDirection='row'>
                                    <Text style={styles.stepnum}>5.</Text>
                                    <Text style={styles.steps}>Select the SEB board</Text>
                                </View>
                                <View flexDirection='row'>
                                    <Text style={styles.stepnum}>6.</Text>
                                    <Text style={styles.steps}>Select the sensor series</Text>
                                </View>
                                <View flexDirection='row'>
                                    <Text style={styles.stepnum}>7.</Text>
                                    <Text style={styles.steps}>Select the sensor part number</Text>
                                </View>
                                <View flexDirection='row'>
                                    <Text style={styles.stepnum}>8.</Text>
                                    <Text style={styles.steps}>Click Submit to view Data</Text>
                                </View>
                                <View flexDirection='row'>
                                    <Text style={styles.stepnum}>9.</Text>
                                    <Text style={styles.steps}>Settings page allows you to customize the graph and app </Text>
                                </View>
                            </View>
                        </CardItem>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}

export default Arduinohelp;















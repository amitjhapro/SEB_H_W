import * as React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Container, Content, List, ListItem, CheckBox, } from 'native-base';
import { Card, CardItem, } from 'native-base';

import styles from "./styles";
class Raspberryhelp extends React.Component {
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
                <View>
                    <Text style={styles.content}>Raspberry Pi</Text>
                </View>
                <Card style={styles.steps_card}>
                    <CardItem header style={styles.cardheader} >
                        <Text style={styles.faq}>Steps to Perform</Text>
                    </CardItem>
                    <CardItem>
                        <View flexDirection='column'>
                            <View flexDirection='row'>
                                <Text style={styles.stepnum}>1.</Text>
                                <Text style={styles.steps}>Connect the SEB with Raspberry Pi using          Ribbon cable provided </Text>
                            </View>
                            <View flexDirection='row'>
                                <Text style={styles.stepnum}>2.</Text>
                                <Text style={styles.steps}>Power on the Raspberry Pi</Text>
                            </View>
                            <View flexDirection='row'>
                                <Text style={styles.stepnum}>3.</Text>
                                <Text style={styles.steps}>Load the application through Remote server or  SD card</Text>
                            </View>
                            <View flexDirection='row'>
                                <Text style={styles.stepnum}>4.</Text>
                                <Text style={styles.steps}>Open the mobile application</Text>
                            </View>
                            <View flexDirection='row'>
                                <Text style={styles.stepnum}>5.</Text>
                                <Text style={styles.steps}>Select the host board</Text>
                            </View>
                            <View flexDirection='row'>
                                <Text style={styles.stepnum}>6.</Text>
                                <Text style={styles.steps}>Select the communication protocol</Text>
                            </View>
                            <View flexDirection='row'>
                                <Text style={styles.stepnum}>7.</Text>
                                <Text style={styles.steps}>Select the SEB board</Text>
                            </View>
                            <View flexDirection='row'>
                                <Text style={styles.stepnum}>8.</Text>
                                <Text style={styles.steps}>Select the sensor series</Text>
                            </View>
                            <View flexDirection='row'>
                                <Text style={styles.stepnum}>9.</Text>
                                <Text style={styles.steps}>Select the sensor part number</Text>
                            </View>
                            <View flexDirection='row'>
                                <Text style={styles.stepnum}>10.</Text>
                                <Text style={styles.step10}>Click Submit to view Data,</Text>
                            </View>
                            <View flexDirection='row'>
                                <Text style={styles.stepnum}>11.</Text>
                                <Text style={styles.step11}>Settings page allows you to customize the graph and app</Text>
                            </View>
                        </View>
                    </CardItem>
                </Card>
            </View>
        );
    }
}

export default Raspberryhelp;















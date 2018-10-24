import * as React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Container, Content, List, ListItem, CheckBox, } from 'native-base';
import { Card, CardItem, } from 'native-base';
import styles from "./styles";
class Help extends React.Component {
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
                <View>
                    <Text style={styles.content}>Help</Text>
                </View>
                <TouchableOpacity onPress={() =>
                    this.props.navigation.navigate("Arduinohelp")} >
                    <View style={styles.arduino_division} elevation={5}>
                        <Image source={require('../../../assets/micro.png')} style={styles.microcontroller} />
                        <Text style={styles.text}>Arduino YUN2 </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                    this.props.navigation.navigate("Raspberryhelp")}>
                    <View style={styles.raspberry_division} elevation={5}>
                        <Image source={require('../../../assets/micro.png')} style={styles.microcontroller} />
                        <Text style={styles.text}>Raspberry Pi</Text>
                    </View>
                </TouchableOpacity>
                <Card style={styles.card}>
                    <CardItem header style={styles.cardheader} >
                        <Text style={styles.faq}>FAQ</Text>
                    </CardItem>
                    <CardItem>
                        {/* FAQ Content here */}
                    </CardItem>
                </Card>
            </View>
        );
    }
}

export default Help;















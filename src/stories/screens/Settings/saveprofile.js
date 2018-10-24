import * as React from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import styles from "./styles";
import { Card, CardItem, } from 'native-base';
class SaveProfile extends React.Component {
    constructor(props) {
        super();
        this.state = {
            status: false,
            status1: true,
            status2: false,
            text: ''
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
                    <Text style={styles.content}>Save Profile</Text>
                </View>
                <View>
                    <Text style={styles.textinputheader}>Enter Profile Name</Text>
                </View>
                <View>
                    <TextInput underlineColorAndroid="transparent"
                        style={styles.TextInput}
                        onChangeText={(text) => this.setState({ text })}
                    />
                </View>
                <View>
                    <Text style={styles.textinputheader}>Enter Profile Name</Text>
                </View>
                <View>
                    <TextInput underlineColorAndroid="transparent"
                        style={styles.TextInput}
                        onChangeText={(text) => this.setState({ text })}
                    />
                </View>
                <Card style={styles.card}>
                    <CardItem header style={styles.cardheader} >
                        <Text style={styles.faq}>Profile 1</Text>
                    </CardItem>
                    <CardItem>
                        {/*  Content here */}
                    </CardItem>
                </Card>
                <View style={styles.btnCss}>
                      {this.state.status2 ? <TouchableOpacity style={styles.submit} onPress={() =>
                        this.props.navigation.navigate()}>
                        <Text style={styles.next} >Next</Text>
                    </TouchableOpacity> :  
                        <TouchableOpacity style={styles.submit1} >
                            <Text style={styles.next1} >Next</Text>
                        </TouchableOpacity>}
                </View>
            <View>
                <Text>{"\n"}</Text>
                </View>
            </View>
        );
    }
}

export default SaveProfile;

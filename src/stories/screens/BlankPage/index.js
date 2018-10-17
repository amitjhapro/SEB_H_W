import * as React from "react";
//import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Button, Image } from 'react-native'
//import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class BlankPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		return (
<View>
    
</View>
                
		);
	}
}

export default BlankPage;

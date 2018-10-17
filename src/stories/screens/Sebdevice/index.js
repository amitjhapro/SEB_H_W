import * as React from "react";
//import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import { Text, View, TouchableOpacity, ScrollView, Button, Image } from 'react-native'
import Textarea from 'react-native-textarea';

//import RadioGroup from 'react-native-radio-buttons-group';
import styles from "./styles";

class Sebdevice extends React.Component {
	constructor(props) {
		super();
		this.state = {
			status: false,
			status1: true,
			status2: false,
		}


		//this.listClickEvent=this.listClickEvent.bind(this);
	}
	listClickEvent = (event) => {
		console.log("dataaaa----" + event);
		this.setState({ status: event });
		this.setState({ status2: true });
		//console.dir(event);
		// alert(event);
	}
	list2ClickEvent = (event) => {
		console.log("dataaaa----" + event);
		this.setState({ status1: event });
		//console.dir(event);
		// alert(event);
	}
	render() {

		return (
			<View
				style={{
					flex: 1,
					//paddingTop: Constants.statusBarHeight,

					backgroundColor: 'white',
				}}>
				<View style={styles.background} flexDirection='row'>
					<TouchableOpacity onPress={() =>
						this.props.navigation.navigate("HostBoard"/* , {name: { item }} */)}>
						<Image source={require('../../../assets/leftarrow.png')} style={styles.image2} />

					</TouchableOpacity>
					<View>
						<Text style={styles.home1}
							onPress={() =>
								this.props.navigation.navigate("HostBoard"/* , {name: { item }} */)}>Home</Text>
					</View>


				</View>
				<View>

					<Text style={styles.ble}>SEB Board Selection</Text>
				</View>

				<View flexDirection='column' style={styles.division}>

					<Text style={styles.header}>Select SEB Board</Text>

				</View>


				<View style={styles.listViewCss}>
					<TouchableOpacity id="a" onPress={() => this.listClickEvent('1')}>
						<View flexDirection='row' style={styles.division1} >
							<View flexDirection='column' style={styles.col3Css}>
								<Image source={require('../../../assets/magnetic.png')} style={styles.ListImgCSS} />
							</View>
							<View flexDirection='column' style={styles.col5Css}>
								<Text style={styles.label}>SEB Magnetics</Text>
							</View>
							<View flexDirection='column' style={styles.col2Css}>
								<Image source={this.state.status == '1' ? require('../../../assets/CheckboxActive.png') : require('../../../assets/Checkbox.png')} style={styles.ListImgCSS} />
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.listClickEvent('2')}>
						<View flexDirection='row' style={styles.division1}>
							<View flexDirection='column' style={styles.col3Css}>
								<Image source={require('../../../assets/force.png')} style={styles.ListImgCSS} />
							</View>
							<View flexDirection='column' style={styles.col5Css}>
								<Text style={styles.label}>SEB Force</Text>
							</View>
							<View flexDirection='column' style={styles.col2Css}>
								<Image source={this.state.status == '2' ? require('../../../assets/CheckboxActive.png') : require('../../../assets/Checkbox.png')} style={styles.ListImgCSS} />
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.listClickEvent('3')}>
						<View flexDirection='row' style={styles.division1}>
							<View flexDirection='column' style={styles.col3Css}>
								<Image source={require('../../../assets/particle.png')} style={styles.ListImgCSS} />
							</View>
							<View flexDirection='column' style={styles.col5Css}>
								<Text style={styles.label}>SEB Particle</Text>
							</View>
							<View flexDirection='column' style={styles.col2Css}>
								<Image source={this.state.status == '3' ? require('../../../assets/CheckboxActive.png') : require('../../../assets/Checkbox.png')} style={styles.ListImgCSS} />
							</View>
						</View>
					</TouchableOpacity>
				</View>
				{this.state.status2 ?<TouchableOpacity style={styles.nextBtnViewCss}
					onPress={() =>
						this.props.navigation.navigate("Sebboard"/* , {name: { item }} */)}>
					<Text style={styles.next} >Next</Text>
				</TouchableOpacity>:
                    <TouchableOpacity style={styles.nextBtnViewCss1} >
                        <Text style={styles.next1} >Next</Text>
                    </TouchableOpacity>}
			</View>

		);
	}
}

export default Sebdevice;

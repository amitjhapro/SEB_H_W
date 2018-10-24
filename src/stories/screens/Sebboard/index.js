import * as React from "react";
//import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import { Text, View, TouchableOpacity,  ScrollView, Button, Image, StatusBar } from 'react-native'
import Textarea from 'react-native-textarea';
import globalStyles from "../../../globalStyles";
import * as sensorData from "../data.json";
import styles from "./styles";

class Sebboard extends React.Component {
	constructor(props) {
        super();
        this.state = {
            // status: false,
            // status1: true,
			// status2: false,
			selectedIndex:-1,
			nextButtonEnabled:false,
			sensorData: sensorData,
			sensorDataImageMapping:{
				"MagneticsSeries": require('../../../assets/fss.png'),
				"HPM Series": require('../../../assets/fss.png'),
			}
        }
	}
	
	listClickEvent = (event) => {
		console.log("dataaaa----" + event);
		this.setState({ selectedIndex: event });
		this.setState({ nextButtonEnabled: true });
		//console.dir(event);
		// alert(event);
	}

    // listClickEvent = (event) => {
    //     console.log("dataaaa----" + event);
    //     this.setState({ status: event });
    //     this.setState({ status2: true });
    // }
    // list2ClickEvent = (event) => {
    //     console.log("dataaaa----" + event);
    //     this.setState({ status1: event });
	// }
	
	// method to render the list of sensor board types
	renderSensorSeriesList = () => {
		const { selectedSensorBoardID } = this.props.navigation.state.params
		return this.state.sensorData.SensorTypes[selectedSensorBoardID].series.map((data)=>{			
			return (
			<TouchableOpacity id="a" onPress={() => this.listClickEvent(`${data.id}`)} key={data.name}>
				<View flexDirection='row' style={styles.division1} >
					<View flexDirection='column' style={styles.col3Css}>
						<Image source={this.state.sensorDataImageMapping[data.name]} style={styles.ListImgCSS} />
					</View>
					<View flexDirection='column' style={styles.col5Css}>
						<Text style={styles.label}>{data.description}</Text>
					</View>
					<View flexDirection='column' style={styles.col2Css}>
						<Image source={this.state.selectedIndex == `${data.id}` ? require('../../../assets/CheckboxActive.png') : require('../../../assets/Checkbox.png')} style={styles.ListImgCSS} />
					</View>
				</View>
			</TouchableOpacity>
			)
		});
	};

	//method to render enable or diable NEXT button based on user input
	renderNextButton = () => {
		const { selectedSensorBoardID } = this.props.navigation.state.params
		if(this.state.nextButtonEnabled){ 
			return(
				<TouchableOpacity style={styles.nextBtnViewCss} onPress={() => this.props.navigation.navigate("GenPartNo",{selectedSensorBoardID:selectedSensorBoardID,selectedSensorSeriesID:this.state.selectedIndex})}>
					<Text style={styles.next} >Next</Text>
				</TouchableOpacity> 
			);
		}
		return (
			<TouchableOpacity style={styles.nextBtnViewCss1} >
				<Text style={styles.next1}>Next</Text>
			</TouchableOpacity>
		);
	}

	render() {
		return (
			<View style={globalStyles.backgroundStyles}>
				<StatusBar
						backgroundColor="#303030"
						barStyle="light-content"
				/>

				<View style={styles.background}>
					<TouchableOpacity onPress={() =>
								this.props.navigation.navigate("Sebdevice"/* , {name: { item }} */ )}>
						<Image source={require('../../../assets/leftarrow.png')} style={styles.image2} />
					</TouchableOpacity>
					<Text style={styles.home} onPress={() =>
								this.props.navigation.navigate("Sebdevice"/* , {name: { item }} */ )}>SEB Boards</Text>
				</View>
				<View style={styles.sensor1}>
					<Text style={styles.sensor}>Sensor Selection</Text>
				</View>
				<View flexDirection='column' style={styles.division}>

					<Text style={styles.header}>Select Sensors</Text>

				</View>

				<View style={styles.listViewCss}>
				<ScrollView>
					{this.renderSensorSeriesList()}
					{/* <TouchableOpacity id="a" onPress={() => this.listClickEvent('1')}>
						<View flexDirection='row' style={styles.division1} >
							<View flexDirection='column' style={styles.col3Css}>
								<Image source={require('../../../assets/fss.png')} style={styles.ListImgCSS} />
							</View>
							<View flexDirection='column' style={styles.col5Css}>
								<Text style={styles.label}>Magnetics Series</Text>
							</View>
							<View flexDirection='column' style={styles.col2Css}>
								<Image source={this.state.status == '1' ? require('../../../assets/CheckboxActive.png') : require('../../../assets/Checkbox.png')} style={styles.ListImgCSS} />
							</View>
						</View>
					</TouchableOpacity> */}
{/* 					<TouchableOpacity onPress={() => this.listClickEvent('2')}>
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
					<TouchableOpacity onPress={() => this.listClickEvent('3')}>
						<View flexDirection='row' style={styles.division1}>
							<View flexDirection='column' style={styles.col3Css}>
								<Image source={require('../../../assets/particle.png')} style={styles.ListImgCSS} />
							</View>
							<View flexDirection='column' style={styles.col5Css}>
								<Text style={styles.label}>SEB Particle</Text>
							</View>
							<View flexDirection='column' style={styles.col2Css}>
								<Image source={this.state.status == '4' ? require('../../../assets/CheckboxActive.png') : require('../../../assets/Checkbox.png')} style={styles.ListImgCSS} />
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
								<Image source={this.state.status == '5' ? require('../../../assets/CheckboxActive.png') : require('../../../assets/Checkbox.png')} style={styles.ListImgCSS} />
							</View>
						</View>
					</TouchableOpacity> */}
					</ScrollView>
				</View>
				{this.renderNextButton()}		
			</View>
    )
    }    
  }
export default Sebboard;

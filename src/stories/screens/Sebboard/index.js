import * as React from "react";
//import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import { Text, View, TouchableOpacity,  ScrollView, Button, Image} from 'react-native'
import Textarea from 'react-native-textarea';

import styles from "./styles";

class Sebboard extends React.Component {
	constructor(props) {
        super();
        this.state = {
            status: false,
            status1: true,
            status2: false,
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
			<View
			style={{
				flex: 1,
				//paddingTop: Constants.statusBarHeight,
				backgroundColor: 'white',
			}}>
			<View style={styles.background} flexDirection='row'>
				<TouchableOpacity onPress={() =>
							this.props.navigation.navigate("Sebdevice"/* , {name: { item }} */ )}>
					<Image source={require('../../../assets/leftarrow.png')} style={styles.image2} />
				</TouchableOpacity>
				<Text style={styles.home} onPress={() =>
							this.props.navigation.navigate("Sebdevice"/* , {name: { item }} */ )}>SEB Boards</Text>
			</View>
			
				<View style={styles.sensor1}>
					<Text style={styles.sensor}> Sensor Selection</Text>
				</View>
				<View flexDirection='column' style={styles.division}>

					<Text style={styles.header}>Select Sensors</Text>

				</View>

				<View style={styles.listViewCss}>
				<ScrollView>
					<TouchableOpacity id="a" onPress={() => this.listClickEvent('1')}>
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
					</TouchableOpacity>
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



			{this.state.status2 ?<TouchableOpacity style={styles.nextBtnViewCss}
					onPress={() =>
						this.props.navigation.navigate("GenPartNo"/* , {name: { item }} */)}>
					<Text style={styles.next} >Next</Text>
				</TouchableOpacity>:
                    <TouchableOpacity style={styles.nextBtnViewCss1} >
                        <Text style={styles.next1} >Next</Text>
                    </TouchableOpacity>}
			
		</View>
    )
    }    
  }
export default Sebboard;

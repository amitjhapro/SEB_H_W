import * as React from "react";
import { Text, Container, List, ListItem, Content } from "native-base";
import {Image} from "react-native"
import styles from "./styles";
const routes = [
	{
		route: "HostBoard",
		caption: "Host Board Selection"
	},
	{
		route:"Documentation",
		caption:"Documentation"
	},
	{
		route:"Settings",
		caption:"Settings"
	},

	{
		route:"AboutHoneywell",
		caption:"About"
	},
	{
		route:"Help",
		caption:"Help"
	}
];


export default class Sidebar extends React.Component {
	render() {
		return (
			<Container style={styles.sidemenu}>
				<Content>
					<Image source={require('../../../assets/logo.png')} style={styles.logo} />
					<List
						style={{ marginTop: 40 }}
						dataArray={routes}
						renderRow={data => {
							return (
								 
								<ListItem style={styles.sidemenu} 
									button
									onPress={() => this.props.navigation.navigate(data.route)}>
									
									<Text style={styles.caption}>{data.caption}</Text>
								</ListItem>
							);
						}}
					/>
				</Content>
			</Container>
		);
	}
}

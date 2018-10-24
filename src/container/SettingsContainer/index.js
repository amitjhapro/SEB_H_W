
import * as React from "react";
import Settings from "../../stories/screens/Settings";


export default class SettingsContainer extends React.Component {
	render() {
		return <Settings navigation={this.props.navigation} />;
	}
}

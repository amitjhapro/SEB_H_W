
import * as React from "react";
import Help from "../../stories/screens/Help";


export default class HelpContainer extends React.Component {
	render() {
		return <Help navigation={this.props.navigation} />;
	}
}

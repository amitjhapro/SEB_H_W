import * as React from "react";
import Sebboard from "../../stories/screens/Sebboard";

export default class SebboardContainer extends React.Component {
	render() {
		return <Sebboard navigation={this.props.navigation} />;
	}
}
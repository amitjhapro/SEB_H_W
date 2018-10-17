// @flow
import * as React from "react";
import HostBoard from "../../stories/screens/HostBoard";

export default class HostboardContainer extends React.Component {
	render() {
		return <HostBoard navigation={this.props.navigation} />;
	}
}
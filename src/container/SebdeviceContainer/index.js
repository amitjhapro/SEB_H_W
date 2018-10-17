import * as React from "react";
import Sebdevice from "../../stories/screens/Sebdevice";

export default class SebdeviceContainer extends React.Component {
	render() {
		return <Sebdevice navigation={this.props.navigation} />;
	}
}
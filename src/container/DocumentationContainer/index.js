import * as React from "react";
import Documentation from "../../stories/screens/Documentation";


export default class DocumentationContainer extends React.Component {
	render() {
		return <Documentation navigation={this.props.navigation} />;
	}
}
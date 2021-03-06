
import * as React from "react";
import { connect } from "react-redux";
import GenPartNo from "../../stories/screens/GenPartNo";
import datas from "./data";
import { fetchList } from "./actions";
export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
}
export interface State {}
 class GenPartNoContainer extends React.Component {
	render() {
		return <GenPartNo navigation={this.props.navigation} list={this.props.data} />;
	}
}
function bindAction(dispatch) {
	return {
		fetchList: url => dispatch(fetchList(url)),
	};
}

const mapStateToProps = state => ({
	data: state.homeReducer.list,
	isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(GenPartNoContainer);
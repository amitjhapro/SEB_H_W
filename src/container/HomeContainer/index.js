// @flow
import * as React from "react";
 import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import datas1 from "./data1";
import { fetchList } from "./actions";
export interface Props {
	navigation: any,
	fetchList: Function,
	data1: Object,
}
export interface State {}
class HomeContainer extends React.Component {
	componentDidMount() {
		this.props.fetchList(datas1);
	}
	render() {
		return <Home navigation={this.props.navigation} />;
	}
}

function bindAction(dispatch) {
	return {
		fetchList: url => dispatch(fetchList(url)),
	};
}

const mapStateToProps = state => ({
	data1: state.homeReducer.list,
	isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(HomeContainer);

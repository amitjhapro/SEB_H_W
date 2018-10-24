import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import homeReducer from "../container/HomeContainer/reducer";
import genPartNoReducer from "../container/GenPartNoContainer/reducer";

export default combineReducers({
	form: formReducer,
	homeReducer,
	genPartNoReducer,
});

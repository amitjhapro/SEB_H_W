const initialState = {
	list: [],
	isLoading: true,
	optionMapping:[],
};

export default function(state: any = initialState, action: Function) {
	switch(action.type){
		case "FETCH_LIST_SUCCESS":
		return {
			...state,
			list: action.list,
		};
		case "LIST_IS_LOADING":
		return {
			...state,
			isLoading: action.isLoading,
		};
		default: 
		return state
	}
}

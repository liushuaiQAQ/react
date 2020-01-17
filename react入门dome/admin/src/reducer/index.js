export const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return {
				...state,
				count: state.count + 1
			};
		case 'MINUS':
			return {
				...state,
				num: state.num - 1
			};
		default:
			return state;
	}
};

export const addCount = (dispatch) => {
	dispatch({
		type: 'ADD'
	});
};

export const minusCount = (dispatch) => {
	dispatch({
		type: 'MINUS'
	});
};

import React, { createContext, useReducer } from 'react';

export const AppContext = createContext({});

export const AppContextProvider = ({children}) => {

    // 修改状态
	const reducer = (state, action) => {
		// setState((prevState) => {
		// 	console.log(prevState)
		// 	return { ...prevState, [name]: data };
        // });
        const { type } = action;
        switch (type) {
            case 'edit':
                return { ...state,  root: action.data }
            default:
                return state;
        }
    };

	const initAppState = {
        root: { text: 'hello context', list: [ '1+1=?', '1+2=?' ] }
    };
	const [ state, dispatch ] = useReducer(reducer, initAppState);

    return (
        <AppContext.Provider value={{state, dispatch}}>{children}</AppContext.Provider>
    )
}
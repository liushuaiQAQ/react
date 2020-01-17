import React, { createContext, useContext, useReducer } from 'react';

const ThemeContext = createContext();

const initialState = {
    username:'madongdong',
    nickname: '1212'
}

function reducer(state, action){
    switch (action.type) {
        case 'add':
            return { ...state, username: `madongmei${new Date}` };
        default:
            return state;
    }
}

function Test() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <ThemeContext.Provider value={{state, dispatch}}>
                <Toolbar />
            </ThemeContext.Provider>
        </div>
    )
}

function Toolbar(props){
    console.log(props)
    return (
        <div>
            <ThemedButton />
        </div>
    )
}

function ThemedButton(){
    const { state, dispatch } = useContext(ThemeContext);
    const { username, nickname } = state;
    return (
        <button onClick={ () => dispatch({ type: 'add' }) }>{username}{nickname}</button>
    )
}


export default Test;
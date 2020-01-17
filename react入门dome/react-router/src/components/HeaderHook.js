import React, { useContext, useEffect, useCallback } from 'react';
import { AppContext } from '../context/reducer';

import './style.css';

function TopHeader() {
    const { state, dispatch } = useContext(AppContext);
    
    useEffect(() => {
        console.log(1111)
        clickButton();
    }, [])
    

    console.log(state);
    const clickButton = () => {
        // setData('nickname', 'huanhuan');
        dispatch({ type: 'edit', data: {text: 'huanhuan'} })
    }

    return (  
        <div>
            <span>header</span>
            <button onClick={clickButton}>{state.root.text}</button>
            <div title="111" className="logo">111</div>
            <div className="logo">22</div>
        </div>
    )
}
export default TopHeader;

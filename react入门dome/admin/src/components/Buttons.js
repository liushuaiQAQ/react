import React, { useState, createContext, useContext, useReducer } from 'react';
import { Button } from 'antd';
import { addCount, minusCount, reducer } from '../reducer';

export const ButtonContext = createContext();

export const Buttons = (props) => {

    const [state, setstate] = useState('madongdong');
    const [{count}, dispatch] = useReducer(reducer, { count: 0 })

    let val = useContext(ButtonContext);
    return (
        <div>
            <Button onClick={() => setstate('madongmei')}>{val}</Button>
            <span>{count}</span>
            <Button onClick={() => addCount(dispatch)}>+</Button>
        </div>
    )
}
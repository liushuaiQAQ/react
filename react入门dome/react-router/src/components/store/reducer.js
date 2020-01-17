import { fromJS } from 'immutable';

const defaultData = fromJS({
    nickname: 'madongdong'
})

export default (state = defaultData, action) => {
    switch (action.type) {
        case 'SET_NICKNAME':
            return state.set('nickname', action.data);
        default:
            return state;
    }
}
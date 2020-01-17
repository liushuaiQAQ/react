const defaultData = {
    nickname: 'madongdong'
}

const userInfo = (state = defaultData, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_NICKNAME':
            return Object.assign({}, state, action.data);
        default:
            return state
    }
}

export default userInfo;
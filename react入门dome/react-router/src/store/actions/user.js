export const setNickname = (data) => {
    console.log(data)
    return {
        type: 'SET_NICKNAME',
        data: { nickname: data }
    }   
}

 
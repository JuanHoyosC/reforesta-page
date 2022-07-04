type actionType = {
    type: 'update',
    payload: string
}
export const translateReducer = (state: string, action: actionType): any => {

    switch (action.type) {
        case 'update':
            return { language: action.payload }  
        default:
            return state
    }

}
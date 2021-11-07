const data = {
    cars : [],
}

export const carStore = (state = data, action)=>{
    switch(action.type) {
        case 'require_cars' : {
            return {
                ...state,
                cars : action.payload
            }
        }
        default : return state
    }
}

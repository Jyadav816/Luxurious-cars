const data = {load : false};
export const alretStore=(state = data, action)=>{
    switch(action.type) {
        case "Loading" : {
            return {
                ...state,
                load : action.payload
            }
        }

        default : return state
    }
}
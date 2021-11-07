import axios from "axios";
export const requireCars=()=> async dispatch=>{
    dispatch({type : 'LOADING' , payload : true})
    try {
        const response = await axios.get('/api/cars/requirecars')
        dispatch({type : 'require_cars', payload : response.data})
        dispatch({type : 'LOADING' , payload : false})
    } catch (error) {
        console.log(error)
        dispatch({type : 'LOADING' , payload : false})
    }
}
import axios from "axios";
import {message} from 'antd'

export const userLogin=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.post('/api/users/login' , reqObj)
        localStorage.setItem('user' , JSON.stringify(response.data))
        message.success('Login success')
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        message.error('Something went wrong')
        dispatch({type: 'LOADING' , payload:false})
    }
}

export const userRegister=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.post('/api/users/signup' , reqObj)
        message.success('Registration successfull')
        dispatch({type: 'LOADING' , payload:false})
        
    } catch (error) {
        console.log(error)
        message.error('An error occured')
        dispatch({type: 'LOADING' , payload:false})
    }
}






















/*
import {message} from "antd"
import axios from "axios"


export const uReg=(reqObj)=>async dispatch=> {
    dispatch({type : 'LOADING' , payload : true})
    try {
        const response = await axios.get('/api/users/Signup', reqObj)
        //dispatch({type : 'require_cars', payload : response.data})
        dispatch({type : 'LOADING' , payload : false})
        message.success("You have Registered Sucessfully")
    } catch (error) {
        console.log(error)
        dispatch({type : 'LOADING' , payload : false})
        message.error("An error has occured")
    }
}





export const uLogin=(reqObj)=>async dispatch=> {
    dispatch({type : 'LOADING' , payload : true})
    try {
        const response = await axios.get('/api/users/login', reqObj)
        localStorage.setItem('Current User', JSON.stringify(response.data))
        message.success('Login Sucessful!')
        //dispatch({type : 'require_cars', payload : response.data})
        dispatch({type : 'LOADING' , payload : false})
    } catch (error) {
        console.log(error)
        message.error("An error has occured")
        dispatch({type : 'LOADING' , payload : false})
    }
}
*/
import {configureStore} from '@reduxjs/toolkit'
import axios from 'axios'

//set up the inital values
let initialState= {
    loading: false,
    articles: []
}

//create a async function called requestArticles that takes in the dispatch function as a paramter
export const requestArticles = async (dispatch) => {
    dispatch({type: "PENDING"})

    const result = await axios.get('/api/hacker-news')

    dispatch({
        type: 'REQUEST_ARTICLES',
        payload: result.data
      })
}

//create reducer function
const hackerNewsReducer = (state = initialState, action) => {
    switch(action.type){
    case 'PENDING':
        console.log("PENDING hit")
        return {...state, loading: true}
    
    case 'REQUEST_ARTICLES':
        console.log('Article reqeust hit')
        return { loading: false, articles: action.payload}
    
    default: return state
    }
}

export default hackerNewsReducer

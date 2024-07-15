import axios from "axios";


const initialState = {
  loading: true,
  articles: []
};

export const requestArticles = async (dispatch) => {
    dispatch({type: "PENDING"})

    const result = await axios.get('/api/medium')

    dispatch({
        type: 'REQUEST_ARTICLES',
        payload: result.data
      })
}

const mediumReducer = (state=initialState, action) => {
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

export default mediumReducer
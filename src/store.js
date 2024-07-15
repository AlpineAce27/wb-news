
import {configureStore} from '@reduxjs/toolkit'
import hackerNewsReducer from './reducers/hackerNewsReducer'
import mediumReducer from './reducers/mediumReducer'

const store = configureStore({
    reducer: {
        hackerNews : hackerNewsReducer,
        medium: mediumReducer
    }
})

export default store
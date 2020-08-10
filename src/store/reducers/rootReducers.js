import { combineReducers } from 'redux'
import authReducers from './authReducers'
import projectReducers from './projectReducers'
//import { firestoreReducer } from 'redux-firestore'

const rootReducers = combineReducers({
    auth: authReducers,
    project: projectReducers
})

export default rootReducers
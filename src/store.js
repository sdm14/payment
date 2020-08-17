import { mainReducer } from './reducer/mainReducer'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


const reducers = combineReducers({
   main: mainReducer,
   form: formReducer
})

export const store = createStore(reducers)

window.store = store
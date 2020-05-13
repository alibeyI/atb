import {combineReducers} from 'redux'
import recipeReducer from './recipes/recipeReducer'

const rootReducer = combineReducers({
    recipe:recipeReducer
})

export default rootReducer
import {
    FETCH_RECIPE_REQUEST,
    FETCH_RECIPE_SUCCESS,
    FETCH_RECIPE_FAILURE
} from "./recipeTypes"

const initialState = {
    loading: false,
    recipes: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECIPE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_RECIPE_SUCCESS:
            return {
                loading: false,
                recipes: action.payload,
                error: ''
            }

        case FETCH_RECIPE_FAILURE:
            return {
                loading: false,
                recipes: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer
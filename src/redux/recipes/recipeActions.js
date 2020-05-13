import axios from 'axios';
import {
    FETCH_RECIPE_FAILURE,
    FETCH_RECIPE_SUCCESS,
    FETCH_RECIPE_REQUEST
} from './recipeTypes'


export const fetchRecipesRequest = () => {
    return {
        type: FETCH_RECIPE_REQUEST
    }
}
export const fetchRecipesSuccess = recipes=>{
    return{
        type: FETCH_RECIPE_SUCCESS,
        payload:recipes
    }

}

export const  fetchRecipesFailure=error=>{
    return {
        type:FETCH_RECIPE_FAILURE,
        payload:error
    }
}

export const fetchRecipes = ()=>{
    return (dispatch)=>{
        dispatch(fetchRecipesRequest)
        axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res=>{
            const recipes = res.data
            dispatch(fetchRecipesSuccess(recipes))
            console.log(recipes.name);
            
        })
        .catch(err=>{
            const errorMsg = err.message
            dispatch(fetchRecipesFailure(errorMsg))
        })
    }
}
import React from 'react'
import './Recipe.css'
import Header from './recipeComp/Header'
import RecipeBody from './recipeComp/RecipeBody'
const Recipe = () => {
    return (
            <div className="table">
                <Header />
                <RecipeBody className="recipeBody" />
            </div>
    )
}

export default Recipe

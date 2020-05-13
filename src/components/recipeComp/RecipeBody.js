import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { fetchRecipes } from '../../redux'
import recipeIcon from '../svg/recipeIcon.svg';
import visa from '../svg/visa.svg'
import visa2 from '../svg/visa2.svg'
import master from '../svg/master.svg'
import maestro from '../svg/maestro.svg'
import './RecipeBody.css'

const RecipeBody = ({ recipeData, fetchRecipes }) => {


    useEffect(() => [
        fetchRecipes()
    ], [])
    console.log(recipeData.recipes);
    console.log(recipeData.recipes);
    return (
        <div className="recipeBody">
            <div className="recipeHeader" >
                <img src={recipeIcon} alt="" />
                <p>Qaimə</p>
            </div>
            {
                fetchRecipes.loading ? (
                    <h2>Loading...</h2>
                ) : fetchRecipes.error ? (
                    <h2>{recipeData.error}</h2>
                ) : (
                            <div>
                                {
                                    <div>
                                        <div className="details">
                                            <p>Ödəyən</p>
                                            <p>{recipeData.recipes.name}</p>
                                        </div>
                                        <div className="details">
                                            <p>Mobil nömrə</p>
                                            <p>{recipeData.recipes.phone}</p>
                                        </div>
                                        <div className="line">
                                        </div>
                                        <div className="details">
                                            <p>Kimə ödənilir</p>
                                            <p>{recipeData.recipes.email}</p>
                                        </div>
                                        <div className="details">
                                            <p>Təyinat</p>
                                            <p>{recipeData.recipes.username}</p>
                                        </div>
                                        <div className="price">
                                            <div className="details-amount">
                                                <p className="amount">Məbləğ</p>
                                                <p className="Amount-number">{recipeData.recipes.id}  AZN</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        )
            }

            <div className="footer">
                <div className="footer-header">
                    <div className="shortline"></div>
                    <div className="pymttyp" >ÖDƏNİŞ NÖVLƏRİ</div>
                    <div className="shortline" ></div>
                </div>
                <div className="carts">
                    <img src={visa2} alt="" />
                    <img src={master} alt="" />
                    <img src={maestro} alt="" />
                    <img src={visa} alt="" />
                </div>
                <div className="warner-text">
                    <p>Ödə düyməsinə basaraq yuxarıda göstərilən məlumatlarla tanış olduğumu təsdiq edirəm</p>

                </div>
                <div className="submit">
                    <button>ÖDƏ</button>
                </div>
                <div className="line-2">
                </div>
                <div className="footer-footer">
                    <p>© 2020 | Azər Türk Bank tərəfindən təmin edilən 3D-Secure ödəmə xidmətləri</p>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        recipeData: state.recipe
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipes: () => dispatch(fetchRecipes())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipeBody)

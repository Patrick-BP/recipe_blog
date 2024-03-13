import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function RecipeBlock({data}) {
    let [recipe, setRecipe] = useState(data);
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-5">
        <div className="blog-box">
            <div className="post-media">
                <a href="#" title="">    
                    <span className="detail veg">Veg</span>
                    <img src={recipe.image} alt="" className="img-fluid"/>
                    <div className="hovereffect"></div>
                </a>
            </div>

            <div className="blog-meta big-meta">
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
                <h4><Link to="singlerecipe" title="">{recipe.title}</Link></h4>
                <p>{recipe.description.slice(0,100)}...</p>
                <small><a href="#" title="">18 July, 2017</a></small>
                <small><a href="#" title="">by Matilda</a></small>
            </div>
        </div>
    </div>
    )
}

export default RecipeBlock

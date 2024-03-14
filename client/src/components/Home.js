import React, { useEffect, useState } from 'react'
import RecipeBlock from './RecipeBlock'





function Home() {
    let [recipes, setRecipes] = useState([]);

    const fetchRecipes = ()=>{
        fetch("/api/recipes")
        .then(res => res.json())
        .then(data=>{
            
            setRecipes(data.recipes)
        })
    }
    useEffect(()=>{
fetchRecipes();
    },[])

   
    return (
        <>
        <section className="section lb text-muted">
            <div className="container">
                <div className="row grid-style">
                  {recipes && recipes.map(recipe =>{
                    return  <RecipeBlock key={recipe.id} data={recipe}/>
                  })}  
               
                
                </div>
                
                <hr className="invis"/>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                            
                                <li className="page-item">
                                    <a className="page-link" href="#">Load More</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
       

        
        
    </>

    )
}

export default Home

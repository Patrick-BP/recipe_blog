import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8098/api/recipe";

function RecipeBlock({ recipes, showButton, refresh, onDelete, onEdit }) {

  const [loading, setLoading] = useState(false);
const [currentPage , setCurrentPage] = useState(1);
const [postPerPage, setPostPerPage] = useState(8);

  let loginUser = JSON.parse(localStorage.getItem("user"));
  const [isFeedsPage, SetIsFeedPage] = useState(showButton);
const Navigate = useNavigate()

  const handleClick =(recipe)=>{
    Navigate('/layout/singlerecipe',{state:{recipeData:recipe, recipeList:recipes.slice(0,10)}})
  }


  const indexOfLastPost = currentPage * postPerPage;
  const indexOfirstPost = indexOfLastPost - postPerPage;
  const currentPots = recipes.slice(indexOfirstPost, indexOfLastPost);

  const paginate = (pageNumber)=> setCurrentPage(pageNumber)

  return (
    <div className="container">

        <div className="d-flex justify-content-between">
            <div>
            {isFeedsPage === false ?<h1>Feeds</h1> :<button
        className="page-link mb-3"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        onClick={() => refresh()}
      >
        Post a new Recipe
      </button> } 
            </div>
      
        </div>
     
      
      <div className="row grid-style" id="top">
        {currentPots &&  currentPots.map((recipe) => {
            return (
              <div
                className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-5"
                key={recipe.id}
              >
                <div className="blog-box">
                  <div className="post-media">
                    <Link to="#" title="">
                      <span className="detail veg">{recipe.category.name}</span>
                      <img src={recipe.image} alt="" className="img-fluid" />
                      <div className="hovereffect"></div>
                    </Link>
                  </div>

                  <div className="blog-meta big-meta">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <h4>
                      <span onClick={()=>handleClick(recipe)} title="" style={{cursor:"pointer"}}>
                        {recipe.title}
                      </span>
                    </h4>
                    <p>{recipe.description.slice(0, 100)}...</p>
                    <div className="d-flex justify-content-between">
                      <div>
                        <small>
                          <Link to="#" title="">
                            {recipe.createdAt.slice(0, 10)}
                          </Link>
                        </small>
                        <small>
                          <Link to="#" title="">
                            by {recipe.user_name}
                          </Link>
                        </small>
                      </div>
                      {recipe.user_id === loginUser.id && (
                        <div className="d-flex gap-2 ">
                          {showButton && (
                            <>
                          <span className="" style={{ cursor: "pointer" }}>
                            
                            <i
                              className="bi bi-pencil"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdropEdit"
                              onClick={() => onEdit(recipe)}
                            ></i>
                          </span></>)}
                          <span
                            style={{ cursor: "pointer" }}
                            data-target="#deleteModal"
                            data-toggle="modal"
                            onClick={() => onDelete(recipe)}
                          >
                            <i className="bi bi-trash"></i>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
})}
      </div>

      <hr className="invis" />

      <div className="row">
        <div className="col-md-12 text-center">
          <nav aria-label="Page navigation">
           <Pagination
            postPerPage = {postPerPage}
            totalPosts = {recipes.length}
            paginate={paginate}
           />
          </nav>
        </div>
      </div>
    </div>
  );
}

export default RecipeBlock;

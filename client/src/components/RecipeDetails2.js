import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {  useNavigate } from "react-router-dom";
import CommentForm from './CommentForm'
import Comments from './Comments';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8098/api/recipe'

function RecipeDetails() {
    const [commentList, setCommentList] = useState([]);
    const Navigate = useNavigate()
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
  const { recipeData, recipeList } = location.state;
  const handleClick =(recipe)=>{
    Navigate('/layout/singlerecipe',{state:{recipeData:recipe, recipeList:recipeList.slice(0,10)}})
  }
  const fetchComments =()=>{
    axios.get(`/com/all/${recipeData.id}`,{headers:{ Authorization: `Bearer ${token}`}})
        .then(res=>{
            setCommentList(res.data)
        }).catch(error=>{
            console.log(error);
        })
  }
  useEffect(()=>{
    fetchComments()
  },[])
    return (
        < >
 

        <div className="page-title wb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2><i className="fa fa-cutlery bg-red"></i> {recipeData.title} </h2>
                    </div>
                                       
                </div>
            </div>
        </div>

        <section className="section lb">
            <div className="container"> 
                <div className="row">
                    <div className="col-lg-12  d-flex justify-content-center">
                        
                        <img src={recipeData.image} alt='' className="img-fluid" style={{objectFit:"cover", width:"100%", height:"200px"}}/>
                                                
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                        <div className="page-wrapper">
                            <div className="blog-title-area">
                                <ol className="breadcrumb hidden-xs-down">
                                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Blog</Link></li>
                                    <li className="breadcrumb-item active">{recipeData.title}</li>
                                </ol>

                                

                                <h3>{recipeData.title}</h3>

                                <div className="blog-meta big-meta">
                                    <small><Link to="single.html" title="">{recipeData.createdAt.slice(0, 10)}</Link></small>
                                    <small><Link to="blog-author.html" title="">by {recipeData.user_name}</Link></small>
                                    <small><Link to="#" title=""><i className="fa fa-eye"></i> 2344</Link></small>
                                </div>

                            
                            </div>

                            <div className="blog-content">  
                                <p>{recipeData.description}</p>

                                <h3><strong>Instructions</strong></h3>

                                <p>{recipeData.instructions}</p>

                                <p>Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit, suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla finibus volutpat. Integer pulvinar massa vitae ultrices posuere. Proin ut tempor turpis. Mauris felis neque, egestas in lobortis et, sodales non ante. Ut vestibulum libero quis luctus tempus. Nullam eget dignissim massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam et hendrerit nisl massa nunc. </p>

                                   </div>

                        

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="banner-spot clearfix">
                                        <div className="banner-img">
                                            <img src="upload/banner_06.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>


                         
                            <hr className="invis1"/>

                            
                            <Comments commentList={commentList}/>
                            <hr className="invis1"/>

                            <CommentForm fetchComments={fetchComments} recipeData={recipeData}/>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="sidebar">
                            <div className="widget">
                                <h2 className="widget-title">Search</h2>
                                <form className="search-form">
                                    <input type="text" className="form-control" placeholder="Search on the site"/>
                                </form>
                            </div>

                            <div className="widget">
                                <h2 className="widget-title">Recent Posts</h2>
                                <div className="blog-list-widget">
                                    <div className="list-group">

                                        {recipeList && recipeList.map(recipe=>{
                                            return <span onClick={()=>handleClick(recipe)} key={recipe.id} className="list-group-item list-group-item-action flex-column align-items-start "style={{cursor:"pointer"}}>
                                            <div className="w-100 justify-content-between">
                                                <img src={recipe.image} alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">{recipe.title}</h5>
                                                <small>{recipe.createdAt.slice(0, 10)}</small>
                                            </div>
                                        </span>
                                        })}
                                        

                                        
                                    </div>
                                </div>
                            </div>

                         

                        
                        </div>
                    </div>
                </div>
            </div>
        </section>

        

        
        
    </>
    )
}

export default RecipeDetails

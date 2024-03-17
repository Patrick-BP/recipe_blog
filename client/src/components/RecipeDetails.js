import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {  useNavigate } from "react-router-dom";

function RecipeDetails() {
    const Navigate = useNavigate()
    const location = useLocation();
  const { recipeData, recipeList } = location.state;
  const handleClick =(recipe)=>{
    Navigate('singlerecipe',{state:{recipeData:recipe, recipeList:recipeList}})
  }
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

                            <div className="custombox clearfix">
                                <h4 className="small-title">3 Comments</h4>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="comments-list">
                                            <div className="media">
                                                <Link className="media-left" to="#">
                                                    <img src="upload/author.jpg" alt="" className="rounded-circle"/>
                                                </Link>
                                                <div className="media-body">
                                                    <h4 className="media-heading user_name">Amanda Martines <small>5 days ago</small></h4>
                                                    <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean.</p>
                                                    <Link to="#" className="btn btn-primary btn-sm">Reply</Link>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <Link className="media-left" to="#">
                                                    <img src="upload/author_01.jpg" alt="" className="rounded-circle"/>
                                                </Link>
                                                <div className="media-body">

                                                    <h4 className="media-heading user_name">Baltej Singh <small>5 days ago</small></h4>

                                                    <p>Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small.</p>

                                                    <Link to="#" className="btn btn-primary btn-sm">Reply</Link>
                                                </div>
                                            </div>
                                            <div className="media last-child">
                                                <Link className="media-left" to="#">
                                                    <img src="upload/author_02.jpg" alt="" className="rounded-circle"/>
                                                </Link>
                                                <div className="media-body">

                                                    <h4 className="media-heading user_name">Marie Johnson <small>5 days ago</small></h4>
                                                    <p>Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small.</p>

                                                    <Link to="#" className="btn btn-primary btn-sm">Reply</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="invis1"/>

                            <div className="custombox clearfix">
                                <h4 className="small-title">Leave a Reply</h4>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form className="form-wrapper">
                                            
                                            <textarea className="form-control" placeholder="Your comment"></textarea>
                                            <button type="submit" className="btn btn-primary">Submit Comment</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
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
                                            return <span onClick={handleClick} className="list-group-item list-group-item-action flex-column align-items-start "style={{cursor:"pointer"}}>
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

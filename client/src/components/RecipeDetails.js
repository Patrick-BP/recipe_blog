import React from 'react'
import { Link } from 'react-router-dom'

function RecipeDetails() {
    return (
        < >
 

        <div className="page-title wb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2><i className="fa fa-cutlery bg-red"></i> Blog </h2>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Blog</Link></li>
                            <li className="breadcrumb-item active">Food</li>
                        </ol>
                    </div>                    
                </div>
            </div>
        </div>

        <section className="section lb">
            <div className="container"> 
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 d-flex justify-content-center">
                        
                        <img src='/assets/upload/banner_06.jpg' alt='' className="img-fluid"/>
                                                
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
                                    <li className="breadcrumb-item active">Quick n Easy Homemade Pizza Recipe</li>
                                </ol>

                                

                                <h3>Quick n Easy Homemade Pizza Recipe</h3>

                                <div className="blog-meta big-meta">
                                    <small><Link to="single.html" title="">21 July, 2017</Link></small>
                                    <small><Link to="blog-author.html" title="">by Jessica</Link></small>
                                    <small><Link to="#" title=""><i className="fa fa-eye"></i> 2344</Link></small>
                                </div>

                            
                            </div>

                            <div className="blog-content">  
                                <p>In lobortis pharetra mattis. Morbi nec nibh iaculis, <Link to="#">bibendum augue a</Link>, ultrices nulla. Nunc velit ante, lacinia id tincidunt eget, faucibus nec nisl. In mauris purus, bibendum et gravida dignissim, venenatis commodo lacus. Duis consectetur quis nisi nec accumsan. Pellentesque enim velit, ut tempor turpis. Mauris felis neque, egestas in lobortis et,iaculis at nunc ac, rhoncus sagittis ipsum. </p>

                                <h3><strong>Maecenas non convallis quam, eu sodales justo. Pellentesque quis lectus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong></h3>

                                <p>Donec nec metus sed leo sollicitudin ornare sed consequat neque. Aliquam iaculis neque quis dui venenatis, eget posuere felis viverra. Ut sit amet feugiat elit, nec elementum velit. Sed eu nisl convallis, efficitur turpis eu, euismod nunc. Proin neque enim, malesuada non lobortis nec, facilisis et lectus. Ie consectetur. Nam eget neque ac ex fringilla dignissim eu ac est. Nunc et nisl vel odio posuere. </p>

                                <p>Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit, suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla finibus volutpat. Integer pulvinar massa vitae ultrices posuere. Proin ut tempor turpis. Mauris felis neque, egestas in lobortis et, sodales non ante. Ut vestibulum libero quis luctus tempus. Nullam eget dignissim massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam et hendrerit nisl massa nunc. </p>

                                <h3><strong>Nam non velit est. Sed lobortis arcu vitae nunc molestie consectetur. Nam eget neque ac ex fringilla dignissim eu ac est. Nunc et nisl vel odio posuere. </strong></h3>

                                <p>Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit, suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla finibus volutpat. Integer pulvinar massa vitae ultrices posuere. Proin ut tempor turpis. Mauris felis neque, egestas in lobortis et, sodales non ante. Ut vestibulum libero quis luctus tempus. Nullam eget dignissim massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam et hendrerit nisl massa nunc. </p>

                                <p>Morbi pharetra porta consequat. Aenean et diam sapien. <Link to="#">Interdum et malesuada</Link> fames ac ante ipsum primis in faucibus. Pellentesque dictum ligula iaculis, feugiat metus eu, sollicitudin ex. Quisque eu ullamcorper ligula. In vel ex ac purus finibus viverra. Maecenas pretium lobortis turpis. Fusce lacinia nisi in tortor massa nunc.</p>
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
                                            <input type="text" className="form-control" placeholder="Your name"/>
                                            <input type="text" className="form-control" placeholder="Email address"/>
                                            <input type="text" className="form-control" placeholder="Website"/>
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
                                        <Link to="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 justify-content-between">
                                                <img src="upload/blog_square_14.jpg" alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">5 Beautiful buildings you need to before dying</h5>
                                                <small>12 Jan, 2016</small>
                                            </div>
                                        </Link>

                                        <Link to="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 justify-content-between">
                                                <img src="upload/blog_square_12.jpg" alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">Let's make an introduction for creative life</h5>
                                                <small>11 Jan, 2016</small>
                                            </div>
                                        </Link>

                                        <Link to="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 last-item justify-content-between">
                                                <img src="upload/blog_square_11.jpg" alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">Did you see the most beautiful sea in the world?</h5>
                                                <small>07 Jan, 2016</small>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                         

                            <div className="widget">
                                <h2 className="widget-title">Popular Categories</h2>
                                <div className="link-widget">
                                    <ul>
                                        <li><Link to="#">Fahsion <span>(21)</span></Link></li>
                                        <li><Link to="#">Lifestyle <span>(15)</span></Link></li>
                                        <li><Link to="#">Art & Design <span>(31)</span></Link></li>
                                        <li><Link to="#">Health Beauty <span>(22)</span></Link></li>
                                        <li><Link to="#">Clothing <span>(66)</span></Link></li>
                                        <li><Link to="#">Entertaintment <span>(11)</span></Link></li>
                                        <li><Link to="#">Food & Drink <span>(87)</span></Link></li>
                                    </ul>
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

function RecentPosts({handleClick}) {

    const recipeList = JSON.parse(localStorage.getItem('recipes')).slice(0,10).reverse()
    
    return ( <>

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
    
    </> );
}

export default RecentPosts;
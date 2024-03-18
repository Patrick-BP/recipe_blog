import ReactTimeAgo from 'react-time-ago';
import { Link } from 'react-router-dom';
function Comments({commentList}) {
    return ( <>
    <div className="custombox clearfix">
                                <h4 className="small-title">{commentList.length} Comments</h4>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="comments-list">

                                            {commentList && commentList.map(comment=>{
                                                return <div key={comment.id} className="media">
                                                <Link className="media-left" to="#">
                                                    <img src="upload/author.jpg" alt="" className="rounded-circle"/>
                                                </Link>
                                                <div className="media-body">
                                                    <h4 className="media-heading user_name"><small>{comment.createdAt.slice(0, 10)}<ReactTimeAgo date={comment.createdAt.slice(0, 10)} locale="en-US" /></small></h4>
                                                    <p>{comment.comment_text}</p>
                                                    
                                                </div>
                                            </div>
                                            })}
                                            
                                      
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
    
    </> );
}

export default Comments;
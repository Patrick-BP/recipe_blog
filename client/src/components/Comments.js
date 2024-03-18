
import Moment from 'react-moment';
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
                                                    <h4 className="media-heading user_name">{comment.user_name}<small><Moment fromNow>{comment.createdAt}</Moment></small>
                                                    
                                                    </h4>
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
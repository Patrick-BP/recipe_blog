
import { useState, useEffect } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Comments({commentList, fetchComments}) {

    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    const [commentsList, setCommentList] = useState([]);

    const handleDel =(id)=>{
        axios.delete(`http://localhost:8098/api/recipe/com/del/${id}`,{headers:{ Authorization: `Bearer ${token}`}})
        .then(res=>{
            setCommentList(commentList.filter(cmnt=> cmnt.id !== id));
            
        }).catch(error=>{
            console.log(error);
        })
     
    }
     useEffect(()=>{
        fetchComments()
     },[commentsList])
    return ( <>
    <div className="custombox clearfix">
                                <h4 className="small-title">{commentList.length} Comments</h4>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="comments-list">

                                            {commentList && commentList.map(comment=>{
                                                return <div key={comment.id} className="media">
                                                <Link className="media-left" to="#">
                                                    <img src="/assets/images/user.png" alt="" className="rounded-circle mr-1" style={{width:"40px"}} />
                                                </Link>
                                                <div className="media-body">
                                                    <div className='d-flex justify-content-between'>
                                                       <h4 className="media-heading user_name">{comment.user_name}<small><Moment fromNow>{comment.createdAt}</Moment></small></h4>
                                                       {comment.user_id === user.id && <span className='fs-2' title="Delete this comment" style={{cursor:"pointer"}} onClick={()=>handleDel(comment.id)}><i className="bi bi-x fw-bold "></i> </span> } 
                                                    </div>

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
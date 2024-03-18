import { useState } from "react";
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8098/api/recipe'

function CommentForm({recipeData, fetchComments}) {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    const [comment, setComment] = useState("");

    const handleChanges = (event)=>{
        setComment(event.target.value)
      }
      const commentSubmit = (event)=>{
        event.preventDefault();
        axios.post('/com/new',{comment_text:comment, user, recipe:recipeData},{headers:{ Authorization: `Bearer ${token}`}})
            .then(res=>{
                fetchComments()
    
            }).catch(error=>{
                console.log(error);
            })
      } 
    return (  <>
      <div className="custombox clearfix">
                                <h4 className="small-title">Leave a Comment</h4>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form className="form-wrapper" onSubmit={commentSubmit}>
                                            
                                            <textarea className="form-control" name="comment_text" value={comment} onChange={handleChanges} placeholder="Your comment"></textarea>
                                            <button type="submit" className="btn btn-primary">Submit Comment</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
    </>);
}

export default CommentForm;
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../redux/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
axios.defaults.baseURL = 'http://localhost:8098/api/recipe'
function Nav() {
    const [recipeInput, setRecipeInput] = useState({title:"Winter Grain Bowl with Balsamic Dressing", image:"https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Winter-Grain-Bowl.jpg", description:"The BEST Winter Grain Bowl! Roasted root vegetables, earthy grains, dried fruit, dark leafy greens, buttery goat cheese, and lusciously creamy balsamic dressing.", instructions:"his grain bowl is as versatile as it gets."});
    const [category, setCategory] =useState({id:"", name:""});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem("token");
    const [categories, setCategories] = useState([]);
   

    const logoutFunc = ()=>{
        dispatch(logout())
        navigate("/")
    }

    const newRecipeSubmit = (event)=>{
        event.preventDefault()
       
        if (!event.target.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
          try{
            axios.post('/new',{...recipeInput, user, category},{
            headers:{ Authorization: `Bearer ${token}`},
            
          }).then(response=>{
            
            toast.success(response.data,{
                position: "top-center",
                autoClose: 1000,
                onClose: () => {
                    setRecipeInput({title:"", image:"", description:"", instructions:""})
                    navigate("/layout")
                },
            });
          }).catch(error=>{
            toast.error(error.response.data,{
                position: "top-center",
                autoClose: 3000,
    });
          })
          }catch(error){
            console.log(error);
          }
          
          }
    event.target.classList.add('was-validated')
          
    }

    const handleChanges =(event)=>{
            setRecipeInput(prev=> ({...prev, [event.target.name]:event.target.value}))
    }

    useEffect(() => {
        
       let storedCategories = JSON.parse(localStorage.getItem('categories')) ;
       if (storedCategories) {
        setCategories(storedCategories);
      }
      },[]); 

      const refreshData = ()=>{
        let storedCategories = JSON.parse(localStorage.getItem('categories'));
    if (storedCategories) {
      setCategories(storedCategories);
    }
      }
    const handleChangescateg = (e)=>{
        setCategory({id:e.target.selectedIndex , name:e.target.options[e.target.selectedIndex].text})
    }
    
    return (
        <header className="header">
        <div className="container">
            <nav className="navbar navbar-inverse navbar-toggleable-md">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#RecipeListmenu" aria-controls="RecipeListmenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="RecipeListmenu">
                <div className='d-flex justify-content-between w-100'>
                <ul className="navbar-nav  ">
                        <li className="nav-item">
                            <Link className="nav-link" to="/layout">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/layout">Recipes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={refreshData}>Add a Recipe</Link>
                        
                        </li>
                    </ul> 
                    <div className="d-flex gap-3">
                            <div className=" test-light d-flex" >
                            <button className="btn mr-4 text-light" onClick={logoutFunc} >Logout</button>
                            <span className='mr-3 ml-5' style={{fontSize:"15px", lineHeight:"29px", fontWeight:"bold"}}>{user.name.toUpperCase()}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-2.5 13.25c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9M12 12.25A2.25 2.25 0 0 0 14.25 10A2.25 2.25 0 0 0 12 7.75A2.25 2.25 0 0 0 9.75 10A2.25 2.25 0 0 0 12 12.25"/></svg>
                            </div>
                    </div>  

                </div>
                   
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel" >Add a New Recipe</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                
                                <form className=" g-3 needs-validation text-black" onSubmit={newRecipeSubmit} noValidate>
                                                        <div className="col-md-12">
                                                            <label htmlFor="validationCustom01" className="form-label">Title</label>
                                                            <input type="text" className="form-control" id="validationCustom01" name="title" onChange={handleChanges}  value={recipeInput.title} required/>
                                                            <div className="valid-feedback">
                                                            Looks good!
                                                            </div>
                                                            <div className="invalid-feedback">
                                                                Must provide a Title
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label htmlFor="validationCustom02" className="form-label">Image (url)</label>
                                                            <input type="url" className="form-control" id="validationCustom02" name="image" onChange={handleChanges} value={recipeInput.image} required/>
                                                            <div className="valid-feedback">
                                                            Looks good!
                                                            </div>
                                                            <div className="invalid-feedback">
                                                                Must provide an url format to the image
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label htmlFor="validationCustom03" className="form-label">Description</label>
                                                            <textarea type="text" className="form-control" id="validationCustom03" name="description" onChange={handleChanges} value={recipeInput.description} required/>
                                                            <div className="valid-feedback">
                                                            Looks good!
                                                            </div>
                                                            <div className="invalid-feedback">
                                                                Must provide a Description
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label htmlFor="validationCustom04" className="form-label">Instructions</label>
                                                            <textarea type="text" className="form-control" id="validationCustom04" name="instructions" onChange={handleChanges} value={recipeInput.instructions} required/>
                                                            <div className="valid-feedback">
                                                            Looks good!
                                                            </div>
                                                            <div className="invalid-feedback">
                                                                Must provide a Instructions
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label htmlFor="validationCustom05" className="form-label">Category</label>
                                                            <select type="text" className="form-select" aria-label="Default select example"  id="validationCustom05"   name="category" onChange={(e)=>handleChangescateg(e)} value={category.name} required>
                                                               <option >Select a category</option>
                                                                {categories && categories.map((categ,index)=>{
                                                                    return <option key={categ.id} value={categ.id}>{categ.name}</option>
                                                                })}
                                                                
                                                                
                                                            </select>
                                                            <div className="valid-feedback">
                                                            Looks good!
                                                            </div>
                                                            <div className="invalid-feedback">
                                                                Must provide a category
                                                            </div>
                                                        </div>
                                                
                                                            <div className="modal-footer border-top-0">
                                                                <button type="submit" className="btn text-light">Save</button>
                                                                <button type="button" className="btn text-light" data-bs-dismiss="modal">Close</button>
                                                                
                                                            </div>
                                                </form>
                                </div>
                                
                                </div>
                            </div>
                            </div>
                </div>
            </nav>
        </div>
    </header>
    )
}

export default Nav

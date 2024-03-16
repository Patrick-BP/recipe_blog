import React, { useEffect, useState } from 'react'
import RecipeBlock from './RecipeBlock'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

axios.defaults.baseURL ='http://localhost:8098/api/recipe';


function Home() {
    
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const user_id = user.id
    
    
    let [recipes, setRecipes] = useState([]);
    const[recipeToDelete, setRecipeToDelete] = useState(null);
    const[recipeToEdit, setRecipeToEdit] = useState({title:"", image:"", description:"", instructions:"", category:{id:"",name:""}});
    const [categoryList, setCategoryList] = useState([])
    const [category, setCategory] =useState({id:"", name:""});

    const fetchRecipes = async()=>{
        try{
            const response = await  axios.get(`/user/${user_id}`,{
                headers:{ Authorization: `Bearer ${token}`    }
            });
            setRecipes(response.data)
           
        }catch(error){
            console.log(error);
        }
      
            
    }
    const fetchCategories = ()=>{
        try{
             axios.get(`/categ/all`,{
                headers:{ Authorization: `Bearer ${token}`    }
            }).then(res=>{
                
                localStorage.setItem('categories', JSON.stringify(res.data))
                
            }).catch(error=>{
                console.log(error);
            })
            
           
        }catch(error){
            console.log(error);
        }
      
            
    }
    useEffect(()=>{ 
        fetchCategories();
        fetchRecipes();
        
    },[recipeToDelete])

   const handleDelete =(recipe)=>{
    
        setRecipeToDelete(recipe)
   
   }
   const confirmDelete = ()=>{
          axios.delete(`/del/${recipeToDelete.id}`,{headers:{ Authorization: `Bearer ${token}`    }})
        .then(res=>{
           
            fetchRecipes();
        })
        .catch(error=>{
            console.log(error);
        })
   }


   const handleEdit =(recipe)=>{
    setRecipeToEdit(recipe);
    
   }
    const handleChanges = (event)=>{
        
        if(event.target.name === "category"){
            
            setRecipeToEdit(prev=>({...prev, category:{id:event.target.selectedIndex , name:event.target.options[event.target.selectedIndex].text}}))
        }else{

            setRecipeToEdit(prev=>({...prev, [event.target.name]:event.target.value}))
        }
    }


   const updateRecipeSubmit = (event)=>{
    event.preventDefault()
    console.log(recipeToEdit);
        axios.put(`/update/recipe` , recipeToEdit,{headers:{ Authorization: `Bearer ${token}`    }})
        .then(res=>{
            fetchRecipes();
            toast.success(res.data,{
                position: "top-center",
                autoClose: 2000,
                onClose: () => {
                    
                },
            });
        })
        .catch(error=>{
            console.log(error);
        })
        event.target.classList.add('was-validated')
   }
   const handleChangescateg = (e)=>{
    setCategory({id:e.target.selectedIndex , name:e.target.options[e.target.selectedIndex].text})
}

   useEffect(() => {
        
    let storedCategories = JSON.parse(localStorage.getItem('categories')) ;
    if (storedCategories) {
     setCategoryList(storedCategories);
   }
   },[]); 
  
    return (
        <>
        <ToastContainer />
        <section className="section lb text-muted">
            <RecipeBlock recipes={recipes} categoriesList ={categoryList} onDelete={handleDelete} onEdit={handleEdit}/>
            {/* <!--Delete Modal --> */}
            <div className="modal fade" id="deleteModal">
                            <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-danger" id="exampleModalLabel"> Delete a Recipe</h5>
                                
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete <b>{recipeToDelete && recipeToDelete.title}</b> ?</p>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary text-light " data-dismiss="modal"  id="close-modal">No</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={confirmDelete}>Yes</button>
                            </div>
                            </div>
                            </div>
            </div>

             {/* <!--Update Modal --> */}
             <div className="modal fade" id="staticBackdropEdit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Recipe</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                
                                <form className=" g-3 needs-validation text-black" onSubmit={updateRecipeSubmit} noValidate>
                                                        <div className="col-md-12">
                                                            <label htmlFor="validationCustom01" className="form-label">Title</label>
                                                            <input type="text" className="form-control" id="validationCustom01" name="title" onChange={handleChanges}  value={ recipeToEdit.title} required/>
                                                            <div className="valid-feedback">
                                                            Looks good!
                                                            </div>
                                                            <div className="invalid-feedback">
                                                                Must provide a Title
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label htmlFor="validationCustom02" className="form-label">Image (url)</label>
                                                            <input type="url" className="form-control" id="validationCustom02" name="image" onChange={handleChanges} value={ recipeToEdit.image} required/>
                                                            <div className="valid-feedback">
                                                            Looks good!
                                                            </div>
                                                            <div className="invalid-feedback">
                                                                Must provide an url format to the image
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label htmlFor="validationCustom03" className="form-label">Description</label>
                                                            <textarea type="text" className="form-control" id="validationCustom03" name="description" onChange={handleChanges} value={ recipeToEdit.description} required/>
                                                            <div className="valid-feedback">
                                                            Looks good!
                                                            </div>
                                                            <div className="invalid-feedback">
                                                                Must provide a Description
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label htmlFor="validationCustom04" className="form-label">Instructions</label>
                                                            <textarea type="text" className="form-control" id="validationCustom04" name="instructions" onChange={handleChanges} value={ recipeToEdit.instructions} required/>
                                                            <div className="valid-feedback">
                                                            Looks good!
                                                            </div>
                                                            <div className="invalid-feedback">
                                                                Must provide a Instructions
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label htmlFor="validationCustom05" className="form-label">Category</label>
                                                            <select   className="form-select"  id="validationCustom05"  name="category" onChange={handleChanges} value={recipeToEdit.category.name} required>
                                                            <option >Select pizza size</option>
                                                                {categoryList && categoryList.map((categ,index)=>{
                                                                    return <option key={index} value={categ.id}>{categ.name}</option>
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
        </section>
    </>

    )
}

export default Home

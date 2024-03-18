import React, { useEffect, useState } from 'react'
import RecipeBlock from './RecipeBlock'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

axios.defaults.baseURL ='http://localhost:8098/api/recipe';


function Feeds() {
    
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const user_id = user.id
    
    
    let [recipes, setRecipes] = useState([]);
    const[recipeToDelete, setRecipeToDelete] = useState(null);
    const[recipeToEdit, setRecipeToEdit] = useState({title:"Banana-chip chocolate cake recipe", image:"https://html.design/demo/recipelist/upload/blog_square_05.jpg", description:"Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.", instructions:"Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.", category:{id:"",name:""}});
    const [categoryList, setCategoryList] = useState([])
    

    const fetchRecipes = async()=>{
        try{
            const response = await  axios.get(`/all`,{
                headers:{ Authorization: `Bearer ${token}`    }
            });
            setRecipes(response.data.reverse())
           
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
                setCategoryList(res.data);
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

   useEffect(() => {
        
    let storedCategories = JSON.parse(localStorage.getItem('categories')) ;
   
     setCategoryList(storedCategories);
    
   
   },[]); 

   const [filter, setFilter] = useState("")
   const [searchResult, setSearchResult] = useState(recipes)
 
 const search = (event)=>{
     setFilter(event.target.value)
 }
 useEffect(()=>{
  
            setSearchResult(recipes);
           
        
    },[recipes])
 
 useEffect(()=>{

     if(filter === "all" || filter === ""){
         setSearchResult(recipes);
     }else{
        let newRecipeList = recipes.filter(res => res.category.id == filter)
         setSearchResult(newRecipeList);
     }
     
 },[filter])
      
    return (
        <>
        <ToastContainer />
        <section className="section lb text-muted">
          
            <div className='container mb-5 pt-5'>
            <select type="text" className="form-select fs-2   " aria-label="Default select example"  id="validationCustom05"   name="category" onChange={search}  required>
                         <option value="all">search By category</option>
                         <option value="all">All Recipes</option>
                         {categoryList && categoryList.map((categ,index)=>{
                                      return <option key={index} value={categ.id}>{categ.name}</option>
                          })}
                                                                
                                                                
            </select>
            </div>
           <RecipeBlock recipes={searchResult} categoriess={categoryList} showButton ={false}  onDelete={handleDelete} onEdit={handleEdit}/>
                


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

            
        </section>
    </>

    )
}

export default Feeds

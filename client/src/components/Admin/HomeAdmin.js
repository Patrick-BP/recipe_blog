import React, { useEffect } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8098/api';

export default function HomeAdmin() {

  const numberOfUsers = JSON.parse(localStorage.getItem('users'));
  const numberOfRecipes = JSON.parse(localStorage.getItem('recipes'));
  const numberOfCategories = JSON.parse(localStorage.getItem('categories'));

  const token = localStorage.getItem('token')

  const fetchUsers = ()=>{
    axios.get('/user/all',{headers:{ Authorization: `Bearer ${token}`}})
    .then(res=>{
      localStorage.setItem("users", JSON.stringify(res.data))
    }).catch(error=>{
      console.log(error);
    })
  }
  const fetchRecipes = ()=>{
    axios.get('/recipe/all',{headers:{ Authorization: `Bearer ${token}`}})
    .then(res=>{
      localStorage.setItem("recipes", JSON.stringify(res.data))
    }).catch(error=>{
      console.log(error);
    })
  }
  const fetchCategories = ()=>{
    axios.get('/recipe/categ/all',{headers:{ Authorization: `Bearer ${token}`}})
    .then(res=>{
      localStorage.setItem("categories", JSON.stringify(res.data))
    }).catch(error=>{
      console.log(error);
    })
  }
  useEffect(()=>{
    fetchCategories()
    fetchRecipes()
    fetchUsers()
  },[])
 
  return (
    <div className='container  '>
            <h1 className='my-5'>DashBoard</h1>

            <div className='d-flex flex-wrap gap-5 justify-content-between'>
                <div className='bg-warning w-25 text-center p-3'>
                    <div><img src='/assets/images/users.png'/></div>
                    <div className='mt-5'><h1>{numberOfUsers.length}</h1></div>
                    <div className='fs-4 mb-4 text-bg-info  '>Number of Users</div>
                    
                </div>
                <div className='bg-success   w-25 text-center p-3'>
                    <div><img src='/assets/images/food.png'/></div>
                    <div className='mt-5'><h1>{numberOfRecipes.length}</h1></div>
                    <div className='fs-4 mb-4 text-bg-light'>Total Recipes</div>
                </div>
                <div className='bg-primary  w-25 text-center p-3'>
                    <div><img src='/assets/images/tag.png'/></div>
                    <div className='mt-5'><h1>{numberOfCategories.length}</h1></div>
                    <div className='fs-4 mb-4 text-bg-success'>Total Categories</div>
                </div>
            </div>
    </div>

  )
}

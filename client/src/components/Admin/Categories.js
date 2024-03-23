import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
// axios.defaults.baseURL = 'http://localhost:8098/api';

export default function Categories() {
    const categories = JSON.parse(localStorage.getItem('categories'));
    const [input, setInput] = useState("");
    const token = localStorage.getItem('token')
    const[search, setSearch] = useState([])
    const [searchInput, setSearchInput] = useState("");

    
   
    const deleteCateg = (id)=>{
        axios.delete(`http://localhost:8098/api/admin/categ/del/${id}`,{headers:{ Authorization: `Bearer ${token}`}})
        .then(res=>{
            toast.success(res.data,{
                position: "top-center",
                autoClose: 2000,
                onClose: () => {
                    
           setSearch(categories.filter(categ=>categ.id !== id))
                },
            });
            
        }).catch(error=>{
            console.log(error);
        })
    }

    const handleInput = (event)=>{
        setInput(event.target.value)
    }
    const submitCategory = (event)=>{
        event.preventDefault()
        axios.post('http://localhost:8098/api/admin/categ/new',{name:input },{headers:{ Authorization: `Bearer ${token}`}})
        .then(res=>{
            setSearch(prev=>[...prev,{name:input}])
            toast.success(res.data,{
                position: "top-center",
                autoClose: 2000,
                onClose: () => {
                    
                    
                    setInput("")
                },
            });
        }).catch(error=>{
            toast.error(error,{
                position: "top-center",
                autoClose: 2000,
                onClose: () => {
                    
                    
                },
            });
        })
    }
    useEffect(()=>{
        setSearch(categories)
    },[])
    useEffect(()=>{
        setSearch(categories.filter(categ=> categ.name.toLowerCase().includes(searchInput.toLowerCase())))
    },[searchInput])


  return (
    <div className='container'>
         <ToastContainer />
    <h1 className='my-5'> Manage Categories</h1>
<div className='d-flex justify-content-between mb-5'>
        <form onSubmit={submitCategory}>
                <input className='form-control' value={input} onChange={handleInput} placeholder = "category Name"/>
                <button className='btn text-light'>Add a new category</button>
            </form>

       <div><input type="search" className='form-control'  onChange={(e)=> setSearchInput(e.target.value)} placeholder = "search" /></div> 
</div>

    
      <table className="table table-striped table-hover">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">Delete</th>
    
  </tr>
</thead>
<tbody>
{search && search.map((categ,index)=>{
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{categ.name}</td>
                <td><i className="bi bi-trash-fill" onClick={()=>deleteCateg(categ.id)} style={{cursor:"pointer"}}></i></td>
            </tr>
        )
    })}
  
</tbody>
</table>
      </div>
  )
}

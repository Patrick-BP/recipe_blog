import React from 'react'

export default function Categories() {
    const categories = JSON.parse(localStorage.getItem('categories'))
  return (
    <div className='container'>
        
    <h1 className='my-5'> Manage Categories</h1>
<div className='d-flex justify-content-between mb-5'>
        <form>
                <input className='form-control' placeholder = "category Name"/>
                <button className='btn text-light'>Add a new category</button>
            </form>

       <div><input type="search" className='form-control' placeholder = "search" /></div> 
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
{categories && categories.map((categ,index)=>{
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{categ.name}</td>
                <td><i className="bi bi-trash-fill"></i></td>
            </tr>
        )
    })}
  
</tbody>
</table>
      </div>
  )
}

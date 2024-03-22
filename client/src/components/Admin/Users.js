import React, { useEffect, useState }  from 'react'

const handleRoleChanges =(id)=>{
    console.log(id);
}

export default function Users() {

    const users = JSON.parse(localStorage.getItem('users'));
    const[search, setSearch] = useState([])
    const [searchInput, setSearchInput] = useState("")

    useEffect(()=>{
        setSearch(users)
    },[])
    useEffect(()=>{
        setSearch(users.filter(categ=> categ.name.toLowerCase().includes(searchInput.toLowerCase())))
    },[searchInput])
  return (
    <div className='container'>
        
      <h1 className='my-5'> Manage Users</h1>

      <div className='d-flex justify-content-between mb-5'>


       <div><input type="search" className='form-control' onChange={(e)=> setSearchInput(e.target.value)} placeholder = "search" /></div> 
</div>  

        <table className="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
      <th scope="col">Change Role</th>
    </tr>
  </thead>
  <tbody>

    {search && search.map((user,index)=>{
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.roles[0].authority}</td>
                <td><label className="switch">
                    <input type="checkbox" onChange={()=>handleRoleChanges(user.id)}/>
                    <span className="slider round"></span>
                    </label>
                </td>
            </tr>
        )
    })}
    
    
    
  </tbody>
</table>
        </div>

  )
}

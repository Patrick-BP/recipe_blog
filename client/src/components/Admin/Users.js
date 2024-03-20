import React from 'react'

export default function Users() {

    const users = JSON.parse(localStorage.getItem('users'))
    
  return (
    <div className='container'>
        
      <h1 className='my-5'> Manage Users</h1>

      <div className='d-flex justify-content-between mb-5'>


       <div><input type="search" className='form-control' placeholder = "search" /></div> 
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

    {users && users.map((user,index)=>{
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.roles[0].authority}</td>
                <td><input type="checkbox" checked data-toggle="toggle" /></td>
            </tr>
        )
    })}
    
    
    
  </tbody>
</table>
        </div>

  )
}

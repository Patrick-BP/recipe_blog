import React, { useEffect, useState }  from 'react'
import axios from 'axios'


export default function Users() {

    const [users, setUsers] = useState([])
    const[search, setSearch] = useState([])
    const [searchInput, setSearchInput] = useState("");
    const token = localStorage.getItem('token')

    const fetchUsers = ()=>{
      axios.get('http://localhost:8098/api/user/all',{headers:{ Authorization: `Bearer ${token}`}})
      .then(res=>{
       
       setSearch(res.data)
      }).catch(error=>{
        console.log(error);
      })
    }

    useEffect(()=>{
      fetchUsers();
        
    },[])

    useEffect(()=>{
        setSearch(users.filter(categ=> categ.name.toLowerCase().includes(searchInput.toLowerCase())))
    },[searchInput]);

    const [role, setRole] = useState('User'); // Default role is User

    const handleRoleChanges = (id, role) => {
      if(role === 'USER'){
        axios.put(`http://localhost:8098/api/admin/user/${id}`,[{roleId: 1, authority: "ADMIN"}],{headers:{ Authorization: `Bearer ${token}`}})
      .then(res=>{
       
        fetchUsers();
      }).catch(error=>{
        console.log(error);
      })
      }else if(role === 'ADMIN'){
        axios.put(`http://localhost:8098/api/admin/user/${id}`, [{roleId: 2, authority: "USER"}],{headers:{ Authorization: `Bearer ${token}`}})
        .then(res=>{
         
          fetchUsers();
        }).catch(error=>{
          console.log(error);
        })

      }
      
    
    };
    
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
               {user.id !== 1 ? <td><label className="switch">
                   <input type="checkbox" checked={user.roles[0].authority === "ADMIN"} onChange={()=>handleRoleChanges(user.id, user.roles[0].authority)}/>
                    <span className="slider round"></span>
                    </label>
                </td>: <td></td> }
            </tr>
        )
    })}
    
    
    
  </tbody>
</table>
        </div>

  )
}

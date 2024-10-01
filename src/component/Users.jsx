import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const[users,setUsers] = useState(loadedUsers);
    const handleDelete = id =>{
     fetch(`http://localhost:3000/user/${id}`,{
        method:"Delete"
     })
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
        if(data.deletedCount>0)
        {
            console.log('deleted successfully');
            //Remove the users from the UI
            const remainingUsers = users.filter(user => user._id !== id);
            setUsers(remainingUsers);
        }
     })
    }
    return (
        <div>
            <h4 className="text-center">Users Information: Number of total user is {loadedUsers.length}</h4>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Last logged In</th>
                            <th>Action</th>
                        </tr>
                    </thead> 
                    {
                        users.map(user => 
                            <tbody key={user._id}>
                            <tr>
                              <td>{user.email}</td>
                              <td>{user.password}</td>
                              <td>{user.lastLoginAt}</td>
                              <td>
                                <button onClick={()=>handleDelete(user._id)} className="btn">X</button>
                              </td>
                            </tr>
                          </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default Users;
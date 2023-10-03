import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { createUser } from '../state/features/userDetailSlice';


function AddPost() {
  const [user, setUser] = useState({name:"", email:"", age:"", gender:"male"})
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnchange = (e)=>{
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleAddSubmit = (e)=>{
    e.preventDefault();
    console.log(user);
    dispatch(createUser(user));
    setUser({name:"", email:"", age:"", gender:""});
    navigate("/allpost");
  }

  return (
   <div className="w-50 m-auto">
   <h2 className="my-3">Add New User</h2>
   <form onSubmit={handleAddSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name="name" onChange={handleOnchange} required/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name="email" onChange={handleOnchange} aria-describedby="emailHelp" required/>
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input type="text" className="form-control" pattern="[0-9]+" id="age" name="age" onChange={handleOnchange} required/>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gender" value="male" id="male" onChange={handleOnchange} required/>
        <label className="form-check-label" htmlFor="male">
          male
        </label>
      </div>
      <div className="form-check mb-3">
        <input className="form-check-input" type="radio" name="gender" value="female" id="female" onChange={handleOnchange} required/>
        <label className="form-check-label" htmlFor="female">
          female
        </label>
      </div>
      
      <button type="submit" className="btn btn-primary">Add</button>
   </form>
   </div>
  )
}

export default AddPost
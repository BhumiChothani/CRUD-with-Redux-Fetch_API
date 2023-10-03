import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { updateUser } from '../state/features/userDetailSlice';

function Update() {
    const {id} = useParams();
    const [ user, setUser] = useState('');
    const users = useSelector(state => state.app.users);
    const singleUser = users.filter((users) => users.id == id);
    useEffect(()=>{
      setUser(singleUser[0]);
    }, [])
    
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleOnchange = (e)=>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleUpdateSubmit = (e)=>{
        e.preventDefault();
        const data = {id: id, name: user.name, email: user.email, age: user.age, gender: user.gender};
        dispatch(updateUser(data));
        navigate('/allpost');
    } 
    
 return (
    <div className="w-50 m-auto">
   <h2 className="my-3">Add New User</h2>
   <form onSubmit={handleUpdateSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name="name" onChange={handleOnchange} value={user && user.name} required/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name="email" onChange={handleOnchange} value={user && user.email} aria-describedby="emailHelp" required/>
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input type="text" className="form-control" pattern="[0-9]+" id="age" name="age"  onChange={handleOnchange} value={user && user.age} required/>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gender" value="male" id="male" onChange={handleOnchange} checked={user && user.gender == 'male'} required/>
        <label className="form-check-label" htmlFor="male">
          male
        </label>
      </div>
      <div className="form-check mb-3">
        <input className="form-check-input" type="radio" name="gender" value="female" id="female" onChange={handleOnchange} checked={ user && user.gender == 'female'} required/>
        <label className="form-check-label" htmlFor="female">
          female
        </label>
      </div>
      
      <button type="submit" className="btn btn-primary">Update</button>
   </form>
   </div>
  )
}

export default Update
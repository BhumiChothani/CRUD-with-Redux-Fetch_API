import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { searchByName } from '../state/features/userDetailSlice';

function Navbar() {
  const allUsers = useSelector(state=> state.app.users);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSearchOnChange = (e)=>{
    setText(e.target.value);
  }
  useEffect(()=>{
    dispatch(searchByName(text));
  }, [text])
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">UserDetail</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >Create Post</Link>
                </li>
                <li className="nav-item">
                <Link to="/allpost" className="nav-link" >All Post<strong className="text-primary">({allUsers.length})</strong></Link>
                </li>  
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" onChange={handleSearchOnChange} placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
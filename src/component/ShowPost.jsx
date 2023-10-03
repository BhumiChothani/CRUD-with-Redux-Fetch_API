import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser, showUser } from '../state/features/userDetailSlice';
import CustomModal from './CustomModal';

function ShowPost() {
  const {users, errors,loading, searchtext} = useSelector(state => state.app);
  const [radioData, setRadioData] = useState("");
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(false);
  const [popupUId, setPopupUId] = useState("");
  useEffect(()=>{
    dispatch(showUser());
  },[]);

  const handleDeleteClick = (id)=>{
    dispatch(deleteUser(id));
  }

  if(loading){
    return (<h2 className="text-center mt-3">Loading...</h2>)
  }
  if(errors !== null){
    console.log("error" + errors);
  }
  return (
    <>
    {popup  && <CustomModal setPopup={setPopup} popupUId={popupUId}/>}

    <h2 className="text-center my-3">All Users</h2>
    <div className="text-center mb-2">
      <input className="form-check-input me-1" type="radio" name="gender" id="all" onChange={(e)=>setRadioData('')} checked={radioData == ''}/>
      <label className="form-check-label me-3" htmlFor="all">All</label>
      <input className="form-check-input me-1" type="radio" name="gender" id="male" value='male' onChange={(e)=>setRadioData(e.target.value)} checked={radioData == 'male'}/> 
      <label className="form-check-label me-3" htmlFor="male">Male</label>
      <input className="form-check-input me-1" type="radio" name="gender" id="female" value='female' onChange={(e)=>setRadioData(e.target.value)} checked={radioData == 'female'}/>
      <label className="form-check-label" htmlFor="female">Female</label>
    </div>

    <div className="row d-flex justify-content-center gap-3">
    {users &&
      
      users.filter((ele)=> {
        if(searchtext.length == 0){
          return ele
        }
        else{
          return ele.name.toLowerCase().includes(searchtext.toLowerCase())
        }
      })
      .filter((ele)=> {
        if(radioData === 'male'){
          return ele.gender === radioData
        }
        else if(radioData === 'female'){
           return ele.gender === radioData
        }
        else{
          return ele
        }
      })
      .map((user, index) =>{ return <div key={index} className="card col-sm-8 col-lg-5">
        <div className="card-body px-5">
          <p><strong>Name: </strong>{user.name}</p>
          <p><strong>Email: </strong>{user.email}</p>
          <p><strong>Gender: </strong>{user.gender}</p>
          <div className="text-center">
            <button className="btn btn-primary mx-1 my-1" onClick={()=>{[setPopup(true),setPopupUId(user.id)]}}>View</button>
            <Link to={`/update/${user.id}`} className="btn btn-primary mx-1 my-1">Update</Link>
            <button className="btn btn-primary mx-1 my-1" onClick={()=>{handleDeleteClick(user.id)}}>Delete</button>
          </div>
        </div>
      </div>
      })
    }
    </div>
  </>
  )
}

export default ShowPost
import React from 'react'
import { useSelector } from 'react-redux';
import './CustomModal.css'

function CustomModal(props) {
    const {popupUId, setPopup} = props;
    const user = useSelector(state=>state.app.users);
    const cuser = user.filter(user=> user.id == popupUId);
  return (
    <div className="modalwrapper">
        <div className="modalbox">
        <p><strong>Id: </strong>{cuser[0].id}</p>
          <p><strong>Name: </strong>{cuser[0].name}</p>
          <p><strong>Email: </strong>{cuser[0].email}</p>
          <p><strong>Age: </strong>{cuser[0].age}</p>
          <p><strong>Gender: </strong>{cuser[0].gender}</p>
          <div className="text-center"><button className="btn btn-primary mt-4" onClick={()=>setPopup(false)}>Close</button></div>
        </div>
    </div>
  )
}

export default CustomModal
import React from 'react';
import { useGlobalContext } from '../Context';
import { useNavigate } from 'react-router-dom';
import '../CSSFILE/logout.css'

export default function Logout() {
  const navigate = useNavigate();
  const { logout } = useGlobalContext();
  const men = ()=>{
    navigate('/men')
  }
  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <>
    <div className="logout">
        <div className="bord"><p>Are your sure to Logout</p></div>
        <div className="buttons">
            <button className='button' type='logout' onClick={handleLogout}>
            Logout
            </button>
            <button className='button' onClick={men}>cancle</button>
        </div>
    </div>
    </>
  );
}

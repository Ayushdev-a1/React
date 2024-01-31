import React, { useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../CSSFILE/Login.css';
import Avatar from '../assets/avatar.png';
import { MdOutlineMail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useGlobalContext } from '../Context';

export default function Login({ setHideFooter }) {
  const navigate =useNavigate()
  const { Login, Loading, data, setData ,isAuthenticated } = useGlobalContext();
  
  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
 
  const onSubmit = async (e) => {
    e.preventDefault();
    await Login();
  };
  if (isAuthenticated) {
    navigate('/men')
  }
  useEffect(() => {
    setHideFooter(true);
    return () => setHideFooter(false);
  }, [setHideFooter]);

  return (
    <>
      {Loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <div className="form">
            <img src={Avatar} alt="Avatar" />
            <form className="input-fields" method="post" onSubmit={onSubmit}>
              <div className="email">
                <i>
                  <MdOutlineMail />
                </i>
                <input onChange={handleChange} value={data.email} type="text" name="email" placeholder="Email" />
              </div>
              <div className="password">
                <i>
                  <RiLockPasswordFill />
                </i>
                <input onChange={handleChange} value={data.password} type="password" name="password" placeholder="Password"/>
              </div>
              <button className="bt" type="submit">
                Shopping
              </button>
              <div>  New user <Link to={'/register'}>Click here</Link></div>
            </form>
          </div>
        </>
      )}
    </>
  );
}

import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../Context'
import Avatar from '../assets/avatar.png';
import { GrUserNew } from "react-icons/gr";
export default function Signup() {
  const { Loading, setData, data, Signup } = useGlobalContext();
  const navigate = useNavigate()
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const register = async (e) => {
    e.preventDefault();
    await Signup();
  }
  const move = () => {
    if (Signup) {
      navigate('/login')
    }
  }
  return (
    <>
      {Loading ?
        (<div className="loader"></div>) :
        (
          <div className='form'>
            <img src={Avatar} alt="Avatar" />
            <form className='input-fields' onSubmit={register} method='post'>
              <input onChange={handleOnChange} value={data.name} name="name" type="text" placeholder='Name' />
              <input onChange={handleOnChange} value={data.Number} name="Number" type="tel" pattern="[0-9]*" placeholder="Phone" />
              <input onChange={handleOnChange} value={data.email} name="email" type="email" placeholder='email' />
              <input onChange={handleOnChange} value={data.password} name="password" type="password" placeholder='password' />
              <input onChange={handleOnChange} value={data.confirmpassword} name="confirmpassword" type="password" placeholder='confirm password' />

              <button className="bt" onClick={move} type="submit">
                Shopping
              </button>
            </form>
            Already Have an account <Link to={'/login'}>Click Here</Link>
          </div>
        )}
    </>
  )
}

import React, { useContext } from 'react'
import logo from '../assets/finalProject assets/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../Context/AuthContext'

export default function Navbar() {
  let navigate = useNavigate()
  let { setLogin, isLogin } = useContext(auth)


  function LogOut() {
    localStorage.removeItem("userToken")
    setLogin(null)
    navigate("/login")
  }
  return (



    <nav className="bg-gray-100 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="" />
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto">
          {isLogin ? <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <NavLink className={"text-gray-400 py-2 px-1"} to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink className={"text-gray-400 py-2 px-1"} to={"/products"}>Products</NavLink>
            </li>
            {/* <li>
              <NavLink className={"text-gray-400 py-2 px-1"} to={"/categories"}>Categories</NavLink>
            </li> */}
            <li>
              <NavLink className={"text-gray-400 py-2 px-1"} to={"/brand"}>Brands</NavLink>
            </li>
            <li>
              <NavLink to={"/cart"}>Cart <i className='fa-solid fa-cart-shopping'></i></NavLink>
            </li>
          </ul> : ''}
        </div>
        <div >
          <ul className="flex gap-10">
            
            <li>
              <a href="#"><i className='fab fa-facebook-f mx-1 text-gray-500'></i></a>
              <a href="#"><i className='fab fa-twitter mx-1 text-gray-500'></i></a>
              <a href="#"><i className='fab fa-google mx-1 text-gray-500'></i></a>
              <a href="#"><i className='fab fa-instagram mx-1 text-gray-500'></i></a>
            </li>
    
            {isLogin ? <li className='cursor-pointer' onClick={LogOut}> LogOut {isLogin ? <b className='text-green-600 mx-6'>Hi {isLogin.name}</b> : ''}</li> :
              <li>
                <NavLink to={"/login"} className={"mx-2 text-gray-500"}>Login</NavLink>
                <NavLink to={"/register"} className={"mx-2 text-gray-500"}>Register</NavLink>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>



  )
}

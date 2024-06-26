import { NavLink } from 'react-router-dom'
import logo from  '../../assets/logo.svg'
import { useContext } from 'react'
import { AuthContext } from '../../Context/Context'


function Navbar() {

  const {user, logout} = useContext(AuthContext)

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/login'}>Login</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to={'/'}>Home</NavLink></li>
   {!user &&  <li><NavLink to={'/login'}>Login</NavLink></li>}
    </ul>
  </div>
  <div className="navbar-end">
    
  {user && <div className="space-y-6">
    <div className="flex items-center gap-x-2">
        <img className="object-cover w-12 h-12 rounded-full" src={user?.photoURL} alt=""/>
        <div>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{user?.displayName}</h1>
            <a href='' onClick={logout} className="text-xl font-semibold text-red-700 capitalize dark:text-white">Logout</a>
        </div>
    </div>
</div>}

  </div>
</div>
  )
}

export default Navbar
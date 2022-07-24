import React, { useState } from "react";
import { Link, NavLink, useNavigate, Outlet } from "react-router-dom";

const NavBar = () => {

    const [menuActive, setMenuActive] = useState(false)

    const activeMenu = () => {
        setMenuActive(!menuActive)
    }

    const navigate = useNavigate()

    const goToHome = () => navigate('/')


  return (
    <>
    <div className='nav_container'>
                <div className="nav_logo" onClick={goToHome}><i className='bx bx-baguette'></i></div>
        {

            menuActive 

            ?

        <nav className='navbar'>
            <ul className="nav_list">
                <li className="menu_links">
                    <NavLink onClick={activeMenu} to='/' className='navbar__links'>
                        About Me
                    </NavLink>
                </li>
                <li className="menu_links">
                    <NavLink onClick={activeMenu} to='/skills' className='navbar__links'>
                        Skills
                    </NavLink>
                </li>
                <li className="menu_links">
                    <NavLink onClick={activeMenu} to='/proyects' className='navbar__links'>
                        Proyects
                    </NavLink>
                </li>
                <li className="menu_links">
                    <NavLink onClick={activeMenu} to='/contact' className='navbar__links'>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
            :
            
                <div onClick={activeMenu} className="ham_menu"><i className='bx bx-menu'></i></div>
            
        }
        </div>
        <Outlet/>
    </>
  )
}

export default NavBar
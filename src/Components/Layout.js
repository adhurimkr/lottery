import React from 'react';
import { NavLink } from "react-router-dom";
import './Layout.css'

export const Layout = ({children}) => {
  return (
    <>
    <header>
        <ul>
            <NavLink
             to="/"
             className={({ isActive }) =>
              isActive ? 'active' : undefined
            }
            >Home
            </NavLink>

            <NavLink
             to="/winners"
             className={({ isActive }) =>
              isActive ? 'active' : undefined
            }
             >Winners
             </NavLink>

            <NavLink 
            to="/session-players"
            className={({ isActive }) =>
              isActive ? 'active' : undefined
            }
            >Session Players
            </NavLink>

            <NavLink 
            to="/stats"
            className={({ isActive }) =>
              isActive ? 'active' : undefined
            }
            >Statistics
            </NavLink>
        </ul>
    </header>
    <main>{children}</main>
    </>
  )
}

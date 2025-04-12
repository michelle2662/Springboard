import React from 'react'
import { NavLink , Outlet,useLoaderData } from 'react-router-dom'

export default function NavBar() {

  const celestialObjects = useLoaderData();

  return (
    <div className="nav-bar">
      <header>
        <nav>
          <NavLink to = "/">Home </NavLink>
          {celestialObjects.map(celestial => (
            <NavLink key = {celestial.id} to= {`/content/${celestial.id}`}> {celestial.title}</NavLink>
          ))}
        </nav>
      </header>

      <main>
        <Outlet context={{ celestialObjects }}/>
      </main>
    </div>
  )
}



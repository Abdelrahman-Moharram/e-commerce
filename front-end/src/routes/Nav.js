import React from 'react';
import {NavLink} from 'react-router-dom'
import './nav.css'
const Nav = ({handleToggler}) =>{

    

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
                
                <div className="col-lg-1"></div>

                <NavLink  className="navbar-brand col-lg-2" to="/" >Collections</NavLink>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="col-lg-7 d-flex">

                        <NavLink  className="nav-container d-flex mx-5 p-1"  to="/category">
                            <span className="line-underword"></span>
                            <div className=" navLink">
                                Category
                            </div>


                        </NavLink>

                        <NavLink  className="nav-container d-flex mx-5 p-1"  to="/category" style={{alignItems: "center"}}>
                        <span className="line-underword"></span>
                            <div className=" navLink">
                                Category
                            </div>

                        </NavLink>
                        <NavLink  className="nav-container d-flex mx-5 p-1"  to="/shops" style={{alignItems: "center"}}>
                            <span className="line-underword"></span>
                            <div className=" navLink">
                                shops
                            </div>

                        </NavLink>



                    </div>

                    
                </div>
                <div className="btn btn-info">
                            Signup
                    </div>


                    <div className="btn btn-warning mx-2 " onClick={handleToggler}>
                            Login
                    </div>
              </div>
      </nav> 
    )
}

export default Nav

// <nav className="navbar navbar-dark bg-dark">
          
            





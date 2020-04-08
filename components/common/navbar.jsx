import React from "react";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark-custom">
      
        <a className="navbar-brand" href="#">
          EstateC
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Properties
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Rentals
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="/lists">
                  All
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>

            
          </ul>
          <form className="form-inline m-auto mt-md-0">
            <input
              className="form-control mr-sm-2 rounded-pill"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
           
          </form>

          <ul className="navbar-nav mr-0">
           {props.user === null &&
           <React.Fragment>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">
                Signup
              </a>
            </li>
            </React.Fragment>
           }
           {props.user !== null &&
           <li className="nav-item">
              <a className="nav-link" href="/account">
               {props.user.username}
              </a>
            </li>
           
           }
          </ul>
        </div>
     
    </nav>
  );
}

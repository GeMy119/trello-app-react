import React from "react";
import { Link } from "react-router-dom";
// import { tokenContext } from './../../Context/tokenContext';
export default function Navbar() {
//   let {token ,setToken}= useContext(tokenContext);
//  let navigate = useNavigate();
 
//  function logOut(){
//   localStorage.removeItem("userToken");
//   setToken(null)
//   navigate("/login")
//  }

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg nav-bg navbar-dark">
          <div className="container">
            <Link className="navbar-brand fs-4 fw-bolder" to={"/home"}>
            <i class="fa-brands fa-trello text-white me-2" ></i> Trello
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
               <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to={"/profile"}>
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to={"/register"}>
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to={"/login"}>
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

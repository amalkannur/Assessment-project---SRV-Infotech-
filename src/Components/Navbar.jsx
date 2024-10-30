import React from 'react'
import "../Components/Components.scss"
import KeralaToddyLogo from "../assets/Group 2039.png"
import Frame54 from "../assets/Frame 54.png"
import Widgets from  "../assets/widgets.png"
import Settings from "../assets/settings_accessibility.png"
import Globe from "../assets/globe.svg"
function Navbar() {
  return (
    <div className='Navbar'>
        
        <>
        <nav className="navbar  navbar-expand-xl justify-content-end pe-2 pe-md-5">
            
             <div className="row w-100"> 
             <div className="col-md-4 col-9"> 
             <img className='keralatoddylogo' src={KeralaToddyLogo} alt="" />
             </div>
             <div className="col-md-8 col-3 d-flex justify-content-end p-relative"> 
             
   
             <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#navbarOffcanvas"
                aria-controls="navbarOffcanvas"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div
                className="offcanvas offcanvas-end "
                id="navbarOffcanvas"
                tabIndex={-1}
                aria-labelledby="offcanvasNavbarLabel"
            >
             
                <div className="offcanvas-body">
                <button
                    type="button"
                    className="btn-close btn-close-dark text-reset d-lg-none"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                />
                <div className="navbar-nav justify-content-end flex-grow-1 pe-3 row">

             
                    <div className="col-lg-2"> </div>
                    <div className="col-lg-3 d-flex justify-content-end">
                        <img className='ms-auto' src={Frame54} alt="" />
                    </div>
                    
                    <div className="col-lg-4 d-flex align-items-center">
                    <div className="input-group " style={{ maxWidth: '328px' }}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="What are you looking?"
                        aria-label="Search"
                    />
                    <span className="input-group-text  border-start-0 " style={{ backgroundColor: "#ECF7F0 " }}>
                        <i className="fas fa-search text-muted"></i>
                    </span>
                    </div>
                               
                    </div>

                    <div className="col-lg-2 mt-2 d-flex justify-content-lg-end justify-content-start  " > 
                        <div> 
                        <button href="" className='navbtn-grn'>   
                            <img src={Widgets} alt="" />
                        </button>
                        </div>

                        <div> 
                        <button href="" className='navbtn-whte'>   
                            <img src={Settings} alt="" />
                        </button>
                        </div>
                    </div>

                    <div className=" d-flex flex-column flex-lg-row justify-content-end mt-4 "> 
                        <a className="nav-item nav-link mx-2"  aria-current="page" href="#" > Home </a>
                        <a className="nav-item nav-link mx-2"  aria-current="page" href="#" > About </a>
                        <a className="nav-item nav-link mx-2"  aria-current="page" href="#" > Programmes </a>
                        <a className="nav-item nav-link mx-2"  aria-current="page" href="#" > Downloads </a>
                        <a className="nav-item nav-link mx-2"  aria-current="page" href="#" > Notification </a>
                        <a className="nav-item nav-link mx-2"  aria-current="page" href="#" > Empanel </a>
                        <a className="nav-item nav-link mx-2"  aria-current="page" href="#" > RTI </a>
                        <a className="nav-item nav-link mx-2"  aria-current="page" href="#" > Contact </a>
                        <a className="nav-item nav-link mx-2 navlanguage-btn"  aria-current="page" href="#" > 
                            <img src={Globe} alt="" />
                              മലയാളം </a>
                    </div>
               

                    
                 
                </div>
                </div>
            </div>
             </div>
             </div>
            
        </nav>
        </>

    
    </div>
  )
}

export default Navbar
import { signOut } from 'firebase/auth';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../config/firebase';
import { AuthContext } from '../../context/Authcontext'


export default function Navbar() {

    const {userr,setUserr} = useContext(AuthContext);

    const handleLogout =()=>{
        signOut(auth)
        setUserr({})

    }

    return (
        <>
            <nav>
                <div className="container-fluid">
                    <div className="row bg-primary p-3">
                        <div className="col">
                            <nav className="text-light navbar  text-light navbar-secondary navbar-expand-lg bg-body-tertiary">
                                <div className="container-fluid">
                                    <Link to={''} className="link-hover text-white navbar-brand fs-3 fw-bold" href="#">EVENT ORGO</Link>
                                    <button className="text-light navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="text-light navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="text-light navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="text-light nav-item">
                                                <Link to={'events'} className="link-hover text-light nav-link active" aria-current="page" href="#">Tranding Events</Link>
                                            </li>
                                            <li className="text-light nav-item">
                                                <Link to={'/addevents'} className="link-hover text-light nav-link" href="#">Add a Event</Link>
                                            </li>

                                        </ul>
                                        <form className="d-flex" role="search">
                                            {
                                                userr.uid ?
                                                <button className="btn btn-outline-secondary text-light py-3 px-4 rounded-0" type="submit"onClick={handleLogout} >LogOut</button>
                                                :
                                            <>
                                            <Link to={'/auth/signup'} className="btn btn-transparent  link-hover text-light me-3 py-3 px-4 rounded-0" type="submit">Sign Up</Link>
                                            <Link to={'/auth/login'} className="btn btn-outline-secondary text-light py-3 px-4 rounded-0" type="submit">Login</Link>
                                            
                                            </>
                                            }


                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

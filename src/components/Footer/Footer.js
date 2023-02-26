import React from 'react'
import { Link } from 'react-router-dom'
import { BsTwitter, BsFacebook, BsLinkedin, BsYoutube } from 'react-icons/bs'

import {  AiFillInstagram } from 'react-icons/ai'

import logoPath from '../../assets/images/logo-color.png'

export default function Footer() {



  return (
    <>

      <div className="container-fluid">
        <div className="row py-5 bg-primary">
          <div className="col-4 d-none d-md-block"></div>
          <div className="col-12 col-md-4 fs-3 text-center">
            <BsTwitter className='mx-2 logo-hover text-secondary' />
            <BsFacebook className='mx-2 logo-hover text-secondary' />
            <BsLinkedin className='mx-2 logo-hover text-secondary' />
            <AiFillInstagram className='mx-2 logo-hover text-secondary fs-2' />
            <BsYoutube className='mx-2 logo-hover text-secondary fs-2' />
          </div>
          <div className="col-4 d-none d-md-block"></div>
        </div>
      


        <div className="row row-in- bg-primary">
          <div className="row  py-5 ms- bg-primary text-white d-flex justify-content-center align-items-center">
            <div className="col-6 col-md-3 ">
              <div className="ms-auto me-auto ms-md-0 me-md-0">

                <img className='img-fluid rounded-5 w-75' src={logoPath} alt="f-logo" />
                <p className='mt-4 disabled'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ipsam blanditiis? Animi, perspiciatis numquam repellat harum saepe .</p>
              </div>
            </div>
            <div className="col-6 col-md-3 ">
              <div className="ms-auto me-auto ms-md-0 me-md-0">

                <h6 className='mb-5'>Quick Links</h6>
                <p><Link to={''} className='link-hover text-white disabled text-decoration-none' >Image licence</Link></p>
                <p><Link to={''} className='link-hover text-white disabled text-decoration-none' >Style Guide</Link></p>
                <p><Link to={''} className='link-hover text-white disabled text-decoration-none' >Privacy Policy</Link></p>
              </div>
            </div>
            <div className="col-6 col-md-3 ">
              <div className="ms-auto me-auto ms-md-0 me-md-0">

                <h6 className='mb-5'>Shop Catogries</h6>
                <p><Link to={''} className='link-hover text-white disabled text-decoration-none' >Image licence</Link></p>
                <p><Link to={''} className='link-hover text-white disabled text-decoration-none' >Style Guide</Link></p>
                <p><Link to={''} className='link-hover text-white disabled text-decoration-none' >Privacy Policy</Link></p>
              </div>
            </div>
            <div className="col-6 col-md-3 ">
              <div className="ms-auto me-auto ms-md-0 me-md-0">

                <h6 className='mb-5'>Partners</h6>
                <p><Link to={''} className='link-hover text-white disabled text-decoration-none' >Image licence</Link></p>
                <p><Link to={''} className='link-hover text-white disabled text-decoration-none' >Style Guide</Link></p>
                <p><Link to={''} className='link-hover text-white disabled text-decoration-none' >Privacy Policy</Link></p>
              </div>
            </div>

          </div>
        </div>

        <div className="row bg-primary p-3">
          <div className="col text-center">
            <p className='mb-0 text-light '>&copy; {new Date().getFullYear()} EVENT ORGO. All Right Reserved</p>
          </div>
        </div>
      </div>
      {/* </div> */}

    </>
  )
}

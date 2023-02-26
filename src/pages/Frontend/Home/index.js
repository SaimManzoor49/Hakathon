import React from 'react'
import { HiMailOpen } from 'react-icons/hi'
import { VscChecklist } from 'react-icons/vsc'
import { MdLibraryAddCheck } from 'react-icons/md'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

export default function Index() {
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-primary text-white py-5">
                    <div className="col-1"></div>
                    <div className="col-5">
                        <h1 className='fw-bold'>Guest list management software for live, virtual, and hybrid events</h1>
                        <input className='form-control bg-transparent border-0 border-bottom rounded-0 w-75 mt-3 text-white   ' placeholder='Your Email!' type="email" />
                        <button className='btn btn-secondary mt-2 px-4 py-4 text-white rounded-0 ' >GET STARTED</button>
                    </div>
                    <div className="col-5">
                        <img className='img-fluid' src="https://images.unsplash.com/photo-1520242739010-44e95bde329e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXZlbnR8fHx8fHwxNjc3Mzk1NjU2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400" alt="" />
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row bg-primary text-white pb-5 mb-4">
                    <div className="col-12 col-md-6 col-lg-3">

                        <HiMailOpen className='fs-1 mb-3 me-2 ms-4' /> <span className='fs-6 link-hover'>Online Invitations</span>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">

                        <VscChecklist className='fs-1 mb-3 me-2 ms-4' /> <span className='fs-6 link-hover'>Guests & CheckLists</span>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">

                        <MdLibraryAddCheck className='fs-1 mb-3 me-2 ms-4' /> <span className='fs-6 link-hover'>Event CheckIns</span>
                    </div>

                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src="https://www.zkipster.com/wp-content/uploads/2021/07/zkipster-home3-2-min-1010x1024.png" className='img-fluid' alt="img" />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className=" mt-5 p-4">
                            <h3 className=' fw-bold'>Event Check-In</h3>
                            <h4 className=' mt-4'>Fast, reliable, and secure on-site guest check-in. Contactless and QR code-enabled to minimize risks and keep your guests and staff safe and socially distanced.</h4>
                            <button className='btn btn-outline-primary hover-text-white text-primary rounded-0 p-4 fw-bold mt-4' >MORE ON CHECK-IN <HiOutlineArrowNarrowRight className='ms-3' /></button>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12 col-md-6">
                        <div className=" mt-5 p-4">
                            <h3 className=' fw-bold'>Event Check-In</h3>
                            <h4 className=' mt-4'>Fast, reliable, and secure on-site guest check-in. Contactless and QR code-enabled to minimize risks and keep your guests and staff safe and socially distanced.</h4>
                            <button className='btn btn-outline-primary hover-text-white text-primary rounded-0 p-4 fw-bold mt-4' >MORE ON CHECK-IN <HiOutlineArrowNarrowRight className='ms-3' /></button>
                        </div>
                    </div>
                        <div className="col-12 col-md-6">
                            <img src="https://www.zkipster.com/wp-content/uploads/2021/11/visual1@2x.jpg" className='img-fluid' alt="img" />
                        </div>
                </div>
            </div>

        </>
    )
}

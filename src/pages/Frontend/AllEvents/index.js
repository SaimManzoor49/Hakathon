import { collection, getDocs } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { firestore } from '../../../config/firebase';
// import MultiRangeSlider from '../../../components/MultiRangeSlider/MultiRangeSlider'
// import fakeProducts from '../../../data/fakeProducts'
export default function Index() {

    const [events,setEvents ]=useState([]);


    // let mainImg = 'https://images.unsplash.com/photo-1634643836960-c345b3c3e998?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8c29mYXx8fHx8fDE2NzYxMTQzMDA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'




const getData = async()=>{

    const querySnapshot = await getDocs(collection(firestore, "events"));
    const arr=[]
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  arr.push(doc.data())
//   console.log(doc.id, " => ", doc.data());
});

setEvents(arr)
}


useEffect(() => {
  getData()
    // console.log(events)
}, [])




    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h4 className='fw-bold'>JOIN EVENTS WITH US</h4>
                        {/* <p className='mb-0 fw-bold disabled my-5'>Browse From 230 Latest Items</p> */}
                    </div>
                </div>

                <div className="row my-5">
                   
                        <div className="row  ">
                            <div className="col-12 d-md-flex justify-content-between ">
                                <span>{events.length} Events Found</span>
                                {/* <div className="d-flex  ">
                                    <span className='text-nowrap mt-2'>Sort by</span>
                                    <select className="ms-4 form-select " aria-label="Default select example">
                                        <option value="sofa" defaultValue={'sofa'}>Sofa</option>
                                        <option value="1">Chair</option>
                                        <option value="2">Table</option>
                                        <option value="3">Lights</option>
                                    </select>


                                </div> */}
                            </div>
                        </div>


                        <div className="row my-4">
                            {events.map((p, i) => {
                                return <div className="col-12 col-sm-6 col-md-6 col-lg-4 " key={p.id}>
                                    <article className='p-2 text-center' >
                                        <img className='img-fluid rounded-1' style={{ height: 280 }} src={p.imgSrc} alt="" /> <br />
                                        <h5  className="card-title h5 text-black text-center text-decoration-none">{p.title}</h5>
                                        <h5 className='text-cente fw-bold text-secondary'>{p.date}</h5>
                                        <Link to={`/eventdetails/${p.id}`} className="btn btn-primary text-white fw-bold card-title h5 text-black text-center text-decoration-none">Join this Event</Link>
                                    </article>
                                </div>
                            })}


                        </div>

                </div>


            </div>
        </>
    )
}

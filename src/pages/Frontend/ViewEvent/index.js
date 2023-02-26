import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from '../../../config/firebase';

export default function Index() {
    const [event, setEvent] = useState({})
    const { id } = useParams()


    const getSingleEvent = async () => {
        const q = query(collection(firestore, "events"), where("id", "==", id));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            setEvent(doc.data())
        });
    }


    useEffect(() => {
        getSingleEvent()

    }, [])



    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div class="card shadow mb-3">
                            <img src={event.imgSrc} style={{height:500}} class="card-img-top img-fluid" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title fw-bold">Title: {event.title}</h5>
                                <p class="card-text">Description: {event.description}</p>
                                <div class="card-text d-flex justify-content-between "><small class="text-muted">Date: {event.date} Time:  {event.time}</small>
                                <button className='btn btn-primary fw-bold rounded-0'>Join Now</button>
                                </div>
                            </div>
                    <div className="col-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

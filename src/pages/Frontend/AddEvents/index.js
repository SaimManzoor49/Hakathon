import { doc, serverTimestamp, setDoc } from 'firebase/firestore/lite'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useContext, useRef, useState } from 'react'
import { firestore, storage } from '../../../config/firebase'
import { AuthContext } from '../../../context/Authcontext'

const initialstate = {
    title: "",
    location: "",
    description: "",
    date: "",
    time: "",
    imgSrc: "",
}

export default function Index() {
    const [isProcessing, setProcessing] = useState(false)
    const [state, setState] = useState(initialstate)
    const [file, setFile] = useState('')
    const [downloadlink, setDownloadURL] = useState('')

    const { userr, } = useContext(AuthContext);


    const clear1 = useRef();
    const clear2 = useRef();
    const clear3 = useRef();
    const clear4 = useRef();
    const clear5 = useRef();
    const imgRef = useRef();

    const clearVals = () => {
        clear1.current.value = ''
        clear2.current.value = ''
        clear3.current.value = ''
        clear4.current.value = ''
        clear5.current.value = ''
        // clear6.current.value = ''
    }



    ////////////////////////////////HandleImgChange////////////////////////////////

    const handleImgChange = (e) => {
        // e.preventDefault();

        let fileExt = file.name.split('.').pop();
        // console.log(fileExt)

        const imageRef = ref(storage, `images/${window.getRandomId()}.${fileExt}`);

        // console.log(file)
        // return
        const uploadTask = uploadBytesResumable(imageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        // console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                        setDownloadURL(downloadURL)
                        // console.log('File available at', downloadURL);
                    });
            }
        );





    }


    ////////////////////////////////HandleChange////////////////////////////////

    const handleChange = (e) => {

        let { name, value } = e.target
        
        setState((s) => ({ ...s, [name]: value }))
        
        
        // console.log(state)

    }
    
    
    ////////////////////////////////HandleSubmit////////////////////////////////
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        handleImgChange()
        let { title, location, description, date, time } = state

        state.id = window.getRandomId();

        title = title.trim()
        location = location.trim()
        description = description.trim()

        if (title.length < 3) {
            return window.notify('Enter title Correctly', "error")
        }
        if (location.length < 3) {

            return window.notify('Enter Location Correctly', "error")
        }
        if (description.length < 6) {

            return window.notify('Enter Description Correctly', "error")
        }
        if (!date) {

            return window.notify('Enter date ', "error")
        }
        if (!time) {

            return window.notify('Enter time ', "error")
        }


        let formData = { title, location, description, date, time }
        formData.dateCreated = serverTimestamp()
        formData.createdBy = {
            email: userr.email,
            uid: userr.uid
        }
        formData.id = window.getRandomId()


        createDocument(formData)

    }





    ////////////////////////////////CreateDocument Function////////////////////////////////
    const createDocument = async (formData) => {
        setProcessing(true)
        formData.imgSrc = downloadlink
        // console.log(formData)s
        try {
            await setDoc(doc(firestore, "events", formData.id),
                formData
            );
            window.notify("Event Added :-)", "success")
        } catch (err) {
            console.log(err)
            window.notify("something went wrong :-(", "error")
        }
        clearVals();
        setProcessing(false)
    }






    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col col-md-8 py-5 card shadow  mt-5 ms-auto me-auto">
                        <h4 className="text-center pb-4">Add a Event</h4>
                        <form>
                            <div className="row">
                                <div className="col-8 ms-auto me-auto  col-md-6 col-offset-3  ">
                                    <input ref={clear1} type="text" name='title' onChange={handleChange} className='form-control  me-2 ' placeholder='Title' />

                                </div>
                                <div className="col-8 ms-auto me-auto my-2 my-md-0 col-md-6 col-offset-3  ">
                                    <input ref={clear2} type="text" name='location' onChange={handleChange} className='form-control  me-2 ' placeholder='Location' />

                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-8 ms-auto me-auto  col-md-6 col-offset-3  ">
                                    <input ref={clear3} type="date" name='date' onChange={handleChange} className='form-control  me-2 ' />

                                </div>
                                <div className="col-8 ms-auto me-auto my-2 my-md-0 col-md-6 col-offset-3  ">
                                    <input ref={clear4} type="time" name='time' onChange={handleChange} className='form-control  me-2 ' />

                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-8 col-md-12 col-offset-2 ms-auto me-auto">
                                    <label htmlFor="" className='mb-1'>Add image:</label>
                                    <input ref={imgRef} type={'file'} name='imgSrc' onChange={(e) => { setFile(e.target.files[0]) }} className='form-control '  ></input>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-8 col-md-12 col-offset-2 ms-auto me-auto">
                                    <textarea ref={clear5} name='description' onChange={handleChange} className='form-control ' cols="10" rows="5" placeholder='Description...'></textarea>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col text-center">
                                    <button className="btn px-5 py-2 btn-md btn-primary " disabled={isProcessing} onClick={handleSubmit}>{isProcessing ? <div className='spinner-border spinner-border-sm'></div> : <>ADD EVENT</>}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

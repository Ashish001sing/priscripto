import React ,{useContext,useState,useEffect}from 'react'
import {useParams} from 'react-router-dom'
import {AppContext} from'../context/AppContext'
const Appointment=()=>{
    const{docId}=useParams()
    const {doctors} =useContext(AppContext)
     const[docInfo,setDocInfo]=useState(null)
    const fetchDocInfo=async()=>{

        const docInfo= doctors.find(doc=>doc._id===docId)
        setDocInfo(docInfo)
    }
    useEffect(()=>{
          fetchDocInfo()
    },[doctors,docId])
    
    if (!docInfo) {
        return <div>Loading doctor information...</div>
    }
    
    // Debug: Log the doctor info and image path
    console.log('Doctor Info:', docInfo);
    console.log('Image Path:', docInfo.image);
    
    return (
        <div>
              {/*---- doctors details------------*/}
              <div>
                <div>
                    <img 
                        src={docInfo.image} 
                        alt={docInfo.name || "Doctor"}
                        style={{width: '200px', height: '200px', objectFit: 'cover'}}
                        onError={(e) => {
                            console.error('Image failed to load:', docInfo.image);
                            e.target.style.border = '2px solid red';
                            e.target.alt = 'Image failed to load';
                        }}
                        onLoad={() => {
                            console.log('Image loaded successfully:', docInfo.image);
                        }}
                    />
                    <div>
                        <h2>{docInfo.name}</h2>
                        <p>{docInfo.speciality}</p>
                        <p>Image path: {docInfo.image}</p>
                    </div>
                </div>
              </div>
             </div>
    )
}
export default Appointment
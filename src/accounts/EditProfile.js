import React from 'react'
import { useSelector } from 'react-redux';
import userdata from '../image/userdata.gif'


const EditProfile = ()=>{
    const profile = useSelector((state) => state.profile);
    const profileData=profile?.data?.profile
    console.log("profile edit provfile",profileData)
    return(
        <>
         
        {profileData?<div className='col-lg-9 p-3' >
        <h3>User Details</h3>
        <div style={{border:'1px solid #80808029',borderRadius:'5px'}} className='p-3'>
            <div className='d-flex justify-content-between'>
                <b>name</b>
                <p>{profileData?.user.name}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <b>email</b>
                <p>{profileData?.user.email}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <b>PhoneNumber</b>
                <p>{profileData?.PhoneNumber}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <b>Message</b>
                <p>{profileData?.user.introduction}</p>
            </div>
            </div>
          

        </div>:
        <div  className="mt-4">
            <h1>please fill details</h1>
            <p>No data found</p>
            <img src={userdata} alt="GIF" style={{width:'500px',height:'300px'}}/>
            </div>}
        </>
    )
}

export default EditProfile
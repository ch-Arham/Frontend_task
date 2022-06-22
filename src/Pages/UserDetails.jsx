import React, { useState } from 'react'
import Header from '../Components/UserDetails/Header'
import MainContent from '../Components/UserDetails/MainContent'
import Policy from '../Components/UserDetails/Policy'
import { notifyError, notifySuccess } from '../utils/toastError';
import axios from '../utils/axios'

const UserDetails = () => {
    const [ userDetails, setUserDetails ] = useState({
        firstName: "",
        lastName: "",
        positionTitle: "",
        companyName: "",
        email: "",
        contactNumber: ""
    })


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!userDetails.firstName || !userDetails.lastName || !userDetails.positionTitle || !userDetails.companyName || !userDetails.email || !userDetails.contactNumber) {
            notifyError("Please fill in all fields");
            return;
        }else if(userDetails.contactNumber.length < 11) {
            notifyError("Please enter a valid contact number");
            return;
        }
        try {
            const response = await axios.post('api/userdetail/addUserDetails', userDetails);
            if(response.data.success) {
                notifySuccess("User details added successfully");
                setUserDetails({
                    firstName: "",
                    lastName: "",
                    positionTitle: "",
                    companyName: "",
                    email: "",
                    contactNumber: ""
                })

            }
        }catch(error){
            notifyError("Something went wrong");
            console.log(error);
        }



    }

  return (
    <>
        <Header />

        <main className='flex flex-col justify-center items-center'>
            <MainContent {...userDetails} setUserDetails={setUserDetails} />

            <Policy />
        </main>

        <div className='flex items-center justify-center mt-10 text-white'>
            <button className='bg-[#5F60FF] px-12 py-3 rounded' onClick={handleSubmit}>
                Submit
            </button>
        </div>

        
        
       
    </>
  )
}

export default UserDetails
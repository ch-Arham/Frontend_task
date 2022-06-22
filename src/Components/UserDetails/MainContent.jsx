import React from 'react'

const styles = {
    label: "font-light",
    input: "w-full border-2 border-gray-300 rounded-lg py-3 px-4 text-sm font-extralight w-[18em] shadow-md"
}

const MainContent = ({ firstName,lastName,positionTitle,companyName,email,contactNumber, setUserDetails }) => {

    const handleChange = (e) => {
        e.preventDefault();
        setUserDetails({firstName,lastName,positionTitle,companyName,email,contactNumber,[e.target.name]: e.target.value});

    }

  return (
    <div className='mt-16 w-5/12 space-y-8'>
        <div className='flex items-center justify-evenly'>
            <div className='flex  justify-center flex-col gap-y-2'>
                <label htmlFor="firstName" className={styles.label}>First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder='Enter First Name' className={styles.input} value={firstName} onChange={handleChange} />
            </div>
            <div className='flex  justify-center flex-col gap-y-2'>
                <label htmlFor="lastName" className={styles.label}>Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder='Enter Last Name' className={styles.input} value={lastName} onChange={handleChange} />
            </div>
        </div>

        <div className='flex items-center justify-evenly'>
            <div className='flex  justify-center flex-col gap-y-2'>
                <label htmlFor="positionTitle" className={styles.label}>Position Title</label>
                <input type="text" id='positionTitle' name='positionTitle' placeholder='Enter Position Title' className={styles.input} value={positionTitle} onChange={handleChange} />
            </div>
            <div className='flex  justify-center flex-col gap-y-2'>
                <label htmlFor="companyName" className={styles.label}>Company Name</label>
                <input type="text" id='companyName' name='companyName' placeholder='Enter Company Name' className={styles.input} value={companyName} onChange={handleChange} />
            </div>
        </div>
        

        <div className='flex items-center justify-evenly'>
            <div className='flex  justify-center flex-col gap-y-2'>
                <label htmlFor="email" className='font-light'>Business Email Address</label>
                <input type="email" id='email' name='email' placeholder='Enter Business Email Address' className={styles.input} value={email} onChange={handleChange} />
            </div>
            <div className='flex  justify-center flex-col gap-y-2'>
                <label htmlFor="contactNumber" className='font-light'>Contact Number</label>
                <input type="text" id='contactNumber' required name='contactNumber' placeholder='Enter Contact Name' className={styles.input} value={contactNumber} onChange={handleChange} />
            </div>
        </div>
    </div>
  )
}

export default MainContent
import React from 'react'
import './switchStyle.css' 

const Policy = () => {
  return (
    <div className='flex justify-evenly items-center w-9/12 mt-8'>
        <div>
            <p className='font-light'>I agree to your GDPR Policy:</p>
        </div>

        <div>
            <label className='switch'>
                <input type="checkbox" />
                <span class="slider round"></span>
            </label>
           
        </div>
    </div>
  )
}

export default Policy

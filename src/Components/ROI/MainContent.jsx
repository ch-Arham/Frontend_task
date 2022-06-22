import React,{ useState } from 'react'
import { notifyError, notifySuccess } from '../../utils/toastError';
import axios from '../../utils/axios';
import { Link, useNavigate } from 'react-router-dom';

const styles = {
    wrapper: 'flex flex-col items-start justify-center mt-20 space-y-16',
    input: 'w-4/6 text-gray-600 border-2 border-gray-300 py-5 rounded-lg shadow-md text-center text-2xl',
    button1: 'bg-transparent text-[#5F60FF] border border-[#5F60FF] font-light py-2 px-5 rounded mr-5'
}

const MainContent = () => {
    const navigate = useNavigate();
    const [ clashReportNo, setClashReportNo ] = useState(null);

    const handleChange = (e)=>{
        e.preventDefault();
        setClashReportNo(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!clashReportNo){
            notifyError("Please enter a clash report");
            return;
        }
        try{
            const clashReport = parseInt(clashReportNo);
            const response = await axios.post('api/roi/addROI', {clashReport})
            console.log(response.data)
            if(response.data.success){
                notifySuccess("ROI added successfully");
                setClashReportNo("");
                navigate('/userdetails');
            }
        }catch(error){
            notifyError(error.message);
            console.log(error);
        }
    }
    
  return (
    <div className={styles.wrapper}>
        <div className='space-y-4'>
            <h2 className='text-[#B0B0B0] text-2xl font-light'>ROI Question</h2>
            <h3 className='text-black text-3xl font-light'>How many clash reports do you do a year? </h3>
        </div>
        <div className='flex items-center'>
            <input className={styles.input} type='number' min={0} minLength={0} required name="clashReport" value={clashReportNo} onChange={handleChange}/>
        </div>
        <div className='flex items-center justify-evenly'>
            <button className={styles.button1}><Link to='/'>Back</Link></button>
            <button className='bg-[#5F60FF] text-white font-light py-3 px-5 rounded text-sm' onClick={handleSubmit} >Next Use Case</button>
        </div>
    </div>
  )
}

export default MainContent
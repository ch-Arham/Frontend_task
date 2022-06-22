import React from 'react'
import SliderComponent from './SliderComponent'
import { notifyError,notifySuccess } from '../../utils/toastError'
import axios from '../../utils/axios'
import { useNavigate } from 'react-router-dom'

const styles = {
    wrapper: 'flex flex-col items-start justify-center mt-20 space-y-16',
    input: 'w-4/6 text-gray-600 border-2 border-gray-300 py-5 rounded-lg shadow-md text-center text-2xl',
    button1: 'bg-transparent text-[#E5E5E5] border border-[#E5E5E5] font-light py-2 px-5 rounded mr-5',
    h4: 'font-light text-xl',
    p: "text-xs text-[0.6em] text-gray-400 w-10/12"
}

const MainContent = () => {
    const navigate = useNavigate()
    const [selectedStep, setSelectedStep] = React.useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const sliderRank = parseInt(selectedStep);
            console.log(sliderRank,"-=====-----");
            const response = await axios.post("api/sliderRank/addSliderRank", {rank:sliderRank})
            if(response.data.success){
                notifySuccess("Slider Rank added successfully")
                navigate("/roi")
            }
        }catch(error){
            notifyError(error.response.data.errors[0].msg)
            console.log(error);
        }
    }
  return (
    <div className={styles.wrapper}>
        <div className='space-y-4 z-50'>
            <h2 className='text-[#B0B0B0] text-2xl font-light'>Question 01</h2>
            <h3 className='text-black text-3xl font-light'>From 1 to 10 rank your current RFI handling practice. </h3>
        </div>
        <div className='flex items-center justify-between w-full z-50'>
            <div className='flex flex-col justify-center gap-y-3'>
                <h4 className={styles.h4}>1&nbsp;&nbsp;being:</h4>
                <p className={styles.p}>RFIs are created an d submitted manually through emails and typed into a spreadsheet to track response. Tracking is done manually and monitoring of incoming request s on RFI is also done by email. Replies and mark-ups on 20 drawings in PDF are extracted from Revit to make red marking on drawings and re-uploaded into Revit after.</p>
            </div>
            <div className='flex flex-col justify-center ml-[-1em] gap-y-3'>
                <h4 className={styles.h4}>10&nbsp;&nbsp;being:</h4>
                <p className={styles.p}>RFIs are created an d submitted manually through emails and typed into a spreadsheet to track response. Tracking is done manually and monitoring of incoming request s on RFI is also done by email. Replies and mark-ups on 20 drawings in PDF are extracted from Revit to make red marking on drawings and re-uploaded into Revit after.</p>
            </div>
        </div>

        {/* slider */}
        <div className='flex items-center'>
            {/* puthere */}
            <SliderComponent setSelectedStep={setSelectedStep}/>
        </div>
        <div className='flex items-center justify-evenly z-50'>
            <button className={styles.button1} disabled>Back</button>
            <button className='bg-[#5F60FF] text-white font-light py-3 px-7 rounded text-sm' 
            onClick={handleSubmit} 
            >Next</button>
        </div>
    </div>
  )
}

export default MainContent
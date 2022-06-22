import React from 'react'
import Header from '../Components/Header/Header'
import MainContent from '../Components/ROI/MainContent'

const ROI = () => {
  return (
    <>
        <Header title="Meeting Minutes for Integrated Concurrent Engineering (ICE)" />

        <main className='flex justify-start items-center ml-[13em]'>
            <MainContent />
        </main>
    </>
  )
}

export default ROI
import React from 'react'
import Header from '../Components/Header/Header'
import MainContent from '../Components/Home/MainContent'

const Home = () => {
  return (
    <>
        <Header title="Digital Request For Information (RFI)" />

        <main className='flex justify-start items-center ml-[13em] mr-[5em]'>
            <MainContent />
        </main>
    </>
  )
}

export default Home
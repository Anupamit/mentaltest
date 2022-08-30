import React from 'react'
import './styles/Home.css'
import Navbar from './Navbar'

function Home() {
    const examQus=()=>{
        window.location.href = '/qus'
    }
    return (
        <div>
        <Navbar/>
            <div className='text'>
                <h1>IQ Test for kids from 7 to 16 year old</h1>
                <p>You have already started the test and have not completed it</p>
            </div>
            <div className='buttonarea'>
                <button onClick={examQus} className='button'>Start Test</button>
            </div>
        </div>
    )
}

export default Home
import React from 'react'
import './styles/Qus.css'
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';

import q1 from './img/q1.svg'
import q1o1 from './img/q1o1.svg'
import q1o2 from './img/q1o2.svg'
import q1o3 from './img/q1o3.svg'
import q1o4 from './img/q1o4.svg'
import q1o5 from './img/q1o5.svg'
import q1o6 from './img/q1o6.svg'
function Qus1() {
    return (
        <div>
            <div>
                <h1><ClearIcon fontSize="large"/></h1>
            </div>
            <div className='quscontainer'>
                <img src={q1} alt="Logo" className='img' />
                <span><h2 className='qustext'>1. Which shape should be in the rightmost cell with a question mark?</h2></span>
            </div>
            <div className='inlineList'>
                <span><img src={q1o1} alt="Logo" className='img' /></span>
                <span><img src={q1o2} alt="Logo" className='img' /></span>
                <span><img src={q1o3} alt="Logo" className='img' /></span>
                <span><img src={q1o4} alt="Logo" className='img' /></span>
                <span><img src={q1o5} alt="Logo" className='img' /></span>
                <span><img src={q1o6} alt="Logo" className='img' /></span>
            </div>
            <div>
            <Button variant="contained" fontSize="large" endIcon={<ArrowBackIcon />}></Button>
            </div>
        </div>
    )
}

export default Qus1
import React from 'react'
import './styles/Qus.css'
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';

import q4 from './img/q4.svg'
import q4o1 from './img/q4o1.svg'
import q4o2 from './img/q4o2.svg'
import q4o3 from './img/q4o3.svg'
import q4o4 from './img/q4o4.svg'
import q4o5 from './img/q4o5.svg'
import q4o6 from './img/q4o6.svg'
function Qus4() {
    return (
        <div>
            <div>
                <h1><ClearIcon fontSize="large"/></h1>
            </div>
            <div className='quscontainer'>
                <img src={q4} alt="Logo" className='img' />
                <span><h2 className='qustext'>4. Which shape should be in the rightmost cell with a question mark?</h2></span>
            </div>
            <div className='anscontainer'>
                <ul>
                    <li><img src={q4o1} alt="Logo" className='img' /></li>
                    <li><img src={q4o2} alt="Logo" className='img' /></li>
                    <li><img src={q4o3} alt="Logo" className='img' /></li>
                    <li><img src={q4o4} alt="Logo" className='img' /></li>
                    <li><img src={q4o5} alt="Logo" className='img' /></li>
                    <li><img src={q4o6} alt="Logo" className='img' /></li>
                </ul>
            </div>
            <div>
            <Button variant="contained" fontSize="large" endIcon={<ArrowBackIcon />}></Button>
            </div>
        </div>
    )
}

export default Qus4
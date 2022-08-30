import React from 'react'
import './styles/Qus.css'
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';

import q3 from './img/q3.svg'
import q3o1 from './img/q3o1.svg'
import q3o2 from './img/q3o2.svg'
import q3o3 from './img/q3o3.svg'
import q3o4 from './img/q3o4.svg'
import q3o5 from './img/q3o5.svg'
import q3o6 from './img/q3o6.svg'
function Qus3() {
    return (
        <div>
            <div>
                <h1><ClearIcon fontSize="large"/></h1>
            </div>
            <div className='quscontainer'>
                <img src={q3} alt="Logo" className='img' />
                <span><h2 className='qustext'>3. Which shape should be in the rightmost cell with a question mark?</h2></span>
            </div>
            <div className='anscontainer'>
                <ul>
                    <li><img src={q3o1} alt="Logo" className='img' /></li>
                    <li><img src={q3o2} alt="Logo" className='img' /></li>
                    <li><img src={q3o3} alt="Logo" className='img' /></li>
                    <li><img src={q3o4} alt="Logo" className='img' /></li>
                    <li><img src={q3o5} alt="Logo" className='img' /></li>
                    <li><img src={q3o6} alt="Logo" className='img' /></li>
                </ul>
            </div>
            <div>
            <Button variant="contained" fontSize="large" endIcon={<ArrowBackIcon />}></Button>
            </div>
        </div>
    )
}

export default Qus3
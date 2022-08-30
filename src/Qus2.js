import React from 'react'
import './styles/Qus.css'
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';

import q2 from './img/q1.svg'
import q2o1 from './img/q2o1.svg'
import q2o2 from './img/q2o2.svg'
import q2o3 from './img/q2o3.svg'
import q2o4 from './img/q2o4.svg'
import q2o5 from './img/q2o5.svg'
import q2o6 from './img/q2o6.svg'
function Qus2() {
    return (
        <div>
            <div>
                <h1><ClearIcon fontSize="large"/></h1>
            </div>
            <div className='quscontainer'>
                <img src={q2} alt="Logo" className='img' />
                <span><h2 className='qustext'>2. Which shape should be in the rightmost cell with a question mark?</h2></span>
            </div>
            <div className='anscontainer'>
                <ul>
                    <li><img src={q2o1} alt="Logo" className='img' /></li>
                    <li><img src={q2o2} alt="Logo" className='img' /></li>
                    <li><img src={q2o3} alt="Logo" className='img' /></li>
                    <li><img src={q2o4} alt="Logo" className='img' /></li>
                    <li><img src={q2o5} alt="Logo" className='img' /></li>
                    <li><img src={q2o6} alt="Logo" className='img' /></li>
                </ul>
            </div>
            <div>
            <Button variant="contained" fontSize="large" endIcon={<ArrowBackIcon />}></Button>
            </div>
        </div>
    )
}

export default Qus2
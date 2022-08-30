import React from 'react'
import './styles/Qus.css'
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';

import q5 from './img/q5.svg'
import q5o1 from './img/q5o1.svg'
import q5o2 from './img/q5o2.svg'
import q5o3 from './img/q5o3.svg'
import q5o4 from './img/q5o4.svg'
import q5o5 from './img/q5o5.svg'
import q5o6 from './img/q5o6.svg'
function Qus5() {
    return (
        <div>
            <div>
                <h1><ClearIcon fontSize="large"/></h1>
            </div>
            <div className='quscontainer'>
                <img src={q5} alt="Logo" className='img' />
                <span><h2 className='qustext'>5. Which shape should be in the rightmost cell with a question mark?</h2></span>
            </div>
            <div className='anscontainer'>
                <ul className='inlineList'>
                    <li><img src={q5o1} alt="Logo" className='img' /></li>
                    <li><img src={q5o2} alt="Logo" className='img' /></li>
                    <li><img src={q5o3} alt="Logo" className='img' /></li>
                    <li><img src={q5o4} alt="Logo" className='img' /></li>
                    <li><img src={q5o5} alt="Logo" className='img' /></li>
                    <li><img src={q5o6} alt="Logo" className='img' /></li>
                </ul>
            </div>
            <div>
            <Button variant="contained" fontSize="large" endIcon={<ArrowBackIcon />}></Button>
            </div>
        </div>
    )
}

export default Qus5
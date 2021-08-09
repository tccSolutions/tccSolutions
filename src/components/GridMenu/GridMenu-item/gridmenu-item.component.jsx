import React from 'react';
import {Link} from "react-router-dom"

export const GridMenuItem = ({link, label, icon}) =>(
    <Link to={`/${link}`} className='mx-2' style={{textDecoration: 'none'}}>
        <div className='cell grid-item rounded' href={`${link}`}>
            <div className='inner-cell'>
                <img alt={`${label}.icon`} src={`${icon}`} width='120px' className='mt-2'/>               
            </div>
                <p>{`${label}`}</p>
        </div>
   </Link>


)
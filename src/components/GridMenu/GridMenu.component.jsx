import React from 'react';
import { GridMenuItem } from './GridMenu-item/gridmenu-item.component';


export const GridMenu =()=>(
  
    <div className='grid-menu' >
        <GridMenuItem link='work' label='Our Work' icon='https://image.flaticon.com/icons/png/512/1584/1584911.png'/>
        <GridMenuItem link='contact' label='Contact Us' icon='https://image.flaticon.com/icons/png/512/561/561127.png'/>          
        <GridMenuItem link='reviews' label='Reviews' icon='https://image.flaticon.com/icons/png/512/3270/3270287.png'/>
    </div>

    
)

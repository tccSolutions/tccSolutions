import React from 'react';
import Wallpaper from '../../data/images/wallpaper.jpg';



class Background extends React.Component {
    render(){
        return (            
            // <img className='wallpaper pushback' alt='wallpaper' src={Wallpaper} />
            <div className='wallpaper bg'></div>
        );
    }
    
}

export default Background;
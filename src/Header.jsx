import React from 'react';
import images from './images/img1.png';

function Header() {
    return(
        <img className="photo" src= {images} alt='Profile Image' />
    );
}

export default Header;
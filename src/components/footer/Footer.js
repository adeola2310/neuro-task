import React from 'react';
import './Footer.scss';

const Footer = ()=>{
    const getYear = () => {
        const date = new Date();
        return date.getFullYear();
      };
    return (
        <footer>
        <p>© {getYear()} Neurocat</p>
         <a href='https://github.com/kadetXx/shoppies'>
        <i className='fab fa-github'></i>
      </a>
        </footer>
    )
}

export default Footer;
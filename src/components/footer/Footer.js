import React from 'react';
import './Footer.scss';

const Footer = ()=>{
    const getYear = () => {
        const date = new Date();
        return date.getFullYear();
      };
    return (
        <footer>
        <p>© {getYear()} Built by Adeola</p>
         <a href='https://github.com/adeola2310/neuro-task'>
        <i className='fab fa-github'></i>
      </a>
        </footer>
    )
}

export default Footer;
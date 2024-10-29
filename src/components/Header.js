import React from 'react';
import {Helmet} from 'react-helmet';

function Header(){
    return(
        <header>
            <Helmet>
                
            </Helmet>
            <h1>ValueHunterDCF</h1>
        
        <a href="/Features.js">How it Works?</a>
        <a href="/">Download</a>
        <a href="/Contact.js">Contact</a>
        </header>
    );
}

export default Header;
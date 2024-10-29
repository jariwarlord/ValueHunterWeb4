import React from 'react';
import {Helmet} from 'react-helmet';
import { Link as ScrollLink } from 'react-scroll';

function Header(){
    return(
        <header>
        <Helmet>
            <title>ValueHunterDCF</title>
        </Helmet>
        <h1>ValueHunterDCF</h1>

        
        <nav>
            <ScrollLink to="how" smooth={true} duration={500}>
                How it Works?
            </ScrollLink>
            <ScrollLink to="download" smooth={true} duration={500}>
                Download
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>
                Contact
            </ScrollLink>
        </nav>
    </header>
    );
}

export default Header;
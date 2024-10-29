import React from 'react';
function Features(){
    return(
        <section>
            <img 
            src={`${process.env.PUBLIC_URL}/valuehunterlogobig.jpg`}
            alt="ValueHunter Logo"
            className="big-logo"
             />
        </section>
    )
}

export default Features;
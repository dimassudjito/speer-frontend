import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';

const Pricing = () => {

    return (
        <div>
            <div className="burger">
            <GiHamburgerMenu size={30}/>
            <h2 className="logo">EXP|CON</h2>
            </div>
            <nav class="nav flex-column">
                <a class="nav-link active" href="#">Active</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#">Link</a>
            </nav>
        </div>
  )
}

export default Pricing;
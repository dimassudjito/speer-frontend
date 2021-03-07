import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import '../../styles/landing.css';

const Pricing = () => {
    const [open, setOpen] = useState(false);

    const clickBurger = () => {
        setOpen(!open);
    }

    return (
        <div>  
            {!open && (
                <div className="burger">
                <GiHamburgerMenu size={30} onClick={clickBurger}/>
                <h2 className="logo">EXP|CON</h2>
                </div>
            )}  
            {open && (
                <div className="burger-black">
                <GiHamburgerMenu size={30} onClick={clickBurger}/>
                <h2 className="logo">EXP|CON</h2>
                <nav class="nav flex-column">
                    <a class="nav-link burger-item">WHAT IS IT</a>
                    <a class="nav-link burger-item">PERKS</a>
                    <a class="nav-link burger-item">PRICING</a>
                </nav>
                </div>
            )}
        </div>
  )
}

export default Pricing;
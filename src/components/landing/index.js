import React, {useState} from 'react';

import Hero from './Hero';
import Red from './Red';
import Burger from './Burger';

const Landing = () => {

    return (
        <div className="">
            <Burger/>
            <Hero/>
            <Red/>
        </div>
  )
}

export default Landing;
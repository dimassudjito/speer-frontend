import React, {useState} from 'react';
import '../../styles/landing.css'

const Red = () => {

    return (
        <div className="red">
            <div className="row">
                <div className="col">
                    <h1>Superior sound</h1>
                    <h3>Experience live versions of your favourite songs</h3>
                    <button className="btn btn-light">SEE DEMO</button>
                </div>
                <div className="col">
                    <button className="btn btn-light">TRY IT NOW</button>
                    <br/>
                    <img src="./speaker1.png" className="w-25"/>
                    <img src="./speaker2.png" className="w-25"/>
                </div>
            </div>
        </div>
  )
}

export default Red;
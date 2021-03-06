import React, {useState} from 'react';
import '../../styles/landing.css'

const Red = () => {

    return (
        <div className="red">
            <div className="row align-items-center p-5">
                <div className="col">
                    <h1><strong>SUPERIOR SOUND</strong></h1>
                    <h5 style={{color:"black"}}>Experience live versions of your favourite songs.</h5>
                    <button className="cta-btn2">SEE DEMO</button>
                </div>
                <div className="col">
                    <div class="float-end">
                        <a href="/pricing"><button className="cta-btn2">TRY IT NOW</button></a>
                    </div>
                    <div className="speaker1">
                        <img src="./speaker1.png" className="speaker-pic"/>
                    </div>
                    <div className="speaker2">
                        <img src="./speaker2.png" className="speaker-pic"/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Red;
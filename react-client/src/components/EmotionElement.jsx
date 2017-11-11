import React from 'react';

const EmotionElement = (props) => (
    
    <div className="wrapper">
      <div>
        Anger:
        <div id="myProgress">
          <div id="myBar" style={{width: String(props.emotionObj.anger * 100) + '%'}}></div>
        </div>
      </div>

      <div>
        Surprise: 
        <div id="myProgress">
          <div id="myBar" style={{width: String(props.emotionObj.surprise * 100) + '%'}}></div>
        </div>
      </div>

      <div>
        Sadness:
        <div id="myProgress">
          <div id="myBar" style={{width: String(props.emotionObj.sadness * 100) + '%'}}></div>
        </div>
      </div>

       <div>
        Joy:
        <div id="myProgress">
          <div id="myBar" style={{width: String(props.emotionObj.joy * 100) + '%'}}></div>
        </div>
      </div>

    </div>
)

export default EmotionElement;
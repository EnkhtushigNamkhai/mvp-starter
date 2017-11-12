import React from 'react';

const EmotionElement = (props) => (

    <div className="wrapper">
      <div className='subDiv'>
        Anger:
        <div id="myProgress" style={{'backgroundColor': 'rgba(235, 87, 87, 0.10)'}}>
          <div id="myBar" style={{'backgroundColor': '#EB5757', 'width': String(props.emotionObj.anger * 100) + '%'}}></div>
        </div>
      </div>

      <div className='subDiv'>
        Surprise: 
        <div id="myProgress" style={{'backgroundColor': 'rgba(187, 107, 217, 0.10)'}}>
          <div id="myBar" style={{'backgroundColor': '#BB6BD9', width: String(props.emotionObj.surprise * 100) + '%'}}></div>
        </div>
      </div>

      <div className='subDiv'>
        Sadness:
        <div id="myProgress" style={{'backgroundColor': 'rgba(242, 201, 76, 0.10)'}}>
          <div id="myBar" style={{'backgroundColor': '#F2C94C', width: String(props.emotionObj.sadness * 100) + '%'}}></div>
        </div>
      </div>

       <div className='subDiv'>
        Joy:
        <div id="myProgress" style={{'backgroundColor': 'rgba(111, 207, 151, 0.10)'}}>
          <div id="myBar" style={{width: String(props.emotionObj.joy * 100) + '%'}}></div>
        </div>
      </div>

    </div>
)

export default EmotionElement;
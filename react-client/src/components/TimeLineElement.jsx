import React from 'react';

const TimeLineElement = (props) => (
  <div className='ul'>
      <h3>{props.obj.date}</h3>
      <p>{props.obj.content}</p>
      <p>{parseInt(props.obj.score * 100) + '%'}</p>
        <div className='testWrap'>
          <div id="myProgress">
            <div id="myBar" style={{'backgroundColor': '#56CCF2', width: String(props.obj.score * 100) + '%'}}></div>
          </div>
        </div>

  </div>
);

export default TimeLineElement;

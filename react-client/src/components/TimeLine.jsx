import React from 'react';
import TimeLineElement from './TimeLineElement.jsx'


var TimeLine = (props) => (
  <div className='contentContainer'>
    {props.timeline.map(obj => 
      <TimeLineElement obj={obj}/>
    )}
  </div>
)

export default TimeLine;



// import React from 'react';

// class TimeLine extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render () {
//     return 
//     (
//     <div className='timeLineWrapper'>
      
//       {
//         this.props.timeline.map(function(obj) {
//           <TimeLineElement obj={obj}/>  
//         });
//       }
//     </div>
//     )    
//   }
// }

// export default TimeLine;
import React from 'react';
import $ from 'jquery';
// import ListItem from './ListItem.jsx';

class Analyze extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      content: ''
    }
  }

  getTextVal(e) {
    console.log(e.target.value);
    this.setState({content: e.target.value});
  }

  analyzeClicked() {
    console.log('THE BUTTON WAS CLICKED!');
    //make a get request to the server here and just change the state here
    var obj = {
      url: '/analyze',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({content: this.state.content}),
      success: function(data) {
        console.log('sucessful get! yyaaayyy!! :D', data);
        //edit the data and make the loading bar update according to data value
        


        this.setState({score: data});
      }.bind(this),
      error: function(err) {
        console.log('THERE IS AN ERRORRR :/');
      }
    }
    $.ajax(obj);
  }

  render() {
    return (
    <div className='center'>
      <textarea onChange={this.getTextVal.bind(this)}></textarea>
      <div>Here the results will be DISPLAYED
        <p>{this.state.score}</p>
        
      </div>
      <button onClick={this.analyzeClicked.bind(this)}>Analyze</button>
    </div>
    )
  }
}

export default Analyze;

// <div className="progress">
//           <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}>
//             <span className="sr-only">70% Complete</span>
//           </div>
//         </div>

// <h4> HERE IS ANALYZE PAGE DISPLAYED! </h4>
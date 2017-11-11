import React from 'react';
import $ from 'jquery';
// import ListItem from './ListItem.jsx';

class Analyze extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      content: '',
      extraversion: 0.5,
      agreeableness: 0.5,
      conscientiousness: 0.5,
      openness: 0.5
    }
    //t//his.testVar = String(this.state.extraversion * 100) + '%';
    //console.log('testVar', this.testVar);
  }

  getTextVal(e) {
    console.log(e.target.value);
    this.setState({content: e.target.value});
  }

  analyzeClicked() {
    console.log('ANALYZE BUTTON WAS CLICKED!');
    //make a get request to the server here and just change the state here
    if (this.state.content === '') {

    } else {
      var obj = {
        url: '/analyze',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({content: this.state.content}),
        success: function(data) {
          console.log('sucessful get! yyaaayyy!! :D', data);
          //edit the data and make the loading bar update according to data value

          var obj = JSON.parse(data);

          this.setState(
          {score: obj.score,
           extraversion: obj.extraversion,
           agreeableness: obj.agreeableness,
           conscientiousness: obj.conscientiousness,
           openness: obj.openness
          });
        }.bind(this),
        error: function(err) {
          console.log('THERE IS AN ERRORRR :/');
        }
      }
      $.ajax(obj);
    }
  }  
  

  render() {
    return (
    <div className='center'>
      <textarea className='textArea' onChange={this.getTextVal.bind(this)}></textarea>
      <div>
        <p>score: {this.state.score}</p>
      
        <div className="wrapper">
          <div>
            <p>Extraversion: </p>
            <div id="myProgress">
              <div id="myBar" style={{width: String(this.state.extraversion * 100) + '%'}}></div>
            </div>
          </div>

          <div>
            <p>Agreeableness: </p>
            <div id="myProgress">
              <div id="myBar" style={{width: String(this.state.agreeableness * 100) + '%'}}></div>
            </div>
          </div>

          <div>
            <p>Conscientiousness: </p>
            <div id="myProgress">
              <div id="myBar" style={{width: String(this.state.conscientiousness * 100) + '%'}}></div>
            </div>
          </div>

          <div>
            <p>Openness: </p>
            <div id="myProgress">
              <div id="myBar" style={{width: String(this.state.openness * 100) + '%'}}></div>
            </div>
          </div>

        </div>
         <button onClick={this.analyzeClicked.bind(this)}>Analyze</button>
      </div>

     
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

















import React from 'react';
import $ from 'jquery';
// import ListItem from './ListItem.jsx';

class Post extends React.Component {
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
  }

  getTextVal(e) {
    console.log(e.target.value);
    this.setState({content: e.target.value});
  }

  postClicked() {
    console.log('POST BUTTON WAS CLICKED!');
  
    //POST CONTENT TO DATABASE 
      //-> post request to server
    
    //after we get the ok posted to database back, fetch

    if (this.state.content === '') {
      console.log('no content so no get request! :)');
    } else {
      var obj = {
        url: '/post',
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
         <button onClick={this.postClicked.bind(this)}>Post to Journal</button>
      </div>

     
    </div>
    )
  }
}

export default Post;


















import React from 'react';
import $ from 'jquery';
import EmotionElement from './EmotionElement.jsx';
import PersonaElement from './PersonaElement.jsx';
// import ListItem from './ListItem.jsx';

class Analyze extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      content: '',

      emotion: {
        anger: 0,
        surprise: 0,
        fear: 0,
        sadness: 0,
        joy: 0,
      },
      persona: [],
    }
  }

  getTextVal(e) {
    console.log(e.target.value);
    this.setState({content: e.target.value});
  }

  analyzeClicked() {
    //make a get request to the server here and just change the state here
    if (this.state.content !== '') {
      
      this.makeRequest('/analyze');
      //this.setState({content: ''});
    } else {
      alert('Please write in the text field.');
    }
  }  
  
  postClicked() {
    console.log('POST CLICKED');
    //make a post request to the server with the content
    //to route /post

    //the only difference is the route and also we want it stored in database
    if (this.state.content !== '') {
    
      this.makeRequest('/post');
      this.refs.notes.value ='';
      //this.setState({content: ''});
    } else {
      alert('Please write in the text field.');
    }
  }

  makeRequest(path) {
    var obj = {
      url: path,
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({content: this.state.content}),
      success: function(data) {
        console.log('sucessful get! yyaaayyy!! :D', data);
        //edit the data and make the loading bar update according to data value

        var obj = JSON.parse(data);
        console.log(obj.emotion);

        var result = []
        for (var key in obj.persona) {
          result.push([key, obj.persona[key]]);
        }



        this.setState(
        {score: obj.sentiment,
         emotion: obj.emotion,
         persona: result,
        });
      }.bind(this),
      error: function(err) {
        console.log('THERE IS AN ERRORRR :/');
      }
    }
    $.ajax(obj);
  }


  render() {
    {console.log('HERE:' , this.state.emotion) }
    return (
    <div className='center'>
      <textarea ref="notes" placeholder="Enter content here..." className='textArea' onChange={this.getTextVal.bind(this)}></textarea>
      <div>
        <p id='positivity'>Positivity: {String(parseInt(this.state.score * 100)) + '%'}</p>
        <EmotionElement emotionObj={this.state.emotion}/>
        <PersonaElement personaArr={this.state.persona}/>
       
        <button onClick={this.analyzeClicked.bind(this)}>Analyze</button>
        <button onClick={this.postClicked.bind(this)}>Post</button>
      </div>
    </div>
    )
  }
}

export default Analyze;

















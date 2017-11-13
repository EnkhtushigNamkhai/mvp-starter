import React from 'react';
import $ from 'jquery';

class PersonaElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    if (this.props.personaArr.length === 0) {
       return <p>PERSONALITY TYPES (<a href='https://www.16personalities.com/personality-types' target='_blank'> 16 Myers Briggs personas</a>)</p>;
    } else {
      console.log('do something with the persona data');
      console.log('my persona object! yayyy' , this.props.personaArr);


      return (

      <div>
        <p>PERSONALITY TYPES (<a href='https://www.16personalities.com/personality-types' target='_blank'> 16 Myers Briggs personas</a>)</p>
        <p>{this.props.personaArr[0][0]} : {String(parseInt(this.props.personaArr[0][1] * 100)) + '%'}</p>
        <p>{this.props.personaArr[1][0]} : {String(parseInt(this.props.personaArr[1][1] * 100)) + '%'}</p>
        <p>{this.props.personaArr[2][0]} : {String(parseInt(this.props.personaArr[2][1] * 100)) + '%'}</p>
      </div>
      )

    }
   
  }

  //if the persona is empty, 
  //Don't show anything


  //or if it has stuff in it
  //go through the object and display each value on the screen.
}

export default PersonaElement;
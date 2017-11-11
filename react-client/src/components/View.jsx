import React from 'react';
import Analyze from './Analyze.jsx';
//redirects which view the user clicked to see
class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    if (this.props.pageType === 'Analyze') {
      console.log('Will render Analyze!');
      return  (
        <div>
          <h1>ANALYZE PAGE</h1>
          <Analyze />
        </div>)
    } else if (this.props.pageType === 'Post') {
      console.log('Will render Post!');
      return null;
    } else if (this.props.pageType === 'TimeLine') {
      console.log('Will render TimeLine!');
      return null;
    }
  }

}



export default View;
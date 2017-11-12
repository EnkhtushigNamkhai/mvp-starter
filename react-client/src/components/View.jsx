import React from 'react';
import Analyze from './Analyze.jsx';
import Post from './Post.jsx';
import TimeLine from './TimeLine.jsx';
//redirects which view the user clicked to see

class View extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.pageType === 'Analyze') {
      console.log('Will render Analyze!');
      return  (
        <div>
          <Analyze/>
        </div>)
    } else if (this.props.pageType === 'TimeLine') {

      console.log('Will render TimeLine!', Array.isArray(this.props.timeline));
      return <TimeLine timeline={this.props.timeline}/>
    }
  }

}



export default View;
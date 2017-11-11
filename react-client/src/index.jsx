import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Analyze from './components/Analyze.jsx';
import View from './components/View.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      page: ''
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  timeLineNavHandler() {
    console.log('HANDLE THE timeline HERE');
    //make a get request to the server and retrieve data from the database.

    //this.setState({page: 'TimeLine'});
  }

  // postNavHandler() {
  //   console.log('HANDLE THE Post HERE');
  //   this.setState({page: 'Post'});
  //   <span className='menuItem' onClick={this.postNavHandler.bind(this)}>Post</span>
  // }

  analyzeNavHandler() {
    console.log('HANDLE THE Analyze HERE');
    this.setState({page: 'Analyze'});
  }





  render () {
    //if first time
    return (<div>
      <h1>Text Analysis</h1>
      <div className='menu'>
        <span className='menuItem' onClick={this.timeLineNavHandler.bind(this)}>TimeLine</span>
        <span className='menuItem' onClick={this.analyzeNavHandler.bind(this)}>Analyze</span>
      </div>
 
      {(() => {
        console.log('page ', this.state.page);
        switch (this.state.page.length !== 0) {
          case true: return <View pageType={this.state.page}/>;
        }
      })()}


    </div>)

  
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
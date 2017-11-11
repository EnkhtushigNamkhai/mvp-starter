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
    

    //this.setState({page: 'TimeLine'});
  }

  postNavHandler() {
    console.log('HANDLE THE Post HERE');

   //this.setState({page: 'Post'});
  }

  analyzeNavHandler() {
    console.log('HANDLE THE Analyze HERE');
    this.setState({page: 'Analyze'});
  }

 



  render () {
    //if first time
    return (<div>
      <h1>MY APP</h1>
      <p onClick={this.timeLineNavHandler.bind(this)}>TimeLine</p>
      <p onClick={this.postNavHandler.bind(this)}>Post</p>
      <p onClick={this.analyzeNavHandler.bind(this)}>Analyze</p>
      
 
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
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
      page: '',
      timeLine: []
    }
  }

  timeLineNavHandler() {
    console.log('HANDLE THE timeline HERE');
    //make a get request to the server and retrieve data from the database.
    this.makeRequest('/timeline', function (data) {
      console.log('DATA FROM THE DATABASE: ', data);

      this.setState({page: 'TimeLine', timeLine: JSON.parse(data)});

    }.bind(this));
  }

  graphHandler() {
    console.log('GRAPH HANDLER');

    this.makeRequest('/graph', function (data) {
      console.log('DATA FROM THE DATABASE: ', data);

      this.setState({page: 'Graph', timeLine: JSON.parse(data)});

    }.bind(this));
  }

  analyzeNavHandler() {
    console.log('HANDLE THE Analyze HERE');
    this.setState({page: 'Analyze'});
  }

  showSideMenu() {
    console.log('showsideMenu');
    show = true;
  }

  makeRequest(path, callback) {
    var obj = {
      url: path,
      method: 'GET',
      contentType: 'application/json',
      success: function(data) {
        console.log('sucessful get! yyaaayyy!! :D', data);
        callback(data);
      }.bind(this),
      error: function(err) {
        console.log('THERE IS AN ERRORRR :/');
      }
    }
    $.ajax(obj);
  }


  render () {
    //if first time
    return (<div>
      <button className='hamburgerBar' onClick={this.showSideMenu}></button>
      <h1>Text Analysis</h1>
      <div className='menu'>
        <span className='menuItem' onClick={this.timeLineNavHandler.bind(this)}>TimeLine</span>
        <span className='menuItem' onClick={this.graphHandler.bind(this)}>Graph</span>
        <span className='menuItem' onClick={this.analyzeNavHandler.bind(this)}>Analyze</span>
      </div>
 
      {(() => {
        console.log('page ', this.state.page);
        switch (this.state.page.length !== 0) {
          case true: return <View pageType={this.state.page} timeline={this.state.timeLine}/>;
        }
      })()}


    </div>)

  
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
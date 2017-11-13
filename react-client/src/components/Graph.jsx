import React from 'react';

class Graph extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

    var dataP = [];
    this.props.resultArr.forEach(function(record) {
      dataP.push({y: (parseInt(record.score * 100)), label: record.date});
    });

    var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title:{
      text: "Positivity Tracker"
    },
    axisY:{
      includeZero: false
    },
    data: [{        
      type: "line",       
      dataPoints: dataP
    }]
  });


  chart.render();
  }

  render() {
    return (
      <div id="chartContainer" style={{height: 450 + "px", width: 100 + "%"}}>
      </div>
    );
  }
}

export default Graph;


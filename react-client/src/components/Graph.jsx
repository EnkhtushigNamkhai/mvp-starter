import React from 'react';

class Graph extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

    var dataP = [];

    var obj = {};
    this.props.resultArr.forEach(function(record) {
      if (obj[record.date] === undefined) {
        obj[record.date] = [record.score, 1];
      } else {
        obj[record.date][0] += record.score;
        obj[record.date][1] += 1;
      }
    });

    for (var date in obj) {
      var score = obj[date][0]/obj[date][1];
      dataP.push({y: (parseInt(score * 100)), label: date});
    }

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


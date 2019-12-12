import React from 'react';
import './App.css';
import ReactApexCharts from 'react-apexcharts';
import ApexCharts from 'apexcharts';



class App extends React.Component {
  constructor(props) {
    super(props);
    
      const options = {
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }]
      };
      
      this.state = {
        chart_options: options
      }
  }

  updateData(){
    ApexCharts.exec('apexchart-example', 'updateSeries', [{
      data: [40, 55, 65, 11, 23, 44, 54, 33]
    }])
  }
  
  render() {
    return (
      <div>
        <ReactApexCharts options={this.state.chart_options} series={this.state.chart_options.series} type="bar" width={500} height={320} />
        <button onClick={() => this.updateData()}>Update</button>
      </div>
    )
  }
}

export default App;

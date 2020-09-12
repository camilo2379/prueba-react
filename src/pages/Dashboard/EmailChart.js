import React from 'react';
import ChartistGraph from 'react-chartist';


//Se realiza las estadisticas de los usuarios
const EmailStatistic = () => {

  let dataPreferences = {
    labels: ['10', '7', '70'],
    series: [10,7,70 ]
  };

  let optionsPreferences = {
    donut: false,
    donutWidth: 40,
    startAngle: 0,
    total: 100,
    showLabel: true,
    axisX: {
      showGrid: false,
      offset: 0
    },
    axisY: {
      offset: 0
    }
  };

  let chartType = 'Pie';

  return (

    <div className="card">
      <div className="header">
        <h4 className="title">System Tiles</h4>
        <p className="category">Last Week</p>
      </div>
      <div className="content">

        <ChartistGraph data={dataPreferences} options={optionsPreferences} type={chartType} className={'ct-chart ct-perfect-fourth'} />


      </div>
      <div className="footer">
        <div className="legend">
          <div className="item">
            <i className="fa fa-circle text-danger"></i>  Admin
          </div>
          <div className="item">
            <i className="fa fa-circle text-warning"></i>  Student
          </div>
          <div className="item">
            <i className="fa fa-circle text-info"></i> Teacher
          </div>
        </div>
        <hr />
      </div>
    </div>

  );
};

export default EmailStatistic;
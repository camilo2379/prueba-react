import React from 'react';
import Chart from 'react-chartist';

let data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [300, 200, 230, 500, 500, 300, 300, 300, 300, 400, 500, 500],
    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
    [600, 300, 300, 800, 600, 500, 400, 500, 500, 510, 800, 900]
  ]
};

let options = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false
  },
  height: "245px"
};

let responsiveOptions = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

const UserBehaviorChart = () => (
  <div className="card ">
    <div className="header">
      <h4 className="title">2020 Conexión de Usuarios</h4>
      <p className="category">Conexión de horas</p>
    </div>
    <div className="content">
      <Chart data={data} options={options} responsiveOptions={responsiveOptions} type="Bar" className="ct-chart" />

    </div>
    <div className="footer">
      <div className="legend">
        <div className="item">
          <i className="fa fa-circle text-info"></i> Admin
        </div>
        <div className="item">
          <i className="fa fa-circle text-danger"></i> Teacher
        </div>
        <div className="item">
          <i className="fa fa-circle text-warning"></i> Students
        </div>
      </div>
      <hr />
      <div className="stats">
        <i className="fa fa-check"></i> Información Certificada
          </div>
    </div>
  </div>
);

export default UserBehaviorChart;
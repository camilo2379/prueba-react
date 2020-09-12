import React from 'react';
import EmailChart from './EmailChart';
import SalesChart from './SalesChart';
import UserBehaviorChart from './UserBehaviorChart';


const Dashboard = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <EmailChart />
        </div>
        <div className="col-md-8">
          <SalesChart />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <UserBehaviorChart />
        </div>
      </div>

    </div>
  </div>
);

export default Dashboard;
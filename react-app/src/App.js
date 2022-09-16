import React, { useState } from 'react';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Pie, Doughnut } from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'September'],
  datasets: [
    {
      label: 'Users enrolled',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 100, 90, 120, 50]
    }
  ]
}

const eventState1 = {
  labels: ['1-Aug-22', '2-Aug-22', '3-Aug-22', '4-Aug-22', '5-Aug-22', '6-Aug-22', '7-Aug-22', '8-Aug-22', '9-Aug-22', '10-Aug-22', '12-Aug-22', '13-Aug-22', '14-Aug-22', '15-Aug-22', '16-Aug-22', '17-Aug-22', '18-Aug-22', '19-Aug-22', '20-Aug-22', '21-Aug-22', '22-Aug-22', '23-Aug-22', '24-Aug-22', '25-Aug-22', '26-Aug-22', '27-Aug-22', '28-Aug-22', '29-Aug-22', '30-Aug-22'],
  datasets: [
    {
      label: 'Sleep Score',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 66, 67, 68, 69, 63, 64, 62, 65, 66, 67, 68, 69, 70, 70, 71, 72, 73, 73, 73, 73, 73, 73, 74, 75, 76, 77, 77, 77]
    }
  ]
}

const eventState2 = {
  labels: ['1-Aug-22', '2-Aug-22', '3-Aug-22', '4-Aug-22', '5-Aug-22', '6-Aug-22', '7-Aug-22', '8-Aug-22', '9-Aug-22', '10-Aug-22', '12-Aug-22', '13-Aug-22', '14-Aug-22', '15-Aug-22', '16-Aug-22', '17-Aug-22', '18-Aug-22', '19-Aug-22', '20-Aug-22', '21-Aug-22', '22-Aug-22', '23-Aug-22', '24-Aug-22', '25-Aug-22', '26-Aug-22', '27-Aug-22', '28-Aug-22', '29-Aug-22', '30-Aug-22'],
  datasets: [
    {
      label: 'Sleep Score',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [70, 75, 67, 68, 69, 63, 64, 62, 65, 66, 67, 68, 69, 70, 70, 71, 72, 73, 73, 73, 73, 73, 73, 74, 75, 76, 77, 77, 77]
    }
  ]
}

const eventState3 = {
  labels: ['1-Aug-22', '2-Aug-22', '3-Aug-22', '4-Aug-22', '5-Aug-22', '6-Aug-22', '7-Aug-22', '8-Aug-22', '9-Aug-22', '10-Aug-22', '12-Aug-22', '13-Aug-22', '14-Aug-22', '15-Aug-22', '16-Aug-22', '17-Aug-22', '18-Aug-22', '19-Aug-22', '20-Aug-22', '21-Aug-22', '22-Aug-22', '23-Aug-22', '24-Aug-22', '25-Aug-22', '26-Aug-22', '27-Aug-22', '28-Aug-22', '29-Aug-22', '30-Aug-22'],
  datasets: [
    {
      label: 'Sleep Score',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [55, 60, 67, 68, 69, 63, 64, 62, 65, 66, 67, 68, 69, 70, 70, 71, 72, 73, 73, 73, 73, 73, 73, 74, 75, 76, 77, 77, 77]
    }
  ]
}

const state1 = {
  labels: ['January', 'February', 'March',
    'April', 'May','June' ,'July', 'August','September'],
  datasets: [
    {
      label: '# of sessions completed per month',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
      ],
      data: [80, 59, 100, 56, 60, 89, 95, 78, 38]
    }
  ]
}

const state2 = {
  labels: ['January', 'February', 'March',
    'April', 'May','June' ,'July','August','September'],
  datasets: [
    {
      label: '# of Issues logged per month',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
      ],
      data: [5, 9, 8, 8, 12, 10, 9, 15, 6]
    }
  ]
}

const Tab = (value) => {

  if (value.toString() === 'dhawal') {
    return <eventState2 />;
  } else if (value.toString() === 'Kaustubh') {
    return <eventState3 />;
  } else {
    return <eventState1 />;
  }
};

export default function App() {
  // this.changeUser = 'incatrex';
  const changeUser = (e) => {
    this.changeUser = e;
  }
  return (
    <div style={{ backgroundColor: "#FFD966", width: "100%", marginBottom: "20%"}}>
      <div style={{ backgroundColor: "#FFD966", float: "left", width: "500px", minHeight: "300px" }}>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: '# of Users enrolled per month',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
      <div style={{ backgroundColor: "#FFD966", marginLeft: "600px", width: "500px", minHeight: "300px" }}>
        <div>
          USERS:
          <select id="users"  onChange={(e) => changeUser(e.target.value)}>
            <option value="incatrex">incatrex</option>
            <option value="dhawal">dhawal</option>
            <option value="Kaustubh">Kaustubh</option>
          </select>
          {/* <h4>You selected {(this.changeUser != undefined) && (this.changeUser != '') ?  this.changeUer :"nouser"}</h4> */}
          {/* <Tab value={value} /> */}
        </div>
        <Line
          data={eventState3}
          options={{
            title: {
              display: true,
              text: 'Each user sleep score per month',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
      <div style={{ backgroundColor: "#FFD966", float: "left", width: "500px", minHeight: "300px" }}>
        <Pie
          data={state1}
          options={{
            title: {
              display: true,
              text: '# of sessions completed per month',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
      <div style={{ backgroundColor: "#FFD966", marginLeft: "600px", width: "500px", minHeight: "300px" }}>
        <Doughnut
          data={state2}
          options={{
            title: {
              display: true,
              text: '# of issues per month',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
    </div>
  );
}
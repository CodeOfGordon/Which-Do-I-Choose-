import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'

function Graph({datas, amount, x_axis, y_axis}){
    const Data = {
        labels: amount,
        datasets: [{
            label: 'Possible combinations',
            data: datas
          }]
    }
    
    const option = {
        scales: {
            y: {
              title: {
                display: true,
                text: y_axis
              }
            },
            x: {
              title: {
                display: true,
                text: x_axis
              }
            }
        }
      }
    
    return <Line data={Data} options={option}/>
}

export default Graph;
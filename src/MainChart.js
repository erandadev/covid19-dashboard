import React from 'react';
import {Line} from 'react-chartjs-2';



 const MainChart = (props) => {
    const data = props.data
    const days = []
    const cases = []
    const deaths = []
    const recoveries = []
    
    if(data.length > 0) {
        for(let i = 0; i <= 13; i++) {
            const day = data[i]

            days[13 - i] = day.date
            cases[13 - i] = day.cases_count
            deaths[13 - i] = day.deaths_count
            recoveries[13 - i] = day.recoveries_count
        }
    }

    const state = {
        labels: days,
        datasets: [
          {
            label: 'Cases',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#3679ff',
            borderColor: '#3679ff',
            borderWidth: 2,
            data: cases
          },
      
          {
            label: 'Recoveries',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#0AC480',
            borderColor: '#0AC480',
            borderWidth: 2,
            data: recoveries
          },

          {
            label: 'Deaths',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#F73744',
            borderColor: '#F73744',
            borderWidth: 2,
            data: deaths
          },
        ]
      }

    return (
      <div className="border-all padding" style={{height: "100%", backgroundColor: "#fff"}}>
          <p className="text-center bold">Daily figures last 14 days (SL)</p>
        
        <div className="mt-5">
        <Line
          data={state} />
        </div>
      </div>
    );  
}

export default MainChart;
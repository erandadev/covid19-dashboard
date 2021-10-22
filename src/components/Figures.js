import React from 'react'
import Figure from './Figure'

import casesIcon from './icons/cases.gif'
import deathsIcon from './icons/deaths.gif'
import recoveriesIcon from './icons/recoveries.gif'
import hospitalizedIcon from './icons/hospitalized.gif'
import chartIcon from './icons/chart.gif'

const Figures = (props) => {
    let data = props?.data ? props?.data[1]: [];

    let first = 0;
    let second = 0;
    let third = 0;
    let fourth = 0;

    const updatedAt = data?.data?.data.update_date_time

    if(props.title === "Total Figures (SL)") {
        first = data?.data?.data.local_total_cases
        second = data?.data?.data.local_deaths
        third = data?.data?.data.local_recovered
        fourth = data?.data?.data.local_active_cases
    } else {
        first = data?.data?.data.local_new_cases
        second = data?.data?.data.local_new_deaths
        third = props?.data[0].data?.data[0].recoveries_count

        // fourth = data?.data?.data.local_active_cases

        fourth = parseFloat(100 * first / (data?.data?.data.local_active_cases - first)).toFixed(2) 
    }

    return (
        <div className="figures padding border-all bg-white">
            <h4 className="figures-title">{props.title}</h4>
            
                <Figure
                    icon={casesIcon}
                    title="Cases"
                    data={numberWithComma(first)}
                    class="primary"
                />

                <Figure
                    icon={deathsIcon}
                    title="Deaths"
                    data={numberWithComma(second)}
                    class="danger"
                /> 

                <Figure
                    icon={recoveriesIcon}
                    title="Recoveries"
                    data={numberWithComma(third)}
                    class="success"
                />

                {props.title === "Total Figures (SL)" ? (<Figure
                    icon={hospitalizedIcon}
                    title="Hospitalized"
                    data={numberWithComma(fourth)}
                    class="danger"
                /> ):
                (<Figure
                    icon={chartIcon}
                    title="Growth Rate"
                    data={fourth + "%"}
                    class="secondary"
                /> )
                }
           
           <p style={{
               textAlign: 'center',
               fontSize: '0.8em', 
               marginBottom: 0 ,
               marginTop: 30,
               color: "rgb(109, 109, 109)"
               }}>
                   Last updated at: {updatedAt}
                </p>
        </div>
    )
}

function numberWithComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Figures
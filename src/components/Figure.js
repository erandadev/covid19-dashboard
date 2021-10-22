import React from 'react'

const Figure = (props) => {
    // Primary
    // Danger
    // Success
    // secondary

    // Title
    // Data
    // Icon

    return (
        <div className="card mt-5">
            <img src={props.icon} alt={props.title} style={{width: 30}} />

            <div className="two-row">
                <p className="card-title">{props.title}</p>
                <h3 className={`card-data card-data-${props.class}`}>
                    {props.data}
                </h3>
            </div>
        </div>
    )
}

export default Figure
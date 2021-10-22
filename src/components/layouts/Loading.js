import React from 'react'
import loading from './loading.gif';

const Loading = () => {
    return (
        <div className="d-flex justify-center align-y-center" draggable={false}>
            <img src={loading} alt="Loading........." />
        </div>
    )
}

export default Loading
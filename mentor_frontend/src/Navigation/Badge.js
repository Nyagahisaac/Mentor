import React from 'react'

import './dashboard.css'

const Badge = props => {
    return (
        <span className={`badge badge-${props.type}`}>
            {props.content}
        </span>
    )
}

export default Badge

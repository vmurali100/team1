import React from 'react'
import { Link } from 'react-router-dom'
export const Services = () => {
    return (
        <div>
            <h2>Welcome to Services Component</h2>
            <ul>
                <li><Link to="services/ui">UI Development</Link></li>
                <li><Link to="services/backend">Back End Development</Link></li>

            </ul>
        </div>
    )
}

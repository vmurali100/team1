import React, { useEffect, useState } from 'react';
import axios from 'axios'

export const Jobs = () => {
    const [jobs, setjobs] = useState([]);
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        axios.get("https://5cac1d41c85e05001452eef0.mockapi.io/jobs").then(res => {
            setisLoading(false)
            setjobs(res.data.jobs)
        }).catch(() => {
            setisLoading(false)
        })
    }, [])

    return (
        <div>
            {isLoading && <h2>Loading .....</h2>}
            {jobs.length > 0 && jobs.map((job) => {
                return <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <p>ID : {job.id}</p>
                        <p>Origon : {job.origin}</p>
                        <p>Destination : {job.destination}</p>
                        <p>Date : {job.date}</p>
                        <p>Price : {job.price}</p>
                    </div>
                </div>
            })}
        </div>
    )
}

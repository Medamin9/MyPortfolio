import React from 'react'
import './Points.css'
export default function Points() {
  return (
    <div className='point_container'>
        <article className="point_card">
            <h1 className="title">+6</h1>
            <small> Month Working</small>
            <h5>Experience</h5>
        </article>

        <article className="point_card">
            <h1 className="title">+10</h1>
            <small> Worldwide</small>
            <h5>Clients</h5>
        </article>

        <article className="point_card">
            <h1 className="title">+10</h1>
            <small> Completed </small>
            <h5>Projects</h5>
        </article>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import './nopage.css'

export default function Nopage() {
    return (
        <div className="pagenotfound">
            <img src="assets/404.svg" alt="" />
            <h2>Page Not Found!</h2>
            <Link to="/" className="back">Back Home</Link>
        </div>
    )
}

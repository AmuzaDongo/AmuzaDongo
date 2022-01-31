import React from 'react';
import { Link } from "react-router-dom";
import "./logo.css"

export default function Logo() {
    return (
        <Link to="/" className="logo">
            <img src="assets/dongo.jfif" alt="" />
            <span>dongoamuza</span>
        </Link>
    )
}

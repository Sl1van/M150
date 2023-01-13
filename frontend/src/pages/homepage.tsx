import React from "react"
import "./homepage.css"
import Card from "../components/Card/card";
import Header from "../components/Header/header";

function Homepage() {
    return (
        <div className="homepage">
            <div className="card-section">
                <Card/>
            </div>
        </div>
    )
}

export default Homepage

import React from "react";
import "./card.css"
import cable from "../../assets/cable.jpeg"

function Card() {
    return (
        <div className="card-container">
            <div className="image-container">
                <div className="image-placeholder">
                    <img className="img-style" style={{width: "250px", height: "200px"}} src={cable} alt="cable"/>
                </div>
            </div>
            <div className="body-container">
                <div className="next-eachOther">
                    <p className="text-style">[Title]</p>
                    <p className="text-style">[Available]</p>
                </div>
                <div className="next-eachOther">
                    <p className="text-style">[Price]</p>
                    <button>Rent Me</button>
                </div>
            </div>

        </div>
    )
}

export default Card

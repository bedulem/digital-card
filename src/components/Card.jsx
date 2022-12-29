import { useState } from "react";
import "./Card.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({onClick}) {
    const element = <FontAwesomeIcon icon={["fab", "github"]} />
    const [isRotated, setIsRotated] = useState(false);

    function handleClick() {
        setIsRotated (!isRotated);
        onClick(isRotated);
    }

    return (
    <div className={isRotated ? " wrapper floating turning" : " wrapper floating"}  onClick={handleClick}>
        <div className="card">
            <div className="front">
                <h1># BACK-END</h1>
            </div>
            <div className="back">
                {element}
                <h2>@ Bedulem</h2>
            </div>
        </div>
    </div>
    );   
}

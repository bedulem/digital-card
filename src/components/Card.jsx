import { useState } from "react";
import "./Card.css"

export default function Card() {

    const [isRotated, setIsRotated] = useState(false);

    function handleClick() {
        setIsRotated (!isRotated);
        console.log(isRotated)
    }

    return (
    <div className=  {isRotated ? " Card turning" : " Card floating"}  onClick={handleClick}>
        <h1># BACK-END</h1>
    </div>
    );   
}

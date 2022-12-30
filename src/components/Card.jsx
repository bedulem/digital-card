import { useState } from "react";
import "./Card.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ onClick }) {
  const [isRotated, setIsRotated] = useState(false);

  function handleClick() {
    setIsRotated(!isRotated);
    onClick(isRotated);
  }

  return (
    <div
      className={isRotated ? " wrapper floating turning" : " wrapper floating"}
      onClick={handleClick}
    >
      <div className="card">
        <div className="front">
          <h1># BACK-END</h1>
        </div>
        <div className="back">
          <div className="wrapper-icon">
            <FontAwesomeIcon icon={faGithub} size="4x" color="white" />
          </div>
          <a
            href={"https://www.linkedin.com/in/bel%C3%A9nsantochi/"}
            target="_blank"
            rel="noreferrer"
            alt="linkedin"
          >
            <h2>@bedulem</h2>
          </a>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./CircleEmployeesCard.css";
import { employees } from "../../../data/dataEmployees";

const CircleEmployeesCard: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (index: number) => {
    setIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((startingIndex) => (startingIndex + 1) % employees.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [index]);

  const handlePrevious = () => {
    setIndex(
      (startingIndex) =>
        (startingIndex - 1 + employees.length) % employees.length
    );
  };

  const handleNext = () => {
    setIndex((startingIndex) => (startingIndex + 1) % employees.length);
  };

  return (
    <div className="circle-employees-card">
      <div className="circle-employees-image">
        {employees.map((employees, idx) => (
          <img
            key={employees.id}
            src={employees.image}
            alt={employees.name}
            className={`image-${idx + 1} ${
              index === idx ? "circle-employees-image-actively" : ""
            }`}
            onClick={() => handleClick(idx)}
          />
        ))}
      </div>
      <div className="circle-employees-card">
        <div className="circle-employees-card-img-user">
          <img src={employees[index].image} alt={employees[index].name} />
        </div>
        <div className="circle-employees-card-button">
          <button
            onClick={handlePrevious}
            className="circle-employees-card-button-left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 81 80"
              fill="none"
            >
              <path
                d="M46.5 28L34.5 40L46.5 52"
                stroke="#5E419D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="circle-employees-card-button-right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 81 80"
              fill="none"
            >
              <path
                d="M46.5 28L34.5 40L46.5 52"
                stroke="#5E419D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="circle-employees-card-data">
          <div className="circle-employees-card-info">
            <p>{employees[index].textParagraphOne}</p>
            <p>{employees[index].textParagraphTwo}</p>
            <p>{employees[index].textParagraphThree}</p>
            <div className="circle-employees-card-info-main">
              <p>{employees[index].name}</p>
              <h2>{employees[index].position}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleEmployeesCard;

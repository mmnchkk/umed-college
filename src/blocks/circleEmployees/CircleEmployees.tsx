import { CircleEmployeesCard } from "../../components/index";
import "./CircleEmployees.css";

const CircleEmployees = () => {
  return (
    <div className="circle-employees">
      <div className="circle-employees-wrap">
        <div className="circle-employees-title">
          <p>
            Интересная работа с амбициозными задачами — это <span>ЮМЕД</span>
          </p>
        </div>
        <div className="circle-employees-card">
          <CircleEmployeesCard />
        </div>
        <div className="circle-employees-footer">
          <p>
            ЮМЕД — название автономной некоммерческой негосударственной
            профессиональной образовательной организации «Уральский медицинский
            колледж»
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircleEmployees;

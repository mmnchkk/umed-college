import "./Conditions.css";
import { PossibilityCard } from "../../components";
import { possibilities } from "../../data/dataPossibilities";

const Conditions = () => {
  return (
    <div className="conditions">
      <div className="conditions-wrap">
        <div className="conditions-info">
          <h2>ИЩЕМ ПЕРВОКЛАССНЫХ СОТРУДНИКОВ В СВОИХ СФЕРАХ</h2>
          <p className="conditions-desc">
            Уральский медицинский колледж начал работу в 2018 году, а в 2023
            открылся Уральский медицинский институт. Сегодня колледж и институт располагаются в трех
            корпусах и обучают более 4000 студентов. Современные форматы преподавания позволяют
            нам обучать студентов со всей страны.
          </p>
          <div className="conditions-cards">
            {possibilities.map((possibility, index) => (
              <PossibilityCard key={index} possibility={possibility} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conditions;

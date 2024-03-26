import { IntroSwiper } from "../../components/index";
import { Cap, Logo } from "../../img/index";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-wrap">
        <div className="intro-blocks">
          <div className="intro-blocks-left">
            <img src={Logo} alt="Logo" className="intro-logo" />
            <p>Повышение качества и продолжительности жизни людей</p>
            <img src={Cap} alt="Cap" className="intro-cap" />
            <h1>задаем тренды в сфере медицинского образования</h1>
            <button>Вакансии</button>
          </div>
          <IntroSwiper />
        </div>
      </div>
    </div>
  );
};

export default Intro;

import { useState } from "react";
import { AboutUsInfo, VideoPlayer } from "../../components/index";
import PosterVideo from '../../img/aboutImg/poster.svg';
import { DvlpmtImg, JobImg, SalaryImg } from "../../img/index";
import "./AboutUs.css";
import VideoInterview from "./VideoInterview.mp4";

const AboutUs = () => {
  const [image, setImage] = useState(true);
    
    const click = () => {
      setImage(!image)
    }

  return (
    <div>
      <main className="main-about-us">
        <div className="about-us">
          <div className="development">
            <img src={DvlpmtImg} alt="" className="about-blocks-img" />
            <AboutUsInfo
              title="развивайтесь и развивайте"
              desc="Вы хотите развиваться сами, совершенствовать процессы вокруг, показывать высший пилотаж в своем деле.
                    "
            />
          </div>
          <div className="world-better">
            <AboutUsInfo
              title="делайте мир лучше"
              desc="Мы уверенны, наши студенты внесут вклад в развитие медицины, а вы поможете в этом. Создаете ли вы тепло и уют в учебных аудиториях, кормите вкусным обедом, учите или обеспечиваете безопасность, — ориентируемся на человека."
            />
            <VideoPlayer src={VideoInterview} className="video" />
            { image ? 
              (
              <img src={PosterVideo} alt="" className="poster-video" onClick={click}/>
              ) : (
              <img src={PosterVideo} alt="" className="poster-video-none"/>
              )
            }
            
          </div>
          <div className="salary">
            <img src={SalaryImg} alt="" className="about-blocks-img" />
            <AboutUsInfo
              title="получайте полностью белую заработную плату"
              desc="Мы придерживаемся открытой позиции в финансовых вопросах и гордимся своей репутацией."
            />
          </div>
          <div className="job">
            <AboutUsInfo
              title="оптимизируйте рабочие процессы"
              desc="Наш чат-бот помогает автоматизировать вопросы студентов и преподавателей, а также информировать персонал."
            />
            <img src={JobImg} alt="" className="about-blocks-img" />
          </div>
          <div className="feature">
            <div className="feature-info">
              <h5>
                мы <span className="green">шире смотрим</span><br />
                на свое рабочее место
              </h5>
              <p>
                Ходим в театр, сауну, бассейн, дарим
                корпоративные подарки, играем вместе
                в спортивные игры, занимаемся самопознанием.
                Проводим мозговой штурм в игровой форме.
              </p>
              <h6>
                реализуем лучшие идеи наших коллег —
                у нас открыты границы
                для нового
              </h6>
            </div>
            <video
              autoPlay
              playsInline
              loop={true}
              muted={true}
              preload="auto"
              src="https://hhcdn.ru/file/17642231.mp4"
              className="video-fragment"
            ></video>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;

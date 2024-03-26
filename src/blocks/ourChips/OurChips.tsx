import { VideoPlayer } from "../../components";
import "./OurChips.css";
import { Arrow, Go, PosterMen, PosterVk } from "../../img/index";
import VideoReception from "./video-reception.mp4";
import { useState } from "react";

const OurChips = () => {
  const [button, setButton] = useState(true);
  const [buttonVk, setButtonVk] = useState(true);
  const [image, setImage] = useState(true);
  const [imageVk, setImageVk] = useState(true);

  const click = () => {
    setButton(!button);
    setImage(!image);
  };

  const clickVk = () => {
    setButtonVk(!buttonVk);
    setImageVk(!imageVk);
  };

  return (
    <div>
      <main className="main-our-chips">
        <div className="our-chips">
          <div className="our-chips-title">
            <h2 className="base">
              мы используем{" "}
              <span className="green-back">прогрессивный подход</span> в
              образовательных процессах, ищем современные методы, внедряем{" "}
              <span className="green-back">технологии</span>, исследуем
              возможности{" "}
              <span className="green-back">искусственного интеллекта</span>
            </h2>
            <h2 className="media">
              мы используем<br />
              <span className="green-back">прогрессивный подход</span><br />
              в образовательных<br />
              процессах, ищем<br />
              современные методы,<br />
              внедряем <span className="green-back">технологии</span>,<br />
              исследуем возможности<br />
              <span className="green-back">искусственного интеллекта</span>
            </h2>
          </div>
          <div className="our-chips-blocks">
            <div className="our-chips-block-one">
              <div className="our-chips-block-one-info">
                <p>
                  <img src={Arrow} alt="Arrow" />
                  чтобы образование перестало быть зубрежкой, а превратилось в
                  увлекательный процесс.
                </p>
                <p>
                  <img src={Arrow} alt="Arrow" />
                  чтобы качество подготовки наших выпускников было ориентиром в
                  сфере образования, и уровень организации процессов притягивал
                  лучших специалистов.
                </p>
              </div>
              <iframe
                src="https://vk.com/video_ext.php?oid=-130300428&id=456240711&hd=2&controls=0"
                width="230"
                height="440"
                allow="autoplay;
                        encrypted-media;
                        fullscreen;
                        picture-in-picture;"
                allowFullScreen
                className="video-vk"
                title="Room-тур по корпусу на Курчатова, 9"
              ></iframe>
              {imageVk ? (
                <img
                  src={PosterVk}
                  alt="PosterVk"
                  className="poster-vk-video"
                />
              ) : (
                <img
                  src={PosterVk}
                  alt="PosterVk"
                  className="poster-video-none"
                />
              )}
              {buttonVk ? (
                <button className="button-go-vk" onClick={clickVk}>
                  <img src={Go} alt="Go" />
                </button>
              ) : (
                <button className="button-none">
                  <img src={Go} alt="Go" />
                </button>
              )}
            </div>
            <div className="our-chips-block-two">
              <div className="our-chips-block-two-info">
                <p>
                  <img src={Arrow} alt="Arrow" />
                  чтобы образование перестало быть зубрежкой, а превратилось в
                  увлекательный процесс.
                </p>
                <p>
                  <img src={Arrow} alt="Arrow" />
                  чтобы качество подготовки наших выпускников было ориентиром в
                  сфере образования, и уровень организации процессов притягивал
                  лучших специалистов.
                </p>
              </div>
              <VideoPlayer src={VideoReception} className="video-reception" />
              {image ? (
                <img
                  src={PosterMen}
                  alt="PosterMen"
                  className="poster-men-video"
                />
              ) : (
                <img
                  src={PosterMen}
                  alt="PosterMen"
                  className="poster-video-none"
                />
              )}
              {button ? (
                <button className="button-go" onClick={click}>
                  <img src={Go} alt="Go" />
                </button>
              ) : (
                <button className="button-none">
                  <img src={Go} alt="Go" />
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurChips;

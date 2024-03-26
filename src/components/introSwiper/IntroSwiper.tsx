import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./IntroSwiper.css";

import { Pagination, Autoplay } from "swiper/modules";
import { collegePhotos } from "../../data/dataIntroSwiper";

const IntroSwiper = () => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 5000 }}
      >
        {collegePhotos.map((collegePhoto) => (
          <SwiperSlide className="swiper-comp">
            <div className="swiper-comp-big">
              <img src={collegePhoto.image} alt={collegePhoto.alt} />
            </div>
            <div className="swiper-comp-mini">
              <img src={collegePhoto.imageMin} alt={collegePhoto.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default IntroSwiper;

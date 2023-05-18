import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import './Banners.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import Banner from "./Banner";

const Banners = () => {
  const [banners, setBanners] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("https://figurio.vercel.app/banners")
      .then((result) => result.json())
      .then((banners) => {
        setBanners(banners);
      });
  }, []);

  const handleSwiperHover = () => {
    if (swiperRef.current && swiperRef.current.swiper.autoplay.running) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleSwiperLeave = () => {
    if (swiperRef.current && !swiperRef.current.swiper.autoplay.running) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div
      className="mb-20"
      onMouseEnter={handleSwiperHover}
      onMouseLeave={handleSwiperLeave}
    >
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner._id}>
            <Banner banner={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banners;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './CustomSwiperStyles.css';


// import required modules
import { Pagination, Navigation } from "swiper";
import cards from "../../data/cards";

export default function CardSwiper() {
  return (
    <div class="card_swiper_container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {
          cards.map((card, index) =>
            <SwiperSlide key={index}>
              <div className="swiper_Card_img_wrapper">
                <img src={card.image} alt="" />
              </div>
              <h1>{card.title}</h1>
              <p>
                {card.subtitle}
              </p>
            </SwiperSlide>

          )
        }
      </Swiper>
    </div>
  );
}

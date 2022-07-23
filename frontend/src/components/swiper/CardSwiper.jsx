// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CustomSwiperStyles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import cards from "../../data/cards";

export default function CardSwiper() {
  return (
    <div>
      <div class="card_swiper_container">
        <h1 className="slider_heading">Our Top Tutors</h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={false}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="swiper_Card_img_wrapper">
                <img src={card.image} alt="" />
                <div className="avatar_wrapper">
                  <img
                    className="avatar_img"
                    alt=""
                    height={30}
                    width={30}
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  />
                  <span className="avatar_name">Deep Lahane</span>
                </div>
                <p>{card.subtitle}</p>
              </div>
              {/* <h1>{card.title}</h1> */}
               
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

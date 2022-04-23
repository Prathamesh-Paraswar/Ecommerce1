import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination ,Autoplay} from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination]);
function App() {
  const slides = [];
  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={i} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/1300/300`}
          alt={`Dummy Image ${i}`}
        ></img>
      </SwiperSlide>
    );
  }
  return (
    <>
      <Swiper tag="section" wrapperTag="ul" navigation pagination autoplay spaceBetween={0} slidesPerView={1}>
        {slides}
      </Swiper>
    </>
  );
}

export default App;

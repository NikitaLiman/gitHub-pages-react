import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Обновите импорт в зависимости от версии Swiper
import 'swiper/css';
import 'swiper/css/navigation'; // Убедитесь, что этот импорт присутствует
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import './slider.scss';
import Iphone16 from '../../img/InvImg/Remove-bg.ai_1725909721842.png';
import blade from '../../img/InvImg/blade.png';
import samsung from '../../img/InvImg/pl-odyssey-neo-g9-g95na-ls49ag950nuxen-530464538.avif';

// Import Swiper styles
import 'swiper/css';
const slides = [
  { image: Iphone16, title: 'iPhone 16' },
  { image: blade, title: 'Razer: Blade' },
  { image: samsung, title: 'Samsung Odyssey' },
];

export default () => {
  return (
    <div className="blockSl">
      <h2>Comming Soon:</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        className="Slider"
        spaceBetween={20}
        slidesPerView={1}
        loop
        speed={1500}
        autoplay={{ delay: 2500 }}
        navigation
        Pagination={{ clickable: true }}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <div className="title">
              <h1>{slide.title}</h1>
            </div>
            <img className="img" src={slide.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

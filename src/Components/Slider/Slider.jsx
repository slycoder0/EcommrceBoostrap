/* Import Swiper React Component */
import { Swiper, SwiperSlide } from 'swiper/react';
import ft1 from '../../assets/imgs/banner1.jpg';
import ft2 from '../../assets/imgs/banner2.jpg';
import ft3 from '../../assets/imgs/banner3.jpg';
import ft4 from '../../assets/imgs/banner4.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css';

// Import Required Modules
import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={ft1} alt='' />
        </SwiperSlide>

        <SwiperSlide>
          <img src={ft2} alt='' />
        </SwiperSlide>

        <SwiperSlide>
          <img src={ft3} alt='' />
        </SwiperSlide>

        <SwiperSlide>
          <img src={ft4} alt='' />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;

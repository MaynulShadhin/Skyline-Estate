import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: "1000" });
    }, [])
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img className='w-screen md:h-[800px] object-cover' src={slider2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-screen md:h-[800px] object-cover' src={slider3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-screen md:h-[800px] object-cover' src={slider1} alt="" /></SwiperSlide>
            </Swiper>
            <div className='absolute z-10 md:top-52 md:left-10 hidden md:block'>
                <h2 data-aos="fade-right" className='text-5xl font-bold mb-4'>Best <span className='font-bold text-lime-500'>Seller</span> In City</h2>
                <p  data-aos="fade-left" className='text-lg'>Innovative platform showcasing prime properties, tailored solutions, seamless transactions, <br /> and expert insights for discerning investors</p>
            </div>
        </div>
    );
};

export default Banner;
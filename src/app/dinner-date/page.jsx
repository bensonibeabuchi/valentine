
"use client"

import React, { useState, useEffect } from 'react';
import Image from "next/image";
// import first from "/images/1.jpg"
// import second from "/public/images/2.jpg"
// import third from "/public/images/3.jpg"
// import fourth from "/public/images/4.jpg"
// import fifth from "/public/images/5.jpg"

import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const DinnerDatePage = () => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date("February 17, 2024 00:00:00").getTime();

    // Update the countdown every second
    const timer = setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();

      // Calculate the distance between now and the countdown date
      const distance = countDownDate - now;

      // Calculate days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(timer);
        setCountdown("It's dinner time!");
      }
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto bg-background2 bg-cover">
      <Swiper className='mx-auto w-4/5'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      autoplay
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {/* <SwiperSlide><Image className='mx-auto justify-center items-center grid' src={first} width={400} height={400} alt="images" /></SwiperSlide> */}
      {/* <SwiperSlide><Image className='mx-auto justify-center items-center grid' src={second} width={400} height={400} alt="images" /></SwiperSlide>
      <SwiperSlide><Image className='mx-auto justify-center items-center grid' src={third} width={400} height={400} alt="images" /></SwiperSlide>
      <SwiperSlide><Image className='mx-auto justify-center items-center grid' src={fourth} width={400} height={400} alt="images" /></SwiperSlide>
      <SwiperSlide><Image className='mx-auto justify-center items-center grid' src={fifth} width={400} height={400} alt="images" /></SwiperSlide> */}
      <SwiperSlide><img className='mx-auto justify-center items-center grid' width={400} height={400} src="/images/1.jpg" alt="Your Image" /></SwiperSlide>
      <SwiperSlide><img className='mx-auto justify-center items-center grid' width={400} height={400} src="/images/2.jpg" alt="Your Image" /></SwiperSlide>
      <SwiperSlide><img className='mx-auto justify-center items-center grid' width={400} height={400} src="/images/3.jpg" alt="Your Image" /></SwiperSlide>
      <SwiperSlide><img className='mx-auto justify-center items-center grid' width={400} height={400} src="/images/4.jpg" alt="Your Image" /></SwiperSlide>
      <SwiperSlide><img className='mx-auto justify-center items-center grid' width={400} height={400} src="/images/5.jpg" alt="Your Image" /></SwiperSlide>

    </Swiper>
    <div className='mt-4 flex flex-col items-center justify-center text-center'>
      <p className="text-xl font-bold">Dinner Date Invitation</p>
      <small className='font-mono'>Come join me for a romantic dinner at</small>
      <p className='font-bold text-4xl mt-8'> Taj Restaurant | Bar </p>
      <small>1064 Abagbon Cl, Victoria Island, Lagos 106104, Lagos</small>
      
      <small className='mt-4'>Countdown:</small>
      <div className="font-bold text-xl">{countdown}</div>

      <p className='mt-4 font-bold'>Dress Code: HOT 🔥</p>

    </div>
      
    </div>
  );
};

export default DinnerDatePage;
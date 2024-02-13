
"use client"

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';

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
      modules={[ Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

      <SwiperSlide><Image className='mx-auto justify-center items-center grid' src="/images/1.jpg" width={400} height={400} alt="images" /></SwiperSlide>
      <SwiperSlide><Image className='mx-auto justify-center items-center grid' src="/images/2.jpg" width={400} height={400} alt="images" /></SwiperSlide>
      <SwiperSlide><Image className='mx-auto justify-center items-center grid' src="/images/3.jpg" width={400} height={400} alt="images" /></SwiperSlide>
      <SwiperSlide><Image className='mx-auto justify-center items-center grid' src="/images/4.jpg" width={400} height={400} alt="images" /></SwiperSlide>
      <SwiperSlide><Image className='mx-auto justify-center items-center grid' src="/images/5.jpg" width={400} height={400} alt="images" /></SwiperSlide>
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
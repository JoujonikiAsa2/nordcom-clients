'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
// import fireImg from '../../assets/images/fire.png';
import fireImg from '@/assets/images/fire.png';

interface CountdownProps {
  initialTime: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const CountdownTimer: React.FC<CountdownProps> = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }

        let newHours = prevTime.hours;
        let newMinutes = prevTime.minutes;
        let newSeconds = prevTime.seconds - 1;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='w-[264px] h-[60px] bg-[#101940]  rounded-md px-2'>
      <div className='flex justify-center gap-2 items-center h-full'>
        <div className=''>
          <Image src={fireImg} alt="clock" width={25} height={25} />
        </div>
        <div className='flex flex-col items-center text-white text-lg font-semibold ml-2'>
          {String(timeLeft.hours).padStart(2, '0')}
          <span className='text-white'>hour</span>
        </div>
        <p className='text-white mx-1 font-bold'>|</p>
        <div className='flex flex-col items-center text-white text-lg font-semibold ml-2'>
          {String(timeLeft.minutes).padStart(2, '0')}
          <span className='text-white'>Min</span>
        </div>
        <p className='text-white mx-1 font-bold'>|</p>
        <div className='flex flex-col items-center text-white text-lg font-semibold ml-2'>
          {String(timeLeft.seconds).padStart(2, '0')}
          <span className='text-white'>Sec</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
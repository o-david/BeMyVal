import React, { useEffect, useState } from 'react'
import Yesimg from '../assets/yes2.jpeg' 

const Yes = () => {
    const [text1Visible, setText1Visible] = useState(false);
  const [text2Visible, setText2Visible] = useState(false);
  const [text3Visible, setText3Visible] = useState(false);

  useEffect(() => {
    // Use setTimeout to control the fading-in sequence
    const delay = 1000; // 1000 milliseconds (1 second) delay

    const timeout1 = setTimeout(() => {
      setText1Visible(true);
    }, delay);

    const timeout2 = setTimeout(() => {
      setText2Visible(true);
    }, delay * 2);

    const timeout3 = setTimeout(() => {
      setText3Visible(true);
    }, delay * 4);

    return () => {
      // Clear timeouts to avoid memory leaks
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);
  return (
    <div className='bg-black h-screen'>
    <div className="bg-no-repeat flex justify-center items-center bg-center w-full h-full md:h-screen bg-[url('./assets/yes2.jpeg')] flex-col text-center" >
            {/* Your component content goes here */}
            <h1 className={`text-[2rem] text-white ${text1Visible ? 'animate-fade-in' : 'opacity-0'}`}>You for no gree mtcheeew</h1>
            <h1 className={`text-[1.5rem] text-white ${text2Visible ? 'animate-fade-in' : 'opacity-0'}`}>I have a Surprise for you later tonight</h1>
            <h1 className={`text-[1.5rem] text-white ${text3Visible ? 'animate-fade-in' : 'opacity-0'}`}>PS: I love you</h1>
      
        </div>
    </div>
  )
}

export default Yes
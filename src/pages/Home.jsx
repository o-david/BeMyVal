import React, { useState } from 'react'
import Img1 from "../assets/Img1.jpg";
import { Link } from 'react-router-dom';

const Home = () => {
    const [num, setNum] = useState(0)
    const data =[
      "No",
      "Stop nah",
      "please nah ",
      "i will soon change it for you",
      "Try it again and I will delete this button",
    ]
    
    const toggleResponse = () => {
      if (num<5) {
        setNum(num+1);
      }
    }
    
  
    return (
      <div className='flex justify-center items-center h-[100vh] bg-[#f7f7f7]'>
        <div className='w-full md:w-1/2 flex flex-col items-center'> 
          <img src={Img1} alt="" />
          <div className='flex gap-[10vw] w-full justify-between'>
  
          <Link to={'./yes'} className='bg-green-700 text-white w-[45%] justify-center flex cursor-pointer items-center py-6'><p className='text-[1rem] md:text-[2rem] '>Yes</p></Link>
          {
            data[num] && <div onClick={toggleResponse} className='bg-red-700 w-[45%] cursor-pointer py-2 items-center text-center text-white justify-center flex'><p className='text-[1rem] md:text-[2rem]'>{data[num]}</p></div>
          }
            </div>
          </div>
      </div>
    )
}

export default Home
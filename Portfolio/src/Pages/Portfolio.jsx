import React from 'react'
import calculator from '../assets/calculator.webp'

const Portfolio = () => {
  const src="https://tailwindcss.com/"
  return (
    <div className="text-white ml-10" >
      <div className="mt-10  " >
        <h1 className="text-3xl font-bold" >Portfolio</h1>
        <p className="text-[15px]" >Check out some of my works</p>
      </div>
      <div className="mt-18 bg-white w-30" >
      <a href={src} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col items-center bg-gray-800 cursor-pointer  p-2 rounded-lg w-30" >
          <img className="h-25 w-25" src={calculator} alt="" />
          <p>Calculator</p>
        </div>
        </a>
      </div>
    </div>
  )
}

export default Portfolio
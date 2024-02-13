import React, { useState } from "react"
import Arrow  from "../assets/Arrow.svg?react"
import Images from "../assets/images/Images.jsx"

const Landing = () => {
  const [arrowColor, setArrowColor] = useState("white")
  const [showBison, setShowBison] = useState(null)

  const handleArrowHover = () => {
    setArrowColor("#783F8E")
  }

  const handleArrowLeave = () => {
    setArrowColor("white")
  }

  const handleNDSUHover = () => {
    setTimeout(() => {
      setShowBison(true)
    }, 500)
  }

  const handleNDSULeave = () => {
    setTimeout(() => {
      setShowBison(false)
    }, 500)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-no-repeat bg-cover shadow-inset-custom bg-landing-page bg-[#111111]">
      <div className="mx-4 text-center text-white align-middle md:pb-8 animate-fade-in">
        <p className="pb-2 text-4xl md:text-5xl lg:text-6xl">Hi, Noah Huesman</p>
        <p className="text-xl md:text-2xl lg:text-3xl">
          I'm a Junior Studying Software Engineering at&nbsp;
          <a 
            href="https://www.ndsu.edu/" 
            className="underline cursor-pointer underline-offset-4" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={handleNDSUHover}
            onMouseLeave={handleNDSULeave}
          >NDSU</a>
        </p>
      </div>
      <div className="flex flex-row items-center justify-center w-screen gap-24">
      <div className={`w-96 xl:block ${showBison ? "animate-fade-in" : (showBison === false ? "animate-fade-out" : "opacity-0")}`}>
          <img src={Images.Bison} alt="Roll Herd"/>
        </div>
        <div>
          <Arrow className={`${arrowColor === "#783F8E" ? "animate-pulse" : "animate-none"} hidden cursor-pointer xl:block`}
            color={arrowColor} 
            onMouseEnter={handleArrowHover}
            onMouseLeave={handleArrowLeave}
          />
        </div>
        <div className={`w-96 xl:block ${showBison ? "animate-fade-in" : (showBison === false ? "animate-fade-out" : "opacity-0")}`}>
          <img src={Images.Bison} alt="Roll Herd"/>
        </div>
      </div>
    </div>
  )
}

export default Landing
import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Jr. Front-end Developer", "Full Stack Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 30,
      delaySpeed: 2500,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Madhukar Gumanju</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span className=' font-extrabold underline decoration-sky-500 text-danger-700'>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner
import React from 'react';
import Typewriter from 'typewriter-effect';



const TypeWriter = () => {
  return (
    <div>
        <Typewriter
            onInit={(typewriter)=>{
                typewriter
                .typeString("Fullstack developer")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Welcome to my portfolio")
                .start();
            }}
        />
    </div>
  )
}

export default TypeWriter;
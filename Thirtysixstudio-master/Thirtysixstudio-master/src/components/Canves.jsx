import React, { useEffect, useRef, useState } from 'react'
import canvesimage from '../canvesimage'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Canves({details}) {

    const { startIndex, numImages, duration, size, top, left, zIndex }=details;
    const canvasRef=useRef(null)
    const[index,setIndex]=useState({value:startIndex});


useGSAP(()=>{
    gsap.to(index,{
        value:startIndex+numImages-1,
        duration:duration,
        repeat:-1,
        ease:"linear",
        onUpdate: ()=>{
         setIndex({value:Math.round(index.value)})
        }
    })
})



useEffect(()=>{
const scale = window.devicePixelRatio;

const canvas=canvasRef.current;

const cntx=canvas.getContext("2d");

const img=new Image();

img.src=canvesimage[index.value];

img.onload=()=>{

      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = canvas.offsetWidth + "px";
      canvas.style.height = canvas.offsetHeight + "px";

      cntx.scale(scale, scale);
      cntx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
}
},[index])


  return (
   <canvas  ref={canvasRef} className='absolute'
     id='canvas'
     data-scroll
     data-scroll-speed={Math.random().toFixed(1)}
    style={{width:`${size*1.7}px`,
    height:`${size*1.7}px`,
    top: `${top}%`,
    left: `${left}%`,
    zIndex: `${zIndex}`}}

>hello</canvas>
  )
}


export default Canves


import data from "./data"
import Canves from "./components/Canves"
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";





function App() {
  const [showcanvas,setShowCanvas]=useState(false)
  const headingref=useRef(null)
  const growingSpan=useRef(null)
 
useEffect(() => {
  const locomotiveScroll = new LocomotiveScroll();
},[])

useEffect(() => {
  const handleClick = (e) => {
    setShowCanvas((prevShowCanvas) => {
      if (!prevShowCanvas) {
        gsap.set(growingSpan.current, {
          top: e.clientY,
          left: e.clientX,
        });

        gsap.to("body", {
          color: "#000",
          backgroundColor: "#fd2c2a",
          duration: 1.2,
          ease: "power2.inOut",
        });

        gsap.to(growingSpan.current, {
          scale: 1000,
          duration: 2,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(growingSpan.current, {
              scale: 0,
              clearProps: "all",
            });
          },
        });
      } else {
        gsap.to("body", {
          color: "#000",
          backgroundColor: "#fff",
          duration: 1.2,
          ease: "power2.inOut",
        });
      }

      return !prevShowCanvas;
    });
  };

  const headingElement = headingref.current;
  headingElement.addEventListener("click", handleClick);

  // Clean up event listener on unmount
  return () => headingElement.removeEventListener("click", handleClick);
}, []);

  return (
    <>
    <div  className="overflow-x-hidden">
    <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>
      <div className=" relative  w-full min-h-screen  font-['Helvetica_Now_Display]  " >
          {  showcanvas &&    data[0].map((canvasdets,index)=>
           <Canves key={index}  details={canvasdets}></Canves>
        )}
        <div className="relative  w-full z-[1] h-screen"> 

        <nav className="w-full p-8 flex justify-between z-50">
            <div className="brand text-2xl font-md">Thirtysixstudios</div>
            <div className="links flex gap-10">
              {[
                "What we do",
                "Who we are",
                "How we give back",
                "Talk to us",
              ].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer  w-full px-[20%]">
            <div className="text w-[50%]">
              <h3 className="text-4xl leading-[1.2] ">
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p className="text-lg w-[80%] mt-10 font-normal">
                We are a team of designers, developers, and strategists who are
                passionate about creating digital experiences that are both
                beautiful and functional.
              </p>
              <p className="text-md mt-10">scroll</p>
            </div>
          </div>
          <div className="w-full  absolute bottom-[-20] pt-[6%]">
            <h1
              ref={headingref}
              className="text-[11rem] font-normal tracking-tight leading-none pl-5 mt-16"
            >
              Thirtysixstudios
            </h1>
          </div>

        </div>
      
      </div>

      <div className="  relative  w-full min-h-screen overflow-x-hidden font-['Helvetica_Now_Display] overflow-hidden " >
          {   showcanvas && data[1].map((canvasdets,index)=>
           <Canves key={index}  details={canvasdets}></Canves>
        )}
        <div className="w-full h mt-[18%] ml-[22%]  flex justify-around   ">
          <div className="w-[30%] flex pt-[12%] pl-[10%] text-3xl" >
            <span>01_</span>
            <h2>WHAT WE DO</h2>
          </div>
          <div  className="w-[50%] pt-[12%]  text-3xl">
          <h3 className="w-[50%]">We aim to revolutionize digital production in the advertising space, bringing your ideas to life.
          </h3>
          </div>
        </div>
        <div className="w-full h mt-[10%] pl-[60%]  pr-[10%] font-light text-sm ">
          <h5 >As a contemporary studio, we use cutting-edge design practices and the latest technologies to deliver seamless digital work.</h5>
          <h5 className="mt-[7%]">Our commitment to creativity, innovation, and simplicity, paired with our agile approach, ensures your journey with us is smooth and enjoyable from start to finish</h5>
        </div>
        


      </div> 

       <div className='  relative  w-full min-h-screen z-10  ' >
          {  showcanvas &&  data[2].map((canvasdets,index)=>
           <Canves key={index}  details={canvasdets}></Canves>
        )}

<div className="w-full h mt-[18%] ml-[22%]  flex justify-around  z-10  ">
          <div className="w-[30%] flex pt-[12%] pl-[10%] text-3xl" >
            <span>02_</span>
            <h2>WHO WE ARE</h2>
          </div>
          <div  className="w-[50%] pt-[12%]  text-3xl">
          <h3 className="w-[50%]">Our vision is to simplify digital production while creating social impact and opportunity.
          </h3>
          </div>
        </div>
       <div className="w-full  flex justify-between mt-[10%] z-20 overflow-x-hidden" >
        <div className="w-[50%]  text-[9rem]">
          <h1>Agile</h1>
          <h1>Innovative</h1>
          <h1>Cultured</h1>
        </div>
        <div className="w-[50%]  space-y-[37%] pl-[10%] pr-[15%] font-light">
          <p className="mt-[10%]">
          We live and breathe efficiency and are not limited by geography. Based in Amsterdam with hubs in London, Paris, Johannesburg, New York, and beyond, we curate the right team for each project and get moving swiftly.</p>
          <p>
          We use innovative digital processes and technology to ensure our initiatives run smoothly, allowing our young, lean, and international team to focus on what matters and maximize momentum and opportunity.</p>
          <p>We are progressive and community-focused, and don’t believe in maintaining the status quo or sticking to the old way. Our people reflect today’s realities and stay connected to culture.</p>
        </div>
       </div>
       <div className="h-[800px] relative" >
        <div className="  absolute  w-full bg-white h-[300px] bottom-0 flex justify-center items-center pt-[8%] z-[-1]">
             <div className=" footer w-full h-full flex justify-center items-center ">
              <h3 className="text-[6rem]  font-mono">THIRTYSIXSTUDIO</h3></div>
        </div>
       </div>
      
      </div> 
      </div>
    </>
  )
}

export default App

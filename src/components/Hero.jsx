import React, { useState, useEffect, useRef } from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import { CgArrowLongRight, CgPlayButton, CgPlayPause } from "react-icons/cg";
import Carousel from "./Carousel";
import ActionButton from "./ActionButton";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { infiniteScroll, sliderText, useMediaQuery } from "../utils/constants";
import { MIniImages, MajorImages } from "../utils/constants";
const Hero = () => {
  const tl = gsap.timeline();
  const matches = useMediaQuery("(min-width:1260px)");
  const images = matches ? MajorImages : MIniImages;
  const [isPlaying, setIsPlaying] = useState(true);

  const [prevNext, setPrevNext] = useState({
    prev: 0,
    next: 1,
  });
  const [tab, setTab] = useState(0);
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "elastic.inOut",
    });
    gsap.to("#heroimage", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "elastic.inOut",
    });
  }, []);

  useGSAP(() => {
    if (isPlaying && !!document.getElementById("slidein")) {
      tl.to("#slidein", {
        width: "50px",
        duration: 6,
        onComplete: () => {
          console.log("starting here");
          setTab((tab) =>
            tab === images.length - 1 ? images.length - 1 : tab + 1
          );
          if (tab === images.length - 1) {
            console.log("starting now");
            setIsPlaying(false);
            setTab(0);
            tl.kill();
          }
        },
      });
    }
  }, [tab, isPlaying]);
  {
    useEffect(() => {
      setPrevNext(infiniteScroll(tab, images.length - 1));
    }, [tab]);
  }
  return (
    <section
      id="heroimage"
      className="h-[100vh] opacity-0 min-h-[600px] max-h-[1200px] overflow-hidden w-full relative scrolbar-none flex justify-center bg-red-100"
    >
      <div className="w-full max-md:bdb px-[50px] max-sm:px-[15px] py-[50px] z-10 h-full scrollbar-none common-padding flex ">
        <div className="flex  items-center h-full">
          <span
            onClick={() => {
              if (gsap.globalTimeline.paused()) {
                gsap.globalTimeline.play();
              }
              setTab(prevNext.prev);
              setIsPlaying(true);
            }}
            className="border w-10 h-10 flex items-center cursor-pointer border-black text-black text-xl justify-center rounded-full"
          >
            <CgArrowLongLeft />
          </span>
        </div>
        <div
          id="hero"
          className="flex opacity-0  -translate-y-10 h-full items-center nav-height flex-col flex-1"
        >
          <div className="flex flex-col  items-center w-full h-full">
            <h1 className="text-[200px] flex max-xs:text-[60px] max-md:text-[100px] max-xxs:text-[40px] easeinOut text-primary">
              Welcome
            </h1>
            <p className="text-[50px] max-xs:text-[25px] mb-2 max-md:text-[50px] max-xxs:text-[20px] easeinOut">
              The gift of flowers
            </p>
            <ActionButton>View Collections</ActionButton>
          </div>

          <div className=" flex gap-2 items-center mt-auto">
            {images.map((_, i) => (
              <span
                onClick={() => {
                  setTab(i);
                  setIsPlaying(true);
                  if (gsap.globalTimeline.paused()) {
                    gsap.globalTimeline.play();
                  }
                }}
                key={i}
                className={` flex easeinOut border  items-center overflow-hidden bg-gray-300 h-2 rounded-full cursor-pointer ${
                  i === tab && (isPlaying || gsap.globalTimeline.paused())
                    ? " w-[50px]"
                    : "w-2"
                }`}
              >
                <span
                  onLoadedMetadata={() => {
                    console.log("loaded");
                  }}
                  onLoad={() => {
                    console.log("loaded noew");
                  }}
                  style={{
                    width: `${i !== tab ? "0" : ""}`,
                  }}
                  id={`${
                    i === tab && (isPlaying || gsap.globalTimeline.paused())
                      ? "slidein"
                      : ""
                  }`}
                  className={`h-full    ${
                    i === tab && (isPlaying || gsap.globalTimeline.paused())
                      ? "bg-primary"
                      : ""
                  }`}
                ></span>
              </span>
            ))}

            <span
              onClick={() => {
                if (!isPlaying && gsap.globalTimeline.paused()) {
                  gsap.globalTimeline.play();

                  setIsPlaying(true);
                } else if (isPlaying) {
                  // tl.pause();
                  gsap.globalTimeline.pause();
                  setIsPlaying(false);
                } else if (!isPlaying) {
                  setTab(0);
                  setIsPlaying(true);
                  tl.restart();
                }
              }}
              className="text-xl w-7 cursor-pointer flex items-center justify-center h-7  rounded-full border"
            >
              {!isPlaying ? (
                <CgPlayButton></CgPlayButton>
              ) : (
                <CgPlayPause></CgPlayPause>
              )}
            </span>
          </div>
        </div>
        <div className="flex  items-center h-full">
          <span
            onClick={() => {
              setTab(prevNext.next);
              if (gsap.globalTimeline.paused()) {
                gsap.globalTimeline.play();
              }

              setIsPlaying(true);
            }}
            className="border w-10 h-10 flex items-center cursor-pointer overflow-hidden  border-black text-black text-xl justify-center rounded-full"
          >
            <CgArrowLongRight />
          </span>
        </div>
        <div
          style={{
            left: `${(images.length - 1 - tab) * 100}%`,
          }}
          className="flex absolute pointer-events-none z-10 easeinOut h-full w-full top-0 left-0 right-0 bottom-0 overflow-hidde py-[100px] justify-end items-center "
        >
          {sliderText.map((slide, i) => (
            <div
              key={i}
              className="flex flex-col min-w-full overflow-hidden common-padding items-center h-full justify-end"
            >
              <p className="border p-3 text-center flex text-sm uppercase font-semibold">
                {slide.subHead}
              </p>
              <h1 className="font-bold mt-2 text-center text-lg mb-1">
                {slide.head}
              </h1>
              {slide.text && (
                <p className="text-center w-full text-xs mix-blend-multiply mb-4 easeinOut">
                  {slide.text}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <Carousel images={images} tab={tab} />
    </section>
  );
};

export default Hero;

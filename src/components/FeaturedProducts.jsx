import React from "react";
import { arrayChunk, productImages } from "../utils/constants";
import {
  IoIosStar,
  IoIosStarOutline,
  IoIosStarHalf,
  IoMdEye,
} from "react-icons/io";

import { MdLoop } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
const FeaturedProducts = () => {
  const imagesChunk = arrayChunk(productImages, 2);
  useGSAP(() => {
    gsap.to("#staggerin", {
      opacity: 1,
      delay: 1.2,
      stagger: "0.25",
      y: 0,
    });
  }, []);
  return (
    <div className="w-full flex justify-center bg-white h-fit">
      <div className="flex  w-full justify-center items-center common-padding py-[50px] max-w-large flex-col gap-5">
        <p className=" font-semibold text-primary text-lg">Shop</p>
        <h1 className="text-3xl uppercase font-semibold ">Featured section</h1>
        <div className="flex  max-sm:flex-col   gap-4  overflow-hidden">
          {imagesChunk.map((chunk, i) => (
            <div key={i} className="flex max-xxs:flex-col sm:flex-col gap-4">
              <div className="hover:bg-white max-w-[300px] hov hover:shadow-4xl overflow-hidden text-center px-5 py-7  max-l:w-auto    flex min-h-[350px]   cursor-pointer  relative flex-col">
                <div className="absolute top-0 p-3 flex-col right-0  flex gap-5">
                  <button
                    id="staggerin"
                    className="rounded-full disp hidden -translate-y-[300px]  bg-slate-500  p-2 hover:text-primary easeinOut text-white"
                    aria-label="view product"
                  >
                    <MdLoop></MdLoop>
                  </button>
                  <button
                    id="staggerin"
                    className="rounded-full disp hidden -translate-y-[300px]  bg-slate-500  p-2 hover:text-primary easeinOut text-white"
                  >
                    <IoMdEye></IoMdEye>
                  </button>
                  <button
                    id="staggerin"
                    className="rounded-full disp hidden -translate-y-[300px]  bg-slate-500  p-2 hover:text-primary easeinOut text-white"
                  >
                    <IoIosCart></IoIosCart>
                  </button>
                </div>
                {i === 0 && (
                  <span className="absolute -translate-x-14 -translate-y-14 -rotate-45 top-0 left-0 w-24 h-24 bg-primary flex items-end justify-center text-white text-sm ">
                    Sale
                  </span>
                )}
                <div className="flex flex-1 items-center justify-center">
                  <img className="w-full object-center" src={chunk[0]} alt="" />
                </div>
                <h5 className="font-semibold">Bounquet roses</h5>
                <span className="text-primary  justify-center flex gap-1">
                  <IoIosStar></IoIosStar>
                  <IoIosStar></IoIosStar>
                  <IoIosStar></IoIosStar>
                  <IoIosStar></IoIosStar>
                  <IoIosStarOutline></IoIosStarOutline>
                </span>
                <span className="text-xs">Ksh 200</span>
                <span className="text-sm absolute -bottom-12 show  bg-slate-50 left-0 right-0 p-3 text-primary uppercase">
                  add to cart
                </span>
              </div>
              {newFunction(i, chunk)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
function newFunction(i, chunk) {
  return (
    <div className="hover:bg-white max-w-[300px] hov hover:shadow-4xl overflow-hidden px-5 py-7     flex min-h-[350px]   text-center  cursor-pointer  relative flex-col">
      {i === 2 && (
        <span className="absolute -translate-x-14 -translate-y-14 -rotate-45 top-0 left-0 w-24 h-24 bg-primary flex items-end justify-center text-white text-sm ">
          Sale
        </span>
      )}
      <div className="flex flex-1 items-center justify-center">
        <img className="w-full object-center" src={chunk[1]} alt="" />
      </div>
      <h5 className="font-semibold">Bounquet roses</h5>
      <span className="text-primary justify-center flex gap-1">
        <IoIosStar></IoIosStar>
        <IoIosStar></IoIosStar>
        <IoIosStar></IoIosStar>
        <IoIosStar></IoIosStar>
        <IoIosStarHalf></IoIosStarHalf>
      </span>
      <span className="text-xs">Ksh 200</span>
      <span className="text-sm absolute -bottom-12 show  bg-slate-50 left-0 right-0 p-3 text-primary uppercase">
        add to cart
      </span>
    </div>
  );
}

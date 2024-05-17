import { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { colors, menuCategories } from "../utils/constants";
export default function Side() {
  const displayRef = useRef([])
  const [openMenu, setOpenMenu] = useState(-1);
  useEffect(()=>{
    console.log(displayRef.current.innerWidth);
  },[])
  return (
    <div className="flex flex-col gap-5 flex-[0.3]  items-end  h-full">
      <div className="w-9/12 flex flex-col">
        <div className="w-full flex items-center p-5 border-gray-400 border">
          <input
            type="text"
            placeholder="search"
            className="flex-1  outline-none bg-transparent   "
          />
          <IoIosSearch className="text-lg"></IoIosSearch>
        </div>
        <div className="flex flex-col mt-5">
          <h1 className="mb-5 text-2xl font-semibold">Menu Categories</h1>
          {menuCategories.map((category, i) => (
            <ul key={i}>
              <li className="relative overflow-hidden clk">
                <span className="flex items-center justify-between">
                  {category.head}
                  <p
                    onClick={() => {
                      setOpenMenu((prev) => (prev === i ? -1 : i));
                    }}
                    className="text-xl cursor-pointer"
                  >
                    {openMenu === i ? "-" : "+"}
                  </p>
                </span>
                <ul
                
                  ref={(e)=>displayRef.current[i]=e}  
                  className={`pl-7  show easeinOut ${
                    openMenu === i ? "h-[100px]" : "h-0"
                  }`}
                >
                  {category.subHeads.map((title) => (
                    <li key={title}>{title}</li>
                  ))}
                </ul>
              </li>
            </ul>
          ))}

          <h1 className="mb-5 mt-5 text-2xl font-semibold">Colors</h1>
          {colors.map((color) => (
            <div key={color} className="flex gap-5">
                <input className="rounded-full border-none outline-none" type="checkbox" />
                <p>{color}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

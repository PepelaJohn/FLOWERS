import React, { useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import { MdGridView } from "react-icons/md";

import { ShopSideBar } from "../components";
const Shop = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <section className="nav-height flex flex-col min-h-[100vh] items-center">
      <div className="max-w-large common-padding flex gap-2 w-full justify-center py-[50px]">
        <ShopSideBar />
        <div className="flex flex-col items-start flex-[0.7] h-full  w-full gap-5">
          <div className="w-full flex justify-between  border border-gray-400 p-5">
            <div className="flex items-center gap-5">
              <span
                onClick={() => setSelectedTab(0)}
                className={`text-xl max-w-10  justify-center flex items-center p-1 easeinOut cursor-pointer ${
                  selectedTab === 0 ? "border-gray-300 border" : ""
                }`}
              >
                <IoGridOutline></IoGridOutline>
              </span>
              <span
                onClick={() => setSelectedTab(1)}
                className={`text-[10px] p-1  max-w-10 justify-center  easeinOut ${
                  selectedTab === 1 ? "  border-gray-300 border" : ""
                } flex items-center cursor-pointer `}
              >
                <span>
                  <MdGridView></MdGridView>
                  <MdGridView></MdGridView>
                </span>
                <span>
                  <MdGridView></MdGridView>
                  <MdGridView></MdGridView>
                </span>
              </span>
            </div>
            <div className="p-1 border border-gray-400">
            <select
                defaultValue={"DEFAULT"}
                className="bg-transparent p-2 text-sm easeinOut rounded-none border-none outline-none"
              >
                <option value="DEFAULT" disabled>CHOOSE SORT METHOD</option>
                <option value="2">Sort by popularity</option>
                <option value="3">Sort by newness</option>
                <option value="4">Sort by price: low to high</option>
                <option value="5">Sort by price: high to low</option>
                <option value="6">Product Name: Z</option>
              </select>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Shop;

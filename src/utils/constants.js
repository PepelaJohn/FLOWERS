import { useState, useEffect } from "react";
import Image1 from "../assets/categories/1.jpg";
import Image2 from "../assets/categories/2.jpg";
import Image3 from "../assets/categories/3.jpg";
import Image4 from "../assets/categories/4.jpg";
import Image5 from "../assets/categories/5.jpg";
import Image6 from "../assets/categories/6.jpg";

import MIniImage1 from "../assets/categories/mini1.jpg";
import MIniImage2 from "../assets/categories/mini2.jpg";
import MIniImage3 from "../assets/categories/mini3.jpg";
import MIniImage4 from "../assets/categories/mini4.jpg";
import MIniImage5 from "../assets/categories/mini5.jpg";
import MIniImage6 from "../assets/categories/mini6.jpg";

export const MIniImages = [
  MIniImage1,
  MIniImage2,
  MIniImage3,
  MIniImage4,
  MIniImage5,
  MIniImage6,
];
export const MajorImages = [Image1, Image2, Image3, Image4, Image5, Image6];

export const menuCategories = [
  {
    head: "Birthday Boquets",
    subHeads: ["Aster", "Aubrieta", "Basket Of Gold"],
  },
  {
    head: " Funeral Flowers",
    subHeads: ["Cleome", "Coneflower", "Corepsis"],
  },
  {
    head: "Interior Decor",
    subHeads: ["Calendula", "Castor Bean", "Catmint"],
  },
  {
    head: "Custom Orders",
    subHeads: ["Lily", "Rose", "SunFlower"],
  },
];

import ProductImage1 from "../assets/products/large-size/1.jpg";
import ProductImage2 from "../assets/products/large-size/2.jpg";
import ProductImage3 from "../assets/products/large-size/3.jpg";
import ProductImage4 from "../assets/products/large-size/4.jpg";
import ProductImage5 from "../assets/products/large-size/5.jpg";
import ProductImage6 from "../assets/products/large-size/6.jpg";

export const productImages = [
  ProductImage1,
  ProductImage2,
  ProductImage3,
  ProductImage4,
  ProductImage5,
  ProductImage6,
];

export const arrayChunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

// export default useMediaQuery;

export const navlinks = ["home", "shop", "blog", "our work", "feedback"];
useMediaQuery;

export const infiniteScroll = (current, max) => {
  if (current >= max) return { prev: max - 1, next: 0 };
  if (current <= 0) return { prev: max, next: 1 };
  return { prev: current - 1, next: current + 1 };
};

export const sliderText = [
  {
    subHead: "birthday collection",
    head: " Flowers and Candle Birthday Gifts",
    text: " Here to lighten up the birthdays of your loved ones. get the most out of our package today",
  },
  {
    subHead: " romance collection",
    head: " Match your love game",
    text: "A bounquet a celebration keeps makes the love to stay",
  },
  {
    subHead: "wedding collection",
    head: "Colorful event for a colorful couple",
    text: "Max out your start as a couple with this fresh and stunningly pleasant view.",
  },
  {
    subHead: "Home Decor Collection",
    head: "Flowers for that desired home look",
    text: "Get potted plants, curated just for you",
  },
  {
    subHead: "Events Collection",
    head: "Corporate requires coorperate",
    text: "All the style for corporate event",
  },
  {
    subHead: "Final Journey collection",
    head: "Designed for the last respects",
    text: "",
  },
];

export const colors = [
  "Black (14)",
  "Red (12)",
  "Yellow (5)",
  "Pink (9)",
  "Green (1)",
  "Blue (16)",
]
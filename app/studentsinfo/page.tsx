"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/app/components/ui/layout-grid";
 


const items = [
  {
      src: '/public/'
    },
    {
      src: '/public/',
    },
    {
      src: '/public/Torlao.png',
    },
    {
      src: '/public/Dave.svg',
    },
    {
      src: '/public/Rogin',
    },
    {
      src: '/public/Matt',
    },
    {
      src: '/public/Aaron',
    },
    {
      src: '/public/Gudalle',
    },
    {
      src: '/public/Juben',
    },
    {
      src: '/public/Tudas',
    },
    {
      src: '/public/Ababa',
    },
    {
      src: '/public/Perez',
    },
    {
      src: '/public/Salavedra',
    },
    {
      src: '/public/Ortega',
    },
    {
      src: '/public/Balderas',
    },
    {
      src: '/public/Rico',
    },
    {
      src: '/public/Nico',
    },
    {
      src: '/public/Reggie',
    },
];



export default function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <div className="text-center font-bold text-medium"> CS-22A SY. 2023-2024 </div>
      <LayoutGrid cards={cards} />
    </div>
  );
}
 
const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};
 
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
 
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail:
      "Rommel.svg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/Agsaoay.svg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/Torlao.svg",
  },
  {
    id: 4,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/Rogin.svg",
  },
  {
    id: 5,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/Dave.svg",
  },
  {
    id: 6,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/Matt.svg",
  },
  {
    id: 7,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/Aaron.svg",
  },
  {
    id: 8,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/Gudalle.svg",
  },
  {
    id: 9,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/Juben.svg",
  },
  {
    id: 10,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/Tudas.svg",
  },
  {
    id: 11,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/Ababa.svg",
  },
  {
    id: 12,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/Perez.svg",
  },
  {
    id: 13,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/Salavedra.svg",
  },
  {
    id: 14,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/Ortega.svg",
  },
  {
    id: 15,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/Balderas.svg",
  },
  {
    id: 16,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/Rico.svg",
  },
  {
    id: 17,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/Nico.svg",
  },
  {
    id: 18,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/Reggie.svg",
  },
];
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "@/app/components/ui/direction-aware-hover";
import { IconBrandFigma } from "@tabler/icons-react";
import { stringify } from "querystring";

export default function DirectionAwareHoverDemo() {
  const imageUrl =
    "/Info.png";
  return (
    <div className="flex justify-around mx-40 mt-20 gap-10 max-w-full">
        <div>
        <h1 className="prose text-primary text-5xl font-bold">About Me</h1> <br />
        <h4 className="prose text-primary text-md">Hi there! My name is <strong className="font-extrabold">Andronico</strong>, and 
        I am the creator of this blog dedicated to our amazing section, CS22A. I am a passionate student with a keen interest 
        in Front-End Development. Designing websites is also one of my hobbies.
            I am a passionate student with a keen interest in Front-End Development.</h4> <br />
        <h1 className="prose text-primary text-4xl font-bold">Background</h1> <br />
        <h4 className="prose text-primary text-md"> I am currently a student in the CS22A section at ACLC Sta. Maria. My journey in the field of
             Computer Science began with a love for web design. Over the years, I have developed a deep appreciation for Web Development, 
             specifically Front-end Development.
        </h4> <br />
        <h1 className="prose text-primary text-4xl font-bold">Skills and Interest </h1> <br />
        <div className="flex gap-10 max-w-full">
        <div className="text-center">
            <Image src={"/figma.png"} width={50} height={50} alt="figmabrand"/>Figma
        </div>
        <div className="text-center">
            <Image src={"/Nextjs.png"} width={50} height={50} alt="figmabrand"/>Nextjs
        </div>
        <div className="text-center">
            <Image src={"/react.png"} width={50} height={50} alt="figmabrand"/>React
        </div>
        <div className="text-center">
            <Image src={"/tailwind.png"} width={50} height={50} alt="figmabrand"/>Tailwind 
        </div>
        <div className="text-center">
            <Image src={"/html.png"} width={50} height={50} alt="figmabrand"/>Html
        </div>
        <div className="text-center">
            <Image src={"/css-3.png"} width={50} height={50} alt="figmabrand"/>Css
        </div>
        <div className="text-center">
            <Image src={"/js.png"} width={50} height={50} alt="figmabrand"/>Javascript
        </div>
        </div>
        <br />
        <div className="flex gap-10 max-w-full">
        <div className="text-center">
            <Image src={"/aceternity.png"} width={50} height={50} alt="figmabrand"/>Aceternity
        </div>
        <div className="text-center">
            <Image src={"/shadcn.png"} width={50} height={50} alt="figmabrand"/>Shadcn
        </div>
        <div className="text-center">
            <Image src={"/daisy.png"} width={50} height={50} alt="figmabrand"/>DaisyUi
        </div>
        </div>
        <br />
        <h4 className="prose text-primary text-md">Apart from my academic interests, I am also passionate about 
            traveling and working out. These hobbies allow me to relax 
            and bring a creative touch to my work.</h4>
        </div>
      <DirectionAwareHover imageUrl={imageUrl} className="mt-20">
        <p className="font-bold text-xl">Andronico Nucum</p>
      </DirectionAwareHover>
    </div>
  );
}

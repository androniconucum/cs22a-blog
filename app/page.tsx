"use client"
import Link from "next/link";
import Blogs from "./blogs/page";
import { IconHome, IconMessage, IconUser, IconBrandBlogger, } from "@tabler/icons-react";
import { FloatingNav } from "@/app/components/ui/floating-navbar";
import { Section, Container } from "@/components/craft";
import Balancer from 'react-wrap-balancer'
import {Button} from "@/components/ui/button";
import {Camera, User} from "lucide-react";
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";
import { TypewriterEffect, TypewriterEffectSmooth2 } from "./components/ui/typewriter-effect2";


export default function Home() {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
  ];

    const words2 =[
      {
      text: "CS22A",
    },
    {
      text: "BLOGSITE",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  

  return(
    <div className="text-center">
      <div className="mt-7">
       <TypewriterEffectSmooth words={words} className="text-xmedium justify-center pb-0 mb-0"/>
       <TypewriterEffectSmooth2 words={words2} className="text-xmedium pt-0 mt-0"/>
      </div>
<Section >
      <Container className="text-center items-center flex flex-col mt-16">
        <h1 className="!mb-0">
          <Balancer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Balancer>
        </h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Balancer>
        </h3>
        <div className="mt-6 md:mt-12 not-prose flex gap-2">
          <Button asChild>
            <Link href="/studentsinfo">
              <User className="mr-2" />
              Class
            </Link>
          </Button>
          <Button variant={"ghost"} asChild>
            <Link href="/blogs">Blogs -{">"}</Link>
          </Button>
        </div>
      </Container>
    </Section>
    </div>
  )
}
"use client"
import Link from "next/link";
import { IconHome, IconMessage, IconUser, IconBrandBlogger, IconBrandFacebook, IconBrandFacebookFilled, IconBrandInstagram, IconBrandLinktree, IconBrandChrome, IconBrandGmail, IconBrandGoogle, IconLink, IconPhoneCall } from "@tabler/icons-react";
import { Section, Container } from "@/components/craft";
import Balancer from 'react-wrap-balancer'
import {Button} from "@/components/ui/button";
import {Badge, Camera, Mail} from "lucide-react";
import { LinkPreview } from "./components/ui/link-preview";
import { LayoutGrid } from "./components/ui/layout-grid";
import Image from "next/image";
import Logo from "@/public/Hero copy.svg"
import { FlipWords } from "./components/ui/flip-words";
import {motion, useInView, useMotionValue, useScroll, useTransform} from "framer-motion";
import { MacbookScroll } from "./components/ui/macbook-scroll";



// Variables
 
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    }
  }
};

const letterAnimation = {
  initial: {
    y:400
  },
  animate: {
    y:0,
    transition: {
      ease: [0.6, 0.1, -0.05, 0.95],
      duration:1,
    }
  }
}







export default function Home() {
  const words = ["Innovators", "Developers", "Creators", "Engineers", "Visionaries"];
      
      
      return(
        <div className="max-w-full">
        <div className="max-w-full">
        <motion.div className="mt-16 flex justify-between mr-16 ml-40 mb-56"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.1,
            once: true,
          }}>
       <Section>
      <div className=" max-w-full text-6xl pb-0 mb-0 font-semibold lg:text-7xl">
        Welcome to the CS22A Blog
        </div>
        <div className="text-6xl font-semibold lg:text-3xl mt-3">
        Meet the Future
       <FlipWords words={words} className="font-extrabold text-blue-700 text-5xl dark:text-blue-700"/>
       </div>
      <Container className=" flex flex-col md:ml-0 mt-5">
        <h1 className="!mb-0 flex text-sm">
          <Balancer>
          Discover the journey of our school section, where every student’s story matters.
          </Balancer>
        </h1>
        <h3 className="text-muted-foreground flex text-sm" >
          <Balancer>
          Dive into the vibrant life of our section, one blog post at a time.
          </Balancer>
        </h3>
        <div className="mt-4 not-prose flex gap-5">
          <Button asChild>
            <Link href="/newsletter">
              <Mail className="mr-2" />
              Newsletter
            </Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link href="/blogs">Blogs -{">"}</Link>
          </Button>
        </div>
        <div className="mt-10 mb-1 flex text-blue-700 text-lg font-bold">
          Follow ACLC Santa Maria -
        </div>
        <div className="pt-2 flex">

          <LinkPreview 
      url="https://www.facebook.com/ACLCCollegeStaMaria"
      >
          <Button>
            <IconBrandFacebook className="mr-2"/> Aclc Santa Maria
          </Button>
          </LinkPreview> {" "}


          <Button className="ml-4">
            <IconPhoneCall className="mr-2"/> +639 171 366 167
          </Button>

          <LinkPreview 
      url="https://aclcsm.com/index.html#"
      >
          <Button className="ml-4">
            <IconLink className="mr-2"/> Aclc Santa Maria
          </Button>
          </LinkPreview> {" "}
        </div>
      </Container>
    </Section>
    <Image src={Logo} alt="Hero logo" width={400} height={400} className="pr-20"/>
       </motion.div>

    <div className="flex flex-col justify-center items-center">
    <div className="pt-20 mb-36  max-w-7xl" id="AboutUs" >
      <p className="px3 text-5xl text-center font-bold pb-20">
          ABOUT
      </p>
      <br />
      <div className=" prose max-w-full mx-40">
      <h1 className="text-4xl font-extrabold text-primary">
          Welcome to the CS22A Blog!
      </h1>
      <h3 className="prose-h3:text-lg text-primary font-medium">
      Hello, and welcome to the official blog of CS22A! We're a vibrant and enthusiastic section consisting of 18 dedicated students, each passionate about learning and excelling in 
      the field of computer science. Through this blog, we aim to share our journey, experiences, and insights as we navigate through our academic life.
      </h3>
      <br />
      <h1 className="text-4xl font-extrabold text-primary">
          Our Subjects and Teachers
      </h1>
      <h3 className="prose-h3:text-xl text-primary font-mediu">
      In CS22A, we are privileged to study under the guidance of some remarkable educators. Here's a glimpse of the subjects we are currently tackling and the brilliant 
      minds leading us through them:
      </h3>

      <div className="prose-h3:font-normal">
      <h3 className="prose-h3:text-lg text-primary">
      <strong className="font-extrabold">Object-Oriented Programming with Sir Mark:</strong>Dive into the world of OOP as we learn to build robust and scalable software applications.  
      </h3>
      </div>

      <div className="prose-h3:font-normal">
      <h3 className="prose-h3:text-lg text-primary">
      <strong className="font-extrabold">Calculus 2 with Sir Eugene:</strong>Exploring advanced mathematical concepts that are crucial for computer science and engineering.
      </h3>
      </div>

      <div className="prose-h3:font-normal">
      <h3 className="prose-h3:text-lg text-primary">
      <strong className="font-extrabold">Application Development with Sir Roi:</strong>Bringing our ideas to life through practical and innovative application projects.
      </h3>
      </div>

      <div className="prose-h3:font-normal">
      <h3 className="prose-h3:text-lg text-primary">
      <strong className="font-extrabold">Application Development with Sir Roi:</strong> Bringing our ideas to life through practical and innovative application projects.
      </h3>
      </div>

      <div className="prose-h3:font-normal">
      <h3 className="prose-h3:text-lg text-primary">
      <strong className="font-extrabold">Kritikal na Pagbasa with Ma'am Rosh:</strong> Enhancing our critical reading and comprehension skills in Filipino literature.
      </h3>
      </div>

      <div className="prose-h3:font-normal">
      <h3 className="prose-h3:text-lg text-primary">
      <strong className="font-extrabold">Algorithms and Complexity with Sir Mark:</strong> Understanding the fundamentals of algorithms and their complexities to solve computational problems efficiently.
      </h3>
      </div>

      <div className="prose-h3:font-normal">
      <h3 className="prose-h3:text-lg text-primary">
      <strong className="font-extrabold">Data Communications and Networking with Sir Macky:</strong> Learning the intricacies of data transfer and network structures.  
      </h3>
      </div>

      <div className="prose-h3:font-normal">
      <h3 className="prose-h3:text-lg text-primary">
      <strong className="font-extrabold">Logic Design and Digital Complexity with Sir Macky:</strong> Delving into the design and analysis of digital circuits and systems.
      </h3>
      </div>

      <div className="prose-h3:font-normal">
      <h3 className="prose-h3:text-lg text-primary">
      <strong className="font-extrabold">Information Management with Ma'am Aj:</strong> Mastering the art of managing and organizing information systems.
      </h3>
      </div>

      <div className="prose-h3:font-light">
      <h3 className="prose-h3:text-lg text-primary">
      <strong className="font-extrabold">Team Sports with Ma'am Winnie:</strong> Balancing our academic life with physical activity and teamwork through various sports.
      </h3>
      </div>
      </div>
    </div>
    </div>


    <MacbookScroll
        title={
          <span>
            WHAT IS CS22A?
          </span>
        }
        badge={
          <Link href="/">
            <Badge className=" transform -rotate-12" />
          </Link>
        }
        src={`/About.svg`}
        showGradient={false}
      />





    <div className="">
        <div className="h-screen w-full content-zcenter" id="Students">
          <motion.div className="text-center font-bold text-4xl pr-24 mb-5 pt-20" initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }} >
            CS22A STUDENTS S.Y 2024
          </motion.div>
        <LayoutGrid cards={cardname} />
       </div>
       </div>
  </div> 
       </div>
  )
}




const SkeletonOne = () => {
  return (
    <div className="flex w-full">
      <p className="font-extrabold text-5xl text-white md:pb-5 ">Romel Cagomoc</p>
      <div className="flex mt-20 gap-2">
      <LinkPreview 
      url="https://www.facebook.com/romel.cagomoc.96"
      className="bg-blue-600 font-bold rounded h-8"
      >
      <IconBrandFacebook className=" text-slate-300 w-8 h-8"/> 
      </LinkPreview> {" "}
      <LinkPreview 
      url=""
      className="bg-[#e4405f] font-bold rounded h-8"
      >
      <IconBrandInstagram className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
    </div>
    </div>
  );
};
 

const SkeletonTwo = () => {
  return (
    <div className="flex w-full">
      <p className="font-extrabold text-5xl text-white md:pb-5 ">Brian Agsaoay</p>
      <div className="flex mt-20 gap-2">
      <LinkPreview 
      url="https://www.facebook.com/romel.cagomoc.96"
      className="bg-blue-600 font-bold rounded h-8"
      >
      <IconBrandFacebook className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
      <LinkPreview 
      url="https://www.instagram.com/bruh._.yan/"
      className="bg-[#e4405f] font-bold rounded h-8"
      >
      <IconBrandInstagram className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
    </div>
    </div>
  );
};


const SkeletonThree = () => {
  return (
    <div className=" flex w-full">
       <p className="font-extrabold text-5xl text-white md:pb-5 ">Raymond Jay Torlao</p>
       <div className="flex mt-20 gap-2">
      <LinkPreview 
      url="https://www.facebook.com/raymondjay.torlao.5"
       className="bg-blue-600 font-bold rounded h-8"
      >
      <IconBrandFacebook className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
      <LinkPreview 
      url=""
       className="bg-[#e4405f] font-bold rounded h-8"
      >
      <IconBrandInstagram className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
    </div>
    </div>
  );
};


const SkeletonFour = () => {
  return (
    <div className=" flex w-full">
      <p className="font-extrabold text-5xl text-white md:pb-5 ">Rogin Duran</p>
     <div className="flex mt-14 gap-2">
      <LinkPreview 
      url="https://www.facebook.com/rogin.duran.17"
      className="bg-blue-600 font-bold rounded h-8"
      >
      <IconBrandFacebook className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
      <LinkPreview 
      url=""
      className="bg-[#e4405f] font-bold rounded h-8"
      >
      <IconBrandInstagram className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
    </div>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div className=" flex w-full">
      <p className="font-extrabold text-5xl text-white md:pb-5 ">Christian Dave Villanueva</p>
     <div className="flex mt-32 gap-2">
      <LinkPreview 
      url="https://www.facebook.com/christiandavevillanueva"
      className="bg-blue-600 font-bold rounded h-8"
      >
      <IconBrandFacebook className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
      <LinkPreview 
      url=""
      className="bg-[#e4405f] font-bold rounded h-8"
      >
      <IconBrandInstagram className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
    </div>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div className=" flex w-full">
      <p className="font-extrabold text-5xl text-white md:pb-5 ">Matthew Dela Cruz</p>
     <div className="flex mt-20 gap-2">
      <LinkPreview 
      url="https://www.facebook.com/matthew.delacruz.125"
      className="bg-blue-600 font-bold rounded h-8"
      >
      <IconBrandFacebook className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
      <LinkPreview 
      url=""
      className="bg-[#e4405f] font-bold rounded h-8"
      >
      <IconBrandInstagram className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
    </div>
    </div>
  );
};

const SkeletonSeven = () => {
  return (
    <div className=" flex w-full">
      <p className="font-extrabold text-5xl text-white md:pb-5 ">Mark Aaron Marquez</p>
     <div className="flex mt-20 gap-2">
      <LinkPreview 
      url="https://www.facebook.com/markaarin.marquez"
      className="bg-blue-600 font-bold rounded h-8"
      >
      <IconBrandFacebook className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
      <LinkPreview 
      url=""
      className="bg-[#e4405f] font-bold rounded h-8"
      >
      <IconBrandInstagram className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
    </div>
    </div>
  );
};


const SkeletonEight = () => {
  return (
    <div className=" flex w-full">
      <p className="font-extrabold text-5xl text-white md:pb-5 pt-20 ">John Cedrick Godalle</p>
     <div className="flex pt-52  gap-2">
      <LinkPreview 
      url="https://www.facebook.com/johncedrick.godalle"
      className="bg-blue-600 font-bold rounded h-8"
      >
      <IconBrandFacebook className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
      <LinkPreview 
      url=""
      className="bg-[#e4405f] font-bold rounded h-8"
      >
      <IconBrandInstagram className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
    </div>
    </div>
  );
};


const SkeletonNine = () => {
  return (
    <div className=" flex w-full">
      <p className="font-extrabold text-5xl text-white md:pb-5 ">Juben Fajela</p>
     <div className="flex mt-20 gap-2">
      <LinkPreview 
      url="https://www.facebook.com/Raginglabuyo"
      className="bg-blue-600 font-bold rounded h-8"
      >
      <IconBrandFacebook className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
      <LinkPreview 
      url=""
      className="bg-[#e4405f] font-bold rounded h-8"
      >
      <IconBrandInstagram className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
    </div>
    </div>
  );
};


const SkeletonTen = () => {
  return (
    <div className=" flex w-full">
      <p className="font-extrabold text-5xl pt-20 text-white md:pb-5 ">Axl Wilkinson Tudas</p>
     <div className="flex pt-56 gap-2">
      <LinkPreview 
      url="https://www.facebook.com/03.L1NK"
      className="bg-blue-600 font-bold rounded h-8"
      >
      <IconBrandFacebook className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
      <LinkPreview 
      url=""
      className="bg-[#e4405f] font-bold rounded h-8"
      >
      <IconBrandInstagram className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
    </div>
    </div>
  );
};


const SkeletonEleven = () => {
  return (
    <div className=" flex w-full">
      <p className="font-extrabold text-5xl text-white md:pb-5 ">Brayan Ababa</p>
     <div className="flex mt-20 gap-2">
      <LinkPreview 
      url="https://www.facebook.com/brayan.ababa"
      className="bg-blue-600 font-bold rounded h-8"
      >
      <IconBrandFacebook className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
      <LinkPreview 
      url=""
      className="bg-[#e4405f] font-bold rounded h-8"
      >
      <IconBrandInstagram className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
    </div>
    </div>
  );
};


const SkeletonTwelve = () => {
  return (
    <div className=" flex w-full">
      <p className="font-extrabold text-5xl text-white md:pb-5 ">Christian Lloyd Perez</p>
     <div className="flex mt-20 gap-2">
      <LinkPreview 
      url="https://www.facebook.com/chris.lloyd.98478"
      className="bg-blue-600 font-bold rounded h-8"
      >
      <IconBrandFacebook className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
      <LinkPreview 
      url=""
      className="bg-[#e4405f] font-bold rounded h-8"
      >
      <IconBrandInstagram className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
    </div>
    </div>
  );
};


const SkeletonThirteen = () => {
  return (
    <div className=" flex w-full">
      <p className="font-extrabold text-5xl text-white md:pb-5 ">Jay Salavedra</p>
     <div className="flex mt-20 gap-2">
      <LinkPreview 
      url="https://www.facebook.com/profile.php?id=100086273072804"
      className="bg-blue-600 font-bold rounded h-8"
      >
      <IconBrandFacebook className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
      <LinkPreview 
      url=""
      className="bg-[#e4405f] font-bold rounded h-8"
      >
      <IconBrandInstagram className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
    </div>
    </div>
  );
};


const SkeletonFourteen = () => {
  return (
    <div className=" flex w-full">
      <p className="font-extrabold text-5xl text-white md:pb-5 ">Jethro Ortega</p>
     <div className="flex mt-20 gap-2">
      <LinkPreview 
      url="https://www.facebook.com/jethrtg"
      className="bg-blue-600 font-bold rounded h-8"
      >
      <IconBrandFacebook className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
      <LinkPreview 
      url=""
      className="bg-[#e4405f] font-bold rounded h-8"
      >
      <IconBrandInstagram className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
    </div>
    </div>
  );
};


const SkeletonFifteen = () => {
  return (
    <div className=" flex w-full">
      <p className="font-extrabold text-5xl text-white md:pb-5 ">Kianne Dave Balderas</p>
     <div className="flex mt-20 gap-2">
      <LinkPreview 
      url="https://www.facebook.com/kiannedave.balderas"
      className="bg-blue-600 font-bold rounded h-8"
      >
      <IconBrandFacebook className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
      <LinkPreview 
      url=""
      className="bg-[#e4405f] font-bold rounded h-8"
      >
      <IconBrandInstagram className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
    </div>
    </div>
  );
};


const SkeletonSixteen = () => {
  return (
    <div className=" flex w-full">
      <p className="font-extrabold text-5xl text-white md:pb-5 ">Rico Duran</p>
     <div className="flex mt-20 gap-2">
      <LinkPreview 
      url="https://www.facebook.com/profile.php?id=100088681218225"
      className="bg-blue-600 font-bold rounded h-8"
      >
      <IconBrandFacebook className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
      <LinkPreview 
      url=""
      className="bg-[#e4405f] font-bold rounded h-8"
      >
      <IconBrandInstagram className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
    </div>
    </div>
  );
};


const SkeletonSeventeen = () => {
  return (
    <div className=" flex w-full">
      <p className="font-extrabold text-5xl text-white md:pb-5 ">Andronico Nucum</p>
     <div className="flex mt-20 gap-2">
      <LinkPreview 
      url="https://www.facebook.com/profile.php?id=100075144817064"
      className="bg-blue-600 font-bold rounded h-8"
      >
      <IconBrandFacebook className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
      <LinkPreview 
      url=""
      className="bg-[#e4405f] font-bold rounded h-8"
      >
      <IconBrandInstagram className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
    </div>
    </div>
  );
};


const SkeletonEighteen = () => {
  return (
    <div className=" flex w-full">
      <p className="font-extrabold text-5xl text-white md:pb-5 ">Reggie Farina</p>
     <div className="flex mt-20 gap-2">
      <LinkPreview 
      url="https://www.facebook.com/akosiaok"
      className="bg-blue-600 font-bold rounded h-8"
      >
      <IconBrandFacebook className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
      <LinkPreview 
      url=""
      className="bg-[#e4405f] font-bold rounded h-8"
      >
      <IconBrandInstagram className=" text-slate-300 h-8 flex w-8"/> 
      </LinkPreview> {" "}
    </div>
    </div>
  );
};




const cardname = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail:
      "/romel.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/Agsaoay.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/Torlao.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "col-span-1",
    thumbnail:
      "/Rogin.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "col-span-1",
    thumbnail:
      "/Dave.jpg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1",
    thumbnail:
      "/Matt.jpg",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "col-span-1",
    thumbnail:
      "/Aaron.jpg",
  },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "col-span-1",
    thumbnail:
      "/Guds.jpg",
  },
  {
    id: 9,
    content: <SkeletonNine />,
    className: "col-span-1",
    thumbnail:
      "/Jubs.jpg",
  },
  {
    id: 10,
    content: <SkeletonTen />,
    className: "col-span-1",
    thumbnail:
      "/Tudas.jpg",
  },
  {
    id: 11,
    content: <SkeletonEleven />,
    className: "col-span-1",
    thumbnail:
      "/Ababa.jpg",
  },
  {
    id: 12,
    content: <SkeletonTwelve />,
    className: "col-span-1",
    thumbnail:
      "/Perez.jpg",
  },
  {
    id: 13,
    content: <SkeletonThirteen />,
    className: "col-span-1",
    thumbnail:
      "/Salavedra.jpg",
  },
  {
    id: 14,
    content: <SkeletonFourteen />,
    className: "col-span-1",
    thumbnail:
      "/Jethro.jpg",
  },
  {
    id: 15,
    content: <SkeletonFifteen />,
    className: "col-span-1",
    thumbnail:
      "/Balderas.jpg",
  },
  {
    id: 16,
    content: <SkeletonSixteen />,
    className: "col-span-1",
    thumbnail:
      "/Rico.jpg",
  },
  {
    id: 17,
    content: <SkeletonSeventeen />,
    className: "col-span-1",
    thumbnail:
      "/Nico.jpg",
  },
  {
    id: 18,
    content: <SkeletonEighteen />,
    className: "col-span-1",
    thumbnail:
      "/Reggie.jpg",
  },
];


  const items = [
    {
        src: '/public/Rommel.svg'
      },
      {
        src: '/public/Agsaoay.svg',
      },
      {
        src: '/public/Torlao.svg',
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
  

  const navItems = [
    {
  name: "Go Up",
  link: "/blogs",
  icon: (
    <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
  ),
  },
  ];
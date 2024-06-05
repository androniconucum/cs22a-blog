import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import Logo from "@/public/LOGO.svg"
import { IconHome, IconMessage, IconUser, IconBrandBlogger, } from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";





export default function Navbar() {
    const navItems = [
        {
          name: "Home",
          link: "/",
          icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Blogs",
          link: "/blog",
          icon: <IconBrandBlogger className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Students",
            link: "/studentsinfo",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
          },
          {
            name: "Info",
            link: "/aboutme",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
          },
        {
          name: "Newsletter",
          link: "/newsletter",
          icon: (
            <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
      ];
    return(
        <div className="relative bg-transparent w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">
        <nav className=" w-full relative flex items-center justify-between max-w-7xl mx-auto px-4 py-5 pb-1 pt-1 ">
            <div className="flex">
            <Link href={"/"} className="font-extrabold text-3xl flex items-center sticky"> <Image src={Logo} alt="logo of the webpage" width={40} height={30} className="pr-1"></Image>
                CS-22A </Link>
            <Link href={"/blogs"} className="pl-6 text-2xl pt-1.5 ">Blogs</Link>
            <Link href={"/studentsinfo"} className="pl-6 text-2xl pt-1.5 ">Students</Link>
            <Link href={"/aboutme"} className="pl-6 text-2xl pt-1.5 ">Info</Link>
            </div>
            <div className="flex"> 
            <Link href={"/aboutme"} className="pr-6 text-2xl pt-1.5">Newsletter</Link>
          <ModeToggle />
          </div>
        </nav>
        <hr className=" w-full "/>
        </div>
    );
}
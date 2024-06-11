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
        <div className=" fixed bg-transparent w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 dark:bg-opacity-85 bg-white dark:bg-[#09090b] pt-1">
        <nav className=" w-full flex items-center justify-between max-w-full mx-auto  pb-1 pr-40 pl-40">
            <div className="flex">
            <Link href={"/"} className="font-extrabold text-xl flex items-center pr-10"> <Image src={Logo} alt="logo of the webpage" width={40} height={30} className="pr-1"></Image>
                CS-22A </Link>
            <Link href={"/blogs"} className="pl-6 text-sm pt-2 text-foreground/60 hover:text-foreground/100 font-medium">Blogs</Link>
            <Link href={"/aboutme"} className="pl-6 text-sm pt-2 text-foreground/60 hover:text-foreground/100 font-medium">Info</Link>
            </div>
            <div className="flex"> 
          <ModeToggle />
          <button className="px-1 ml-5 text-sm my-0 py-0 rounded-md bg-white text-black font-bold transition duration-200 hover:bg-[#09090b] hover:text-white dark:bg-[#09090b] dark:text-[#E0E0E1] dark:hover:bg-white dark:hover:text-black">
            Newsletter
          </button>
          </div>
        </nav>
        <hr className="full"/>
        </div>
    );
}
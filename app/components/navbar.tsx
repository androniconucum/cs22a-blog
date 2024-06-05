import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import Logo from "@/public/LOGO.svg"


export default function Navbar() {
    return(
        <div className="fixed w-full bbg-white-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <nav className=" w-full relative flex items-center justify-between max-w-7xl mx-auto px-4 py-5 pb-1 pt-1 ">
            <Link href={"/"} className="font-extrabold text-3xl flex items-center sticky"> <Image src={Logo} alt="logo of the webpage" width={70} height={70} className="pr-1"></Image>
                CS-22A
            </Link>
          <ModeToggle />
        </nav>
          <hr className=" w-full"/>
        </div>
    );
}
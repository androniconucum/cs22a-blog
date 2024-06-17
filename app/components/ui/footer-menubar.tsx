import { ModeToggle } from "../ModeToggle"
import Link from "next/link"
import Image from "next/image"





export default function FooterMenu () {
    return (
        <div className="">
            <p className="text-center pb-5">Navigation</p>
        <div className="flex" >
        <div className="flex" >
            <Link href={"/"} className="pl-6 text-sm pt-2 text-foreground/60 hover:text-foreground/100 font-medium sm:text-sm">Home</Link>
            <Link href={"/#AboutUs"} className="pl-6 text-sm pt-2 text-foreground/60 hover:text-foreground/100 font-medium sm:text-sm">About</Link>
            <Link href={"/#Students"} className="pl-6 text-sm pt-2 text-foreground/60 hover:text-foreground/100 font-medium sm:text-sm">Students</Link>
            <Link href={"/blogs"} className="pl-6 text-sm pt-2 text-foreground/60 hover:text-foreground/100 font-medium sm:text-sm">Blogs</Link>
            <Link href={"/aboutme"} className="pl-6 text-sm pt-2 text-foreground/60 hover:text-foreground/100 font-medium">Info</Link>
            </div>
            </div>
          </div>
    )
}
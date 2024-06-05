import Link from "next/link";
import { FlipWords } from "./components/ui/flip-words";
import Blogs from "./blogs/page";
import { IconHome, IconMessage, IconUser, IconBrandBlogger, } from "@tabler/icons-react";
import { FloatingNav } from "@/app/components/ui/floating-navbar";
import { Section, Container } from "@/components/craft";
import Balancer from 'react-wrap-balancer'
import {Button} from "@/components/ui/button";
import {Camera, User} from "lucide-react";


export default function Home() {
  const words = ["CS-22A","BLOGS"];
  

  return(
    <div className="text-center">
      <FlipWords words={words} className="mt-28 text-big max-w-7xl font-bold " />
<Section>
      <Container className="text-center items-center flex flex-col">
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
              Students
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
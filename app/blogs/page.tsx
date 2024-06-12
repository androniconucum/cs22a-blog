import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/app/components/navbar";
import { simpleBlogCard } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FloatingNav } from "@/app/components/ui/floating-navbar";
import { LayoutGrid } from "@/app/components/ui/layout-grid";
import { url } from "inspector";
import { LinkPreview } from "../components/ui/link-preview";
import { IconMessage } from "@tabler/icons-react";
import { motion} from "framer-motion";




export const revalidate =30; //revalidate at most 30 secoonds

async function getData() {
  const query = `
  *[_type=='blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
  }`;
  
  const data = await client.fetch(query)
  
  return data;
}


export default async function Blogs() {
  const data: simpleBlogCard[] = await getData();
  
  console.log(data);
  
    

    return (
    <div className="w-full">
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-5 mx-40 outline-none justify-center pt-40"> 
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image 
          src={urlFor(post.titleImage).url()} 
          alt="image" 
          width={900} 
          height={700}
          className="rounded-t-lg h-[250px] object-cover" 
          />

          <CardContent className="mt-5">
          <h3 className="text-xsmall font-bold line-clamp-2">{post.title}</h3>
          <p className="line-clamp-3  mt-2 text-gray-600 dark:text-gray-400">
            {post.smallDescription}
            </p>
            <Button asChild className="w-full mt-7">
             <Link href={`/blog/${post.currentSlug}`} >Read More</Link>
            </Button>
          </CardContent>
        </Card>
))}
          </div>
          </div>
    )
    }
       

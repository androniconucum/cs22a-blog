import { Card, CardContent } from "@/components/ui/card";
import Navbar from "./components/navbar";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";


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



export default async function Home() {
  const data: simpleBlogCard[] = await getData();

console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-24 gap-5"> 
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image 
          src={urlFor(post.titleImage).url()} 
          alt="image" 
          width={700} 
          height={400}
          className="rounded-t-lg h-[200px] object-cover " 
          />

          <CardContent className="mt-5">
          <h3 className="text-lg font-bold line-clamp-2">{post.title}</h3>
          <p className="line-clamp-3 text-small mt-2 text-gray-600 dark:text-gray-400">
            {post.smallDescription}
            </p>
            <Button asChild className="w-full mt-7">
             <Link href={`/blog/${post.currentSlug}`} className="text-slate-200">Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

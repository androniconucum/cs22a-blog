import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/app/components/navbar";
import { simpleBlogCard } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconHome, IconMessage, IconUser, IconBrandBlogger, } from "@tabler/icons-react";
import { FloatingNav } from "@/app/components/ui/floating-navbar";
import { LayoutGrid } from "@/app/components/ui/layout-grid";





const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};
 
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
 








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
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Blogs",
    link: "/blogs",
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
    
    return (

    <div className="w-full">
    <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5 mx-20 outline-none"> 
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image 
          src={urlFor(post.titleImage).url()} 
          alt="image" 
          width={800} 
          height={700}
          className="rounded-t-lg h-[250px] object-cover " 
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
       <div>

        <div className="h-screen py-20 w-full">
          <div className="text-center mt-20 font-bold text-5xl">
            CS22A STUDENTS S.Y 2024
          </div>
        <LayoutGrid cards={cardname} />
       </div>
  </div>
  <FloatingNav navItems={navItems} />
       </div>
       
  );
  
  }

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
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "/Rogin.jpg",
    },
    {
      id: 5,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "/Dave.jpg",
    },
    {
      id: 6,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "/Matt.jpg",
    },
    {
      id: 7,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "/Aaron.jpg",
    },
    {
      id: 8,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "/Guds.jpg",
    },
    {
      id: 9,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "/Jubs.jpg",
    },
    {
      id: 10,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "/Tudas.jpg",
    },
    {
      id: 11,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "/Ababa.jpg",
    },
    {
      id: 12,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "/Perez.jpg",
    },
    {
      id: 13,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "/Salavedra.jpg",
    },
    {
      id: 14,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "/Jethro.jpg",
    },
    {
      id: 15,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "/Balderas.jpg",
    },
    {
      id: 16,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "/Rico.jpg",
    },
    {
      id: 17,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "/Nico.jpg",
    },
    {
      id: 18,
      content: <SkeletonThree />,
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
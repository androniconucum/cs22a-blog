
import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity"
import { IconBrandBlogger, IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { PortableText } from "next-sanity";
import Image from "next/image"


export const revalidate =30; //revalidate at most 30 secoonds
async function getData(slug: string) {
    const query = `
    *[_type == "blog" && slug.current == '${slug}']{
        "currentSlug": slug.current,
          title,
          content,
          titleImage
      }[0]`

      const data  = await client.fetch(query)
      return data;
}


export default async function BlogArticle ({params}: {params: {slug: string}}) {
    const data: fullBlog = await getData(params.slug)

    console.log(data);

    return (
        <div className=" max-w-full scroll-smooth items-center justify-items-center object-center lg:mx-50  md:mx-40 sm:mx-20">
            <h1 className="object-center">
                <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase "> CS22A -Blog</span>
                <span className=" mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl ">{data.title}</span>
            </h1>
            <div className="object-center">
            <Image src={urlFor(data.titleImage).url()} width={1600 } height={100} alt="Title Image" priority className="rounded-lg mt-8 max-w-full lg:max-w-full " />
            </div>
            <div className="mt-16 prose-a:no-underline prose prose-blue prose-xl dark:prose-invert  prose-a:text-primary prose-p:text-justify max-w-full text-xl "> 
                <PortableText  value={data.content} />
            </div>
        </div>
    );
}
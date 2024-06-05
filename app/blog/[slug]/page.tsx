import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity"
import { Fullscreen } from "lucide-react";
import { PortableText } from "next-sanity";
import Image from "next/image";


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
        <div className="mt-10  max-w-full scroll-smooth ">
            <h1>
                <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase mt-40"> CS22A -Blog</span>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl max-w-6xl ">{data.title}</span>
            </h1>

            <Image src={urlFor(data.titleImage).url()} width={1120} height={500} alt="Title Image" priority className="rounded-lg mt-8  max-w-8xl" />

            <div className="mt-16  prose-a:no-underline prose prose-blue prose-xl dark:prose-invert  prose-a:text-primary prose-p:text-justify max-w-7xl "> 
                <PortableText  value={data.content} />

            </div>
        </div>
    );
}
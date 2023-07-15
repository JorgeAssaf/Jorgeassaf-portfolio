
import { createClient, groq } from "next-sanity";
import { client } from '@/lib/sanity'
import { Projects } from "@/app/types/sanity";

export async function getProjects() {
  const query = `*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    github,
    url,
    technologies[]->{
      name,
      "image": image.asset->url
    },
    content
  }`

  const data = await client.fetch(query);
  return data;
}
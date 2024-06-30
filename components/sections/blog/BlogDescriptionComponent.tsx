"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import blogData from "../../../assets/app/blogData.json";
import NoResultsFoundComponent from "../NoResultsFoundComponent";

import { BlogDataParams, BlogDataItemProps } from "@/types";

const BlogDescriptionComponent = ({ params }: { params: BlogDataParams }) => {
  const [blog, setBlog] = useState<BlogDataItemProps | null>(null);

  useEffect(() => {
    const foundBlog = blogData.find(
      (blogItem) => blogItem.slug === params.slug
    );
    setBlog(foundBlog || null);
  }, [params.slug]);

  if (!blog) {
    return (
      <NoResultsFoundComponent
        title="No blog found!"
        message="Unfortunately, there was no blog found."
      />
    );
  }

  return (
    <section className="md:container md:pl-2 lg:container lg:pl-2 flex flex-col-reverse md:flex-row lg:flex-row w-full space-x-0 md:space-x-1 lg:space-x-4">
      {/* text section */}
      <div className="flex flex-col w-full justify-center items-start pt-2">
        <p className="text-white text-[12px] leading-none font-thin pb-4">
          {blog.blogDetails}
        </p>

        <p className="text-white text-[12px] leading-none font-thin pb-4">
          Mollit pariatur exercitation ex dolor minim nulla esse reprehenderit
          consequat sint nisi dolore. Ipsum dolore occaecat velit ipsum
          reprehenderit ad duis. Irure aliquip consequat qui reprehenderit
          mollit excepteur proident. Aute consequat eu fugiat enim minim aute
          cupidatat dolor ex ea aliqua tempor nisi culpa.{" "}
        </p>

        <p className="text-white text-[12px] leading-none font-thin pb-4">
          Irure ad voluptate pariatur fugiat irure incididunt anim consectetur
          officia aute non Lorem dolore. Consequat nulla aliquip eiusmod sunt ea
          fugiat ea fugiat tempor proident. Exercitation pariatur ullamco eu qui
          magna exercitation magna ullamco sunt commodo deserunt.{" "}
        </p>

        <p className="text-white text-[12px] leading-none font-thin pb-4">
          Dolore labore non sint qui dolore consequat. Nulla id occaecat do
          aute. Ipsum nulla laborum laboris culpa culpa culpa nisi consequat
          incididunt nisi esse aliquip duis laborum.{" "}
        </p>

        <p className="text-white text-[12px] leading-none font-thin pb-4">
          Eiusmod officia sunt esse culpa. Exercitation ea dolore culpa
          reprehenderit. Laborum et cillum tempor labore reprehenderit anim. Eu
          laboris nostrud dolore tempor commodo cillum duis.{" "}
        </p>

        <p className="text-white text-[12px] leading-none font-thin pb-4">
          Nulla quis esse labore consectetur. Duis commodo velit commodo veniam
          deserunt ea cupidatat commodo nostrud est. Laboris proident sit quis
          sint et. Minim est tempor elit anim aliquip. Quis labore laboris
          reprehenderit labore reprehenderit adipisicing ut qui dolore quis
          magna incididunt. Aute Lorem irure eu adipisicing. Ad incididunt
          proident ex enim voluptate sit culpa sint mollit sit.
        </p>
      </div>
    </section>
  );
};

export default BlogDescriptionComponent;

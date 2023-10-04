"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { InstagramPost } from "@/lib/types";
import getPosts from "@/instagram/instagram-fetch";

import { englishText, instagramLink } from "@/lib";
import Link from "next/link";

export default function InstagramGallery() {
  const [data, setData] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();

        const posts = data.map((post: InstagramPost) => post).filter((
          post,
        ) =>
          post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM"
        );

        setData(posts.slice(0, 12));
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log("Error fetching data from proxy server:", error.message);
        }
        setError("An error occurred while fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section id="instagram">
        <div className="container">
          <InstaBanner />
          <div className="flex justify-center items-center">
            <span>Loading...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="instagram">
        <div className="container">
          <InstaBanner />
          <div className="flex justify-center items-center">
            <span>Error: {error}</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="instagram">
      <div className="container">
        <InstaBanner />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 h-[60rem]">
          {data.map((post) => (
            <Link
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noreferer"
              className="relative"
            >
              <Image
                src={post.media_url}
                alt="Instagram Post Astudio Larnaca"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-md transition-all hover:scale-95"
              >
              </Image>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstaBanner() {
  return (
    <div className="flex flex-col items-center">
      <div className="border-solid border-b-2 border-stone-400/90 w-32"></div>
      <h2 className="text-3xl my-3">
        {englishText.contact.instagram[0]}{" "}
        <Link
          href={instagramLink}
          target="_blank"
          rel="noreferrer"
          className="text-pink-500"
        >
          {englishText.contact.instagram[1]}
          {" "}
        </Link>{" "}
        {englishText.contact.instagram[2]}
        {" "}
      </h2>
      <div className="border-solid border-t-2 border-stone-400/90 w-32"></div>
    </div>
  );
}

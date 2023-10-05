"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/context/language-context";
import { englishText, instagramLink, russianText } from "@/lib";
import { InstagramPost } from "@/lib/types";
import getPosts from "@/instagram/instagram-fetch";

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
        <div className="container py-8 sm:py-14">
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
        <div className="container py-8 sm:py-14">
          <InstaBanner />
          <div className="flex justify-center items-center">
            <span>
              An Error has occured getting our instagram post.<br />Please visit
              our instagram page to see our work!
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="instagram">
      <div className="container py-8 sm:py-14">
        <InstaBanner />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 h-[60rem]">
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
                className="object-cover rounded-md transition-all hover:scale-95 ease-in-out duration-300"
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
  const { language } = useLanguage();

  const text = language === "english" ? englishText : russianText;

  return (
    <div className="flex flex-col items-center mb-6">
      <div className="border-solid border-b-2 border-stone-400/90 w-32"></div>
      <h2 className="text-base sm:text-3xl my-3 text-center">
        {text.contact.instagram[0]}{" "}
        <Link
          href={instagramLink}
          target="_blank"
          rel="noreferrer"
          className="text-pink-500"
        >
          {text.contact.instagram[1]}
          {" "}
        </Link>{" "}
        {text.contact.instagram[2]}
        {" "}
      </h2>
      <div className="border-solid border-t-2 border-stone-400/90 w-32"></div>
    </div>
  );
}

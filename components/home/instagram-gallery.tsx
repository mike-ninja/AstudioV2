"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { InstagramPost } from "@/lib/types";

import { englishText, instagramApiLink } from "@/lib";
import Link from "next/link";

export default function InstagramGallery() {
  const [data, setData] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${instagramApiLink}IGQWRNelJPYk40RXljVnA0Y3lpR1VtZA0FvaUZANZAzR5OUdZAcXc0SDN1cWRpUEcwdmlfRGdlM19YSG45WjZAIYjJnZAkdrQ1Y1bmFsU3JqMmdQdjJObEFFSzdSZAnUyclFSQzc4NV9mMFFjODBpOXdNUUc2Rk16T2RHUzgZD`,
        );

        const data: InstagramPost[] = await response.json().then((res) =>
          res.data
        );


        const allPosts = data.map((post: InstagramPost) => post).filter((
          post,
        ) => post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM");

        console.log(allPosts);

        setData(allPosts.slice(0, 8));
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
          <div>
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
          <div>
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
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {data.map((post) => (
            <Link key={post.id} href={post.permalink} target="_blank" rel="noreferer">
              <Image
                src={post.media_url}
                alt="Instagram Post Astudio Larnaca"
                width={200}
                height={200}
                className="object-cover w-auto h-auto"
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
    <div className="">
      <div className=""></div>
      <span>{englishText.instagram}</span>
      <div className=""></div>
    </div>
  );
}

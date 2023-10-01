import React from "react";

export default async function getPosts() {
  const url = `
https://graph.instagram.com/me/media?fields=id,media_url,permalink,media_type&access_token=${process.env.INSTAGRAM_KEY}
`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

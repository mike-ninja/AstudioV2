import { InstagramPost } from "@/lib/types";

export default async function getPosts() {
  const url = `
https://graph.instagram.com/me/media?fields=id,media_url,permalink,media_type&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}
`;
  const response = await fetch(url);
  const data: InstagramPost[] = await response.json().then((res) => res.data);
  return data;
}

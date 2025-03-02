import { useQuery } from "@tanstack/react-query";
import { InstagramPost } from "@/components/InstagramFeed/InstagramType";

const fetchInstagramMedia = async (): Promise<{ data: InstagramPost[] }> => {
  const token = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
  if (!token) throw new Error("Instagram access token is missing");

  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_url,caption,permalink,media_type,thumbnail_url,timestamp,username,children{media_url,media_type,thumbnail_url}&access_token=${token}`
  );

  if (!response.ok) throw new Error("Failed to fetch Instagram posts");

  return response.json();
};

export const useInstagramMedia = () => {
  return useQuery<{ data: InstagramPost[] }>({
    queryKey: ["instagramMedia"],
    queryFn: fetchInstagramMedia,
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};

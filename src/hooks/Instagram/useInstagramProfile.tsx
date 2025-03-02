import { useQuery } from "@tanstack/react-query";
import { InstagramProfile } from "@/components/InstagramFeed/InstagramType";

const fetchInstagramProfile = async (): Promise<InstagramProfile> => {
  const igtoken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
  if (!igtoken) throw new Error("Instagram access token is missing");

  // Lấy ID, username và avatar từ Instagram Graph API
  const userRes = await fetch(
    `https://graph.instagram.com/me?fields=id,username,account_type,media_count,profile_picture_url&access_token=${igtoken}`
  );

  if (!userRes.ok) throw new Error("Failed to fetch Instagram profile");
  const userData = await userRes.json();
  return {
    ...userData,
    profileUrl: `https://www.instagram.com/${userData.username}/`,
  };
};

export const useInstagramProfile = () => {
  return useQuery<InstagramProfile>({
    queryKey: ["instagramProfile"],
    queryFn: fetchInstagramProfile,
    staleTime: 1000 * 60 * 10, // Cache 10 phút
  });
};

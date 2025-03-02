import { useState } from "react";
import Image from "next/image";
import useDisableScroll from "@/hooks/common/useDisableScroll";
import InstagramPostModal from "./SelectPostModal";
import { useInstagramMedia } from "@/hooks/Instagram/useInstagramMedia";
import { useInstagramProfile } from "@/hooks/Instagram/useInstagramProfile";
import { InstagramPost } from "./InstagramType";

export default function InstagramFeed() {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  useDisableScroll(!!selectedPost);

  // Fetch Instagram posts
  const { data: mediaData } = useInstagramMedia();

  // Fetch Instagram profile
  const { data: profileData } = useInstagramProfile();

  return (
    <>
      {/* Instagram Posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:max-w-[1100px] place-items-center">
        {mediaData?.data.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg shadow-lg hover:shadow-xl transition relative w-full aspect-square overflow-hidden cursor-pointer"
            onClick={() => setSelectedPost(post)}
          >
            {post.media_type === "VIDEO" ? (
              <>
                <video
                  src={post.media_url}
                  className="w-full h-full object-cover "
                  // controls={!selectedPost}
                  // playsInline={false}
                  poster={post?.thumbnail_url ?? ""}
                />
              </>
            ) : (
              <Image
                src={post.media_url}
                alt={post.caption || "Instagram Post"}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            )}
          </div>
        ))}
      </div>

      {selectedPost && (
        <InstagramPostModal
          selectedPost={selectedPost}
          setSelectedPost={setSelectedPost}
          profileData={profileData}
        />
      )}
    </>
  );
}

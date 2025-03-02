import { Dispatch, SetStateAction } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { InstagramPost, InstagramProfile } from "./InstagramType";
import { Pagination } from "swiper/modules";

interface InstagramPostModalProps {
  selectedPost: InstagramPost | null;
  setSelectedPost: Dispatch<SetStateAction<InstagramPost | null>>;
  profileData?: InstagramProfile;
}

export const InstagramPostModal: React.FC<InstagramPostModalProps> = ({
  selectedPost,
  setSelectedPost,
  profileData,
}) => {
  if (!selectedPost) return null;

  return (
    <div
      className="fixed inset-0 !mt-0 bg-black bg-opacity-90 flex items-center justify-center z-[1000]"
      onClick={() => setSelectedPost(null)}
    >
      <div
        className="bg-white rounded-lg relative max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={() => setSelectedPost(null)}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Side: Media Content */}
        <div className="relative w-full  bg-black">
          {selectedPost?.children?.data &&
          selectedPost?.children?.data?.length > 0 ? (
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper w-[40vw]"
              slidesPerView={1}
              spaceBetween={0}
            >
              {selectedPost?.children?.data?.map((child) => (
                <SwiperSlide className="w-fit" key={child.id}>
                  {child.media_type === "VIDEO" ? (
                    <video
                      src={child.media_url}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                    />
                  ) : (
                    <div className="w-full aspect-square relative lg:w-[40vw]">
                      <Image
                        src={child.media_url}
                        alt="Instagram Post"
                        fill
                        sizes="auto"
                      />
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          ) : selectedPost.media_type === "VIDEO" ? (
            <video
              src={selectedPost.media_url}
              className="w-full h-full object-contain"
              controls
              autoPlay
            />
          ) : (
            <div className="w-full aspect-square relative min-w-[40vw]">
              <Image
                src={selectedPost.media_url}
                alt={selectedPost.caption || "Instagram Post"}
                fill
                sizes="auto"
              />
            </div>
          )}
        </div>

        {/* Right Side: Post Details */}
        <div className="p-4 w-full  flex flex-col justify-start">
          {/* User Info */}
          <div
            onClick={() => {
              window.open(profileData?.profileUrl, "_blank", "noopener");
            }}
            className="flex items-center mb-2 cursor-pointer"
          >
            <Image
              src={profileData?.profile_picture_url ?? ""} // Thay bằng avatar từ API nếu có
              alt={profileData?.username ?? ""}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="ml-2 font-semibold text-[14px] hover:underline ">
              {selectedPost.username}
            </span>
          </div>

          {/* Caption */}
          {selectedPost.caption && (
            <p className="text-bg_dark whitespace-pre-line text-[14px]">
              {selectedPost.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstagramPostModal;

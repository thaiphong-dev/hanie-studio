interface InstagramMedia {
  media_url: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  id: string;
}

export interface InstagramPost {
  id: string;
  media_url: string;
  caption?: string;
  permalink: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  thumbnail_url?: string;
  timestamp: string;
  username: string;
  children?: {
    data: InstagramMedia[];
  };
}

export interface InstagramProfile {
  id: string;
  username: string;
  profileUrl: string;
  profile_picture_url: string;
}

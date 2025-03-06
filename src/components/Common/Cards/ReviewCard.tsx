"use client";

import Image from "next/image";
import { FC } from "react";

interface ReviewCardProps {
  name: string;
  avatar: string;
  timeAgo: string;
  rating: number;
  review: string;
}

const ReviewCard: FC<ReviewCardProps> = ({
  name,
  avatar,
  timeAgo,
  rating,
  review,
}) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg max-w-md border border-gray-200">
      <div className="flex items-center gap-3">
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className=" text-gray-500">{timeAgo}</p>
        </div>
      </div>
      <div className="mt-2 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
          >
            ★
          </span>
        ))}
      </div>
      <p className="mt-2 text-gray-700">{review}</p>
    </div>
  );
};

export default ReviewCard;

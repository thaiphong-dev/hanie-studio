import Image from "next/image";

interface HoverImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const HoverImage: React.FC<HoverImageProps> = ({
  src,
  alt,
  width = 300,
  height = 200,
}) => {
  return (
    <div className="relative w-[300px] h-[200px] overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>
  );
};

export default HoverImage;

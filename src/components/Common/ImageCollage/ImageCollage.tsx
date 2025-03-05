import Image from "next/image";

type ImageCollageProps = {
  images: string[];
};

const ImageCollage: React.FC<ImageCollageProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full h-full max-w-[1240px]">
      <div className="col-span-2  row-span-2">
        <Image
          src={images[0]}
          alt="Main Image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full aspect-square max-w-[610px] object-cover "
        />
      </div>
      {images?.slice(0, 2).map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full aspect-square max-w-[610px] object-cover "
          />
        </div>
      ))}

      <div className="col-span-2 row-span-2">
        <Image
          src={images[images?.length - 1]}
          alt="Main Image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full aspect-square max-w-[610px] object-cover "
        />
      </div>

      {images?.slice(2, images?.length - 2).map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full aspect-square max-w-[610px] object-cover "
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCollage;

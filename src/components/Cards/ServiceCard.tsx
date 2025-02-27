import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: "700",
  subsets: ["latin"],
});
interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full aspect-video">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="opacity-90 hover:opacity-100 transition duration-300"
        />
      </div>
      <div className="p-4 text-center">
        <h2 className={`${raleway.className} text-[22px] text-card_header`}>
          {title}
        </h2>
        <p className="text-card_header text-[19px]">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

import Image from "next/image";
import { Raleway } from "next/font/google";
import { useRouter } from "next/router";

const raleway = Raleway({
  weight: "700",
  subsets: ["latin"],
});
interface ServiceCardProps {
  img: string;
  title: string;
  subTitle: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  img: imageSrc,
  title,
  subTitle: description,
  link,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(link)}
      className="w-full bg-white rounded-md shadow-md overflow-hidden hover:shadow-xl cursor-pointer"
    >
      <div className="relative w-full min-h-[280px] aspect-video">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="lg:opacity-90 hover:opacity-100 transition duration-300"
        />
      </div>
      <div className="p-4 text-center capitalize">
        <h2 className={`${raleway.className} text-[22px] text-card_header`}>
          {title}
        </h2>
        <p className="text-card_header text-[19px]">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

import { ReactNode } from "react";

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="border rounded-2xl p-6 shadow-sm text-center flex flex-col items-center space-y-3 hover:shadow-lg">
      {icon && <div className="text-red-500 text-3xl">{icon}</div>}
      <h3 className=" font-semibold text-active_hover text-[36px]">{title}</h3>
      <p className="text-bg_dark text-[19px]">{description}</p>
    </div>
  );
};
export default FeatureCard;

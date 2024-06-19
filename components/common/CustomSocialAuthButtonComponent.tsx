import { SocialButtonProps } from "@/types";

const CustomSocialAuthButtonComponent = ({
  onClick,
  icon,
  text,
}: SocialButtonProps) => {
  return (
    <button
      className="w-full flex flex-row justify-center items-center text-white font-medium text-m bg-transparent shadow-lg border-2 border-gray-200 rounded-2xl py-2"
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default CustomSocialAuthButtonComponent;

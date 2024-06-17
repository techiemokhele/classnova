import { CustomButtonProps } from "@/types";

const CustomButtonComponent = ({ onClick, text, icon }: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-teal-500 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-full cursor-pointer flex flex-row items-center justify-center"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default CustomButtonComponent;

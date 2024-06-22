const OrSeparatorComponent = ({
  text,
  bigText,
}: {
  text: string;
  bigText: boolean;
}) => {
  return (
    <div className="relative flex py-3 px-6 items-center">
      <div className="flex-grow border-t border-gray-400"></div>
      <span
        className={`flex-shrink mx-4 text-gray-400 ${
          bigText ? "text-xl" : " text-[10px]"
        }`}
      >
        {text}
      </span>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
};

export default OrSeparatorComponent;

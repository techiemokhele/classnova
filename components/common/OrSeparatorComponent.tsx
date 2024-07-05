const OrSeparatorComponent = ({
  text,
  bigText,
}: {
  text: string;
  bigText: boolean;
}) => {
  return (
    <div
      className={`items-center relative flex ${
        bigText ? "py-10" : "py-3 px-6 "
      }`}
    >
      <div className="flex-grow border-t border-gray-400"></div>
      <span
        className={`flex-shrink mx-4 text-gray-400 ${
          bigText ? "text-xl" : " text-xs"
        }`}
      >
        {text}
      </span>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
};

export default OrSeparatorComponent;

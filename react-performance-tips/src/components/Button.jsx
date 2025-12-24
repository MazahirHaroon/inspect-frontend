const Button = ({ className, handleClick, children }) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 active:translate-y-0.5 text-white px-4 py-2 border cursor-pointer border-blue-700 rounded ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;

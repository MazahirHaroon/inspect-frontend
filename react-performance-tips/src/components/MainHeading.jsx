const MainHeading = ({ className, content }) => {
  return (
    <h1 className={`text-black text-bold text-2xl ${className}`}>{content}</h1>
  );
};

export default MainHeading;

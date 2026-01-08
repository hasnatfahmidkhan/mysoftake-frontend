const Logo = ({ className }) => {
  return (
    <>
      <img
        src="./logo.png"
        alt="My Softake Logo"
        className={`w-24 h-auto ${className}`}
      />
    </>
  );
};

export default Logo;

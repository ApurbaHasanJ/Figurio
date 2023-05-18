
import { FaArrowRight } from "react-icons/fa";


const Banner = ({ banner }) => {
  const { title, description, img } = banner;
  // console.log(banner);
  return (
    <div
      className="relative bg-center bg-cover lg:h-screen h-96"
      style={{ backgroundImage: `url(${img})` }}
    >
         <div className="absolute inset-0 bg-black opacity-30  duration-700"></div>
         {/* banner description */}
      <div
        className="absolute drop-shadow-2xl top-1/2  lg:top-1/3 text-center left-1/2 lg:w-1/2"
        style={{ transform: "translate(-50%,-50%)" }}
      >
        <h2 className="mb-3 lg:text-7xl md:text-5xl text-xl font-serif text-white">
          {title}
        </h2>
        <p className="mb-3 text-gray-100 mt-4 lg:mt-0 text-xs md:text-base lg:text-lg pr-1 drop-shadow-2xl">
          {description}
        </p>
        <button className="btn grid gap-2"><span>See All Toys</span>
        <FaArrowRight/></button>
      </div>
    </div>
  );
};

export default Banner;

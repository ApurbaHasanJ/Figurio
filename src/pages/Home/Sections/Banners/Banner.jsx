import AOS from "aos";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = ({ banner }) => {
  const { title, description, img } = banner;


  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration for animations
      mirror: false, // Disable mirroring of animations on scroll
    });
  }, []);

  return (
    <div
      className="relative bg-center bg-cover lg:h-screen h-96"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30 duration-700"></div>
      {/* banner description */}
      
      <div className="absolute left-4 top-1/2 lg:max-w-3xl md:max-w-xl  transform -translate-y-1/2">
        <div data-aos="fade-right"  className="flex flex-col items-start mx-8 lg:mx-16">
          <h2 className="lg:mb-3 mb-1 lg:text-7xl md:text-5xl text-2xl text-white">
            Get -30% Off
          </h2>
          <p className="lg:mb-3 mb-1 text-gray-100 lg:mt-4 mt-1 text-base md:text-lg lg:text-2zl pr-1">
            {title} Toys
          </p>
          <p className="mb-3 text-gray-100  text-xs md:text-base lg:text-lg pr-1">
            {description}
          </p>
          <Link to="/all-toys">
          <button 
          className="btn grid gap-2">
            <span>See All Toys</span>
            <FaArrowRight />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

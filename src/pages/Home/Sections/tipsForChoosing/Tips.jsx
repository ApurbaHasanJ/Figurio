import { AiOutlineSafety } from "react-icons/ai";
import { TbGoGame } from "react-icons/tb";
import { GiStoneStack } from "react-icons/gi";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const Tips = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration for animations
      mirror: false, // Disable mirroring of animations on scroll
    });
  }, []);

  return (
    <div className="mt-12 my-container">
      <>
        <h2 className="text-xl md:text-3xl lg:text-5xl  font-bold mb-3 text-center">
          Tips for choosing toys for children
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Choose toys that match your child&apos;s age, interests, and
          developmental needs. Look for safe, durable, and engaging toys that
          promote creativity, problem-solving, and physical activity.
        </p>
      </>

      {/* section body */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div
          data-aos="fade-right"
          className="border-dashed border relative p-12 rounded-lg border-rose-400"
        >
          <div className="bg-rose-50 p-3 rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 flex justify-center items-center">
            <AiOutlineSafety className="text-4xl " />
          </div>
          <h3 className="text-3xl font-bold text-center mb-3 text-gray-800">
            Safe
          </h3>
          <p className="text-gray-600 mb-4 font-mono text-center">
            Safety is the top factor in choosing toys for your beloved, criteria
            of origin, brand...
          </p>
        </div>

        <div data-aos="fade-up" className="border-dashed border relative p-12 rounded-lg border-rose-400">
          <div className="bg-rose-50 p-3 rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 flex justify-center items-center">
            <TbGoGame className="text-4xl " />
          </div>
          <h3 className="text-3xl font-bold text-center mb-3 text-gray-800">
            Suitable for ages
          </h3>
          <p className="text-gray-600 mb-4 font-mono text-center">
            Parents should check the age notice on the product packaging or pay
            attention...
          </p>
        </div>
        <div data-aos="fade-left" className="border-dashed border relative p-12 rounded-lg border-rose-400">
          <div className="bg-rose-50 p-3 rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 flex justify-center items-center">
            <GiStoneStack className="text-4xl " />
          </div>
          <h3 className="text-3xl font-bold text-center mb-3 text-gray-800">
            Aesthetic and solid
          </h3>
          <p className="text-gray-600 mb-4 font-mono text-center">
            When choosing children&apos;s toys, check that the product is sturdy
            and safe...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tips;

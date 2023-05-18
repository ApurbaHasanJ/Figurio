import logo from "../../../assets/sword.png";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-slate-900 pt-10 ">
      <div className="my-container grid lg:grid-cols-5  md:grid-cols-3  gap-16 items-start text-white ">
        <div className="">
          <img src={logo} alt="" className="lg:w-20 md:w-16 w-12" />
          <h2 className="lg:text-4xl md:text-2xl text-xl font-bold mb-6">
            Figurio
          </h2>
          <div className="my-8 text-gray-400"></div>
          <div className="flex gap-4">
            <Link to="https://facebook.com/apurbahasanj/">
              <div className="rounded-full w-10 h-10 bg-white">
                <img
                  className="p-2"
                  src="https://i.postimg.cc/d0Yz1tks/facebook.png"
                  alt="fb"
                />
              </div>
            </Link>
            <Link to="https://www.twitter.com/ApurbaHasanJ">
              <div className="rounded-full w-10 h-10 bg-white">
                <img
                  className="p-2"
                  src="https://i.postimg.cc/t4PKpVgv/twitter.png"
                  alt="twitter"
                />
              </div>
            </Link>
            <Link to="https://www.instagram.com/apurbahasanj/">
              <div className="rounded-full w-10 h-10 bg-white">
                <img
                  className="p-2"
                  src="https://i.postimg.cc/rF7BB9qt/instagram.png"
                  alt="instagram"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="grid gap-3 text-base text-gray-400">
          <p>Courses</p>
          <p>Portfolio</p>
          <p>Gallery</p>
          <p>Setting</p>
        </div>
        <div className="grid gap-3 text-base text-gray-400">
          <p>My Story</p>
          <p>Program</p>
          <p>Store</p>
          <p>Help</p>
          <p>About us</p>
        </div>
        <div className="grid gap-3 text-base text-gray-400">
          <p>Membership</p>
          <p>Purchase guide</p>
          <p>Privacy policy</p>
          <p>Terms of service</p>
        </div>
        <div className="text-gray-400">
          <div className="flex gap-4 mb-3 items-center">
            <div className="text-xl">
            <BsFillTelephoneFill />
            </div>
            <p>+88 01533 333 333</p>
          </div>
          <div className="flex gap-4 mb-3 items-center">
            <div className="text-xl">
            <MdEmail />
            </div>
            <p>info@gmail.com</p>
          </div>
          <div className="flex gap-4 mb-3 items-start">
            <div className="text-xl">
              <MdLocationOn />
            </div>
            <p>72, Wall street, King Road, Dhaka</p>
          </div>
        </div>
      </div>
      <hr className="mt-9  text-gray-50" />
      <div className="my-container text-center">
        <p className=" text-base  text-gray-400">
          &#169;2023 Figurio. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

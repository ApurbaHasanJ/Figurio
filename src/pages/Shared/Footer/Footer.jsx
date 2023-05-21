import logo from "../../../assets/sword.png";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-rose-50 pt-10 mt-20">
      <div className="my-container grid lg:grid-cols-3  md:grid-cols-2  gap-16 items-center text-slate-700 ">
        <div className="">
          <img src={logo} alt="" className="lg:w-20 md:w-16 w-12" />
          <h2 className="lg:text-4xl md:text-2xl text-xl font-bold mb-3">
            Figurio
          </h2>
          <p className="mb-6">
            We hope you enjoy your time on our Action Figure Toys website and
            find the perfect toys to ignite your imagination and bring joy to
            your life!
          </p>

          <div className="flex gap-4 drop-shadow-2xl">
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
        <div>
          <h2 className="font-semibold mb-3 text-2xl">
            GET OUR LATEST NEWS AND SPECIAL SALES
          </h2>
          <p>
            Join us for the latest news, including special offers, events,
            collaborations and new arrivals.
          </p>
          <div className=" mb-3 flex mt-5">
            <input
              type="email"
              name="email"
              required
              placeholder="Email address"
              className=" hover:shadow-md shadow p-4 w-full input-bordered"
            />
            <button className="hover:bg-rose-500 p-4 shadow-lg  hover:shadow-2xl bg-rose-400 text-white">
              GET
            </button>
          </div>
        </div>
        {/* <div className="grid gap-3 text-base text-gray-400">
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
        </div> */}
        <div className="text-slate-700">
          <div className="flex gap-4 mb-3 items-center">
            <div>
              <BsFillTelephoneFill />
            </div>
            <p>+88 01554 755 775</p>
          </div>
          <div className="flex gap-4 mb-3 items-center">
            <div>
              <MdEmail />
            </div>
            <p>info@gmail.com</p>
          </div>
          <div className="flex gap-4 mb-3 items-start">
            <div className="text-xl">
              <MdLocationOn />
            </div>
            <p>123 Main Street, Gotham, USA</p>
          </div>
        </div>
      </div>
      <div className="border-b border-rose-300"></div>
      <div className="my-container text-right">
        <p className=" text-base  text-slate-700">
          &#169;2023 Figurio. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

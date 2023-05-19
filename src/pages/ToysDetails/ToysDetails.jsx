import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsStar, BsStarFill} from "react-icons/bs";
import { AuthContext } from "../../providers/AuthProvider";
import { AiOutlineEye } from "react-icons/ai";
import Rating from "react-rating";
import useTitle from "../../hooks/useTitle";

const ToysDetails = () => {
  const { user } = useContext(AuthContext);
  const [toyDetails, setToyDetails] = useState(null);
  const { categoryId, toyId } = useParams();

  useTitle('Toy Details')

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchToyDetails = async () => {
      try {
        const response = await fetch(
          `https://figurio.vercel.app/categories/${categoryId}/toys/${toyId}`
        );
        const data = await response.json();
        setToyDetails(data);
      } catch (error) {
        console.error("Error fetching toy details:", error);
      }
    };

    fetchToyDetails();
  }, [categoryId, toyId]);

  if (!user || !toyDetails) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div className="my-container">
      <div className="md:flex gap-8">
        <div className=" md:w-5/12">
          <img
            className="w-full"
            src={toyDetails.image}
            alt={toyDetails.name}
          />
        </div>
        <div className=" ml-4 md:w-7/12">
          {/* <p className="text-gray-600 mb-2">Rating: {toyDetails.rating}</p> */}
          <Rating
            placeholderRating={toyDetails.rating}
            emptySymbol={<BsStar className="icon text-orange-100 ml-2" />}
            placeholderSymbol={
              <BsStarFill className="icon text-yellow-300 ml-2" />
            }
            fullSymbol={<BsStarFill className="icon text-yellow-300 pm-1" />}
            readonly
          />

          <div className=" border-b border-gray-300 mb-3">
            <h2 className="text-3xl font-bold mb-2">{toyDetails.name} Toy</h2>
            <p className="text-rose-500 text-lg font-bold mb-5">
              Price: {toyDetails.price}
            </p>
          </div>
          <div className="border-b-2 border-rose-500">
            <p className="flex items-center gap-3 text-xl mb-3">
              <AiOutlineEye className="text-2xl" />
              <span className="font-bold">
                40 people are viewing this right now
              </span>
            </p>
            <p className="text-gray-600 mb-2 text-base">
              Description: {toyDetails.description}
            </p>
            <p className="text-gray-600 mb-3 font-medium">
              {toyDetails.inStock ? "Available In Stock" : "Out of Stock"}
            </p>
          </div>
          <div className="flex items-center gap-5 mt-3">
            <button className=" border border-rose-400 text-rose-500 hover:bg-rose-400 hover:text-white py-2 px-4 rounded-md duration-700">
              Add to Cart
            </button>
            <button className="bg-rose-400 hover:bg-white hover:text-rose-400 hover:border hover:border-rose-400 text-white py-2 px-4 rounded-md duration-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysDetails;

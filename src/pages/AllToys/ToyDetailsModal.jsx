import { BsStar, BsStarFill } from "react-icons/bs";
import Rating from "react-rating";

const ToyDetailsModal = ({ closeModal, toy }) => {
  const {
    toyName,
    toyPrice,
    toyQuantity,
    toyRating,
    toySubCategory,
    sellerName,
    sellerEmail,
    toyPhoto,
    toyDetails,
    toyCategory,
  } = toy;

  console.log(toy);
  return (
    <tr>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 m-2">
        <div className="modal-container bg-white p-4 rounded-md lg:max-w-4xl md:w-5/6 w-10/12">
          <h3 className="font-bold text-lg mb-2">Toy Details</h3>
          <div className="md:flex gap-8">
            <div className=" md:w-5/12">
              <img className="lg:w-full lg:h-full h-52 rounded-md" src={toyPhoto} alt={toyName} />
            </div>
            <div className=" ml-4 md:w-7/12">
              {/* <p className="text-gray-600 mb-2">Rating: {toyDetails.rating}</p> */}
              <Rating
                placeholderRating={toyRating}
                emptySymbol={<BsStar className="icon text-orange-100 ml-2" />}
                placeholderSymbol={
                  <BsStarFill className="icon text-yellow-300 ml-2" />
                }
                fullSymbol={
                  <BsStarFill className="icon text-yellow-300 pm-1" />
                }
                readonly
              />

              <div className=" border-b border-gray-300 mb-3">
                <h2 className="lg:text-3xl text-lg font-bold mb-1">{toyName} Toy</h2>
                <p className="text-rose-400 lg:text-lg text-base font-bold mb-2">
                  Price: ${toyPrice}
                </p>
                <p className="text-gray-600 mb-5 font-medium">
                  {toyQuantity} Toys available in stock
                </p>
              </div>
              <div className="border-b-2 border-rose-500">
                <p className="text-gray-600 lg:text-lg text-base font-bold">
                  Category: {toyCategory}
                </p>
                <p className="text-gray-600  font-semibold mb-2">
                  Sub-Category: {toySubCategory}
                </p>
                <p className="text-gray-600 font-medium  ">
                  Seller: {sellerName}
                </p>
                <p className="text-gray-600  mb-3">
                  Email: {sellerEmail}
                </p>

                <p className="text-gray-600 mb-3 text-base">
                  Toy Info: {toyDetails}
                </p>
              </div>
              <div className="flex items-center gap-5 mt-3">
                <button className=" border border-rose-400 text-rose-500 hover:bg-rose-400 hover:text-white py-2 px-4 rounded-md duration-700">
                  Add to Cart
                </button>
                <button className="bg-rose-400 hover:bg-white hover:text-rose-400 border border-rose-400 text-white py-2 px-4 rounded-md duration-700">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <button
            className="bg-rose-400 text-white py-2 px-4 mt-4 rounded-md duration-300 hover:bg-rose-500"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </tr>
  );
};

export default ToyDetailsModal;

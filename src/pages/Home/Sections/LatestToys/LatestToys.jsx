import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { BsFillInfoSquareFill } from 'react-icons/bs';
import { useLocation, useNavigate } from "react-router-dom";
import ToyDetailsModal from "../../../AllToys/ToyDetailsModal";
import AOS from "aos";

const LatestToys = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [latestToys, setLatestToys] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedToy, setSelectedToy] = useState([]);

  useEffect(() => {
    fetch("https://figurio.vercel.app/latest-toys")
      .then((res) => res.json())
      .then((data) => {
        setLatestToys(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration for animations
      mirror: false, // Disable mirroring of animations on scroll
    });
  }, []);

  const handleOpenModal = (toy) => {
    if (user) {
      setSelectedToy(toy);
      setIsModalOpen(true);
    } else {
      Swal.fire("You Have To Login First!!!");
      // Redirect to "/login" when the button is clicked and user is not available
      navigate("/login", { state: { from: location }, replace: true });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="my-container mt-6">
      <>
        <h2 className="text-xl md:text-3xl lg:text-5xl  font-bold mb-3 text-center">
          Introducing Our Fresh Toy Collection
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Discover our exciting new selection of toys that cater to your
          child&apos;s age, interests, and developmental needs. We have
          carefully curated a range of safe, durable, and captivating toys that
          foster creativity, problem-solving skills, and physical activity.
        </p>
      </>
      <div 
      data-aos="fade-down"
      className="grid lg:grid-cols-3  sm:grid-cols-2 gap-5">
        {latestToys.map((toy) => (
          <div
          
            key={toy._id}
            className="card w-full my-2 bg-base-100 shadow-lg hover:shadow-xl"
          >
            <figure className="w-full max-h-4xl shadow">
              <img
                className="w-full h-auto "
                src={toy?.toyPhoto}
                alt={toy?.toyName}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{toy.toyName}</h2>
              <p className="text-rose-500 text-lg font-bold">
                Price: ${toy?.toyPrice}
              </p>
              <p className="text-gray-700">Toy Sub-Category: {toy?.toySubCategory}</p>
              <div className="card-actions justify-end ">
                 
                
                <BsFillInfoSquareFill 
                className="text-rose-400 text-xl hover:text-rose-500"
                onClick={() => handleOpenModal(toy)}/>
              </div>
            </div>
          </div>
        ))}
      </div>
       {/* Render the modal only when a selected toy is available */}
       {isModalOpen && selectedToy && (
        <ToyDetailsModal toy={selectedToy} closeModal={handleCloseModal} />
      )}
    </div>
  );
};

export default LatestToys;

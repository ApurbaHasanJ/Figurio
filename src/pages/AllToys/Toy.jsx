import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ToyDetailsModal from "./ToyDetailsModal";
import { AiOutlineEye } from "react-icons/ai";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Toy = ({ toy, index }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { toyName, toyPrice, toyQuantity, toySubCategory, sellerName } = toy;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (user) {
      setIsModalOpen(true);
    } else {
        Swal.fire('You Have To Login First!!!')
      // Redirect to "/login" when the button is clicked and user is not available
      navigate("/login", { state: { from: location }, replace: true });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{toyName}</td>
        <td>${toyPrice}</td>
        <td>{toyQuantity}</td>
        <td>{toySubCategory}</td>
        <td>{sellerName}</td>
        <td>
          <button
            onClick={handleOpenModal}
            className="border flex items-center gap-1 border-rose-400 text-rose-500 hover:bg-rose-400 hover:text-white py-2 px-4 rounded-md duration-700"
          >
            <span>View details</span>
            <AiOutlineEye className="text-2xl" />
          </button>
        </td>
      </tr>
      {isModalOpen && (
        <ToyDetailsModal toy={toy} closeModal={handleCloseModal} />
      )}
    </>
  );
};

export default Toy;

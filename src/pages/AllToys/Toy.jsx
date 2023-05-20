import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ToyDetailsModal from "./ToyDetailsModal";
import { BsFillInfoSquareFill } from "react-icons/bs";
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
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{toySubCategory}</td>
        <td>${toyPrice}</td>
        <td>{toyQuantity}</td>
        <td>
          
            
            <BsFillInfoSquareFill
            onClick={handleOpenModal}
            className="text-2xl text-rose-400" />
          
        </td>
      </tr>
      {isModalOpen && (
        <ToyDetailsModal toy={toy} closeModal={handleCloseModal} />
      )}
    </>
  );
};

export default Toy;

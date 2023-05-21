import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import Swal from "sweetalert2";
import { useState } from "react";
import UpdateToyInfo from "./UpdateToyInfo";

const MyToy = ({ toy, index, myToys, setMyToys, control, setControl }) => {
  const { _id, toyName, toyPrice, toyQuantity, toySubCategory } = toy;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteToy = (_id) => {
    Swal.fire({
      title: "Are you sure you want to delete this?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://figurio.vercel.app/my-toy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your toy has been deleted successfully.",
                "success"
              );
              const remainingToys = myToys.filter((toy) => toy._id !== _id);
              setMyToys(remainingToys);
            }
          });
      }
    });
  };

  const handleToyUpdate = (toy) => {
    console.log(toy);
    fetch(`https://figurio.vercel.app/my-toy/${toy?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Your Toy has been Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          }).then((res) => {
            if (res.isConfirmed) {
              setIsModalOpen(false);
              setControl(!control);
            }
          });
        }
      });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  //   const handleCloseModal = () => {
  //     setIsModalOpen(false);
  //   };

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{toyName}</td>
        <td>{toySubCategory}</td>
        <td>${toyPrice}</td>
        <td>{toyQuantity}</td>
        <td>
          <label htmlFor="my-modal-3">
            <BiEditAlt
              onClick={handleOpenModal}
              className="text-xl text-rose-400 cursor-pointer"
            />
          </label>
        </td>
        <td>
          <BsTrash
            onClick={() => handleDeleteToy(_id)}
            className="text-xl text-rose-400 cursor-pointer"
          />
        </td>
      </tr>
      {isModalOpen && (
        <UpdateToyInfo toy={toy} handleToyUpdate={handleToyUpdate} />
      )}
    </>
  );
};

export default MyToy;

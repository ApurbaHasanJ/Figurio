import {  useEffect, useState } from "react";
import { BsInfoSquareFill } from "react-icons/bs";
import Toy from "./Toy";
const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("https://figurio.vercel.app/all-toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  }, []);
  return (
    <div className="overflow-x-auto my-container">
      <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-3 text-center">
        Toy List
      </h2>
      <p className="text-gray-600 mb-6 text-center w-1/2 mx-auto">
        Explore our collection of amazing toys. Find the perfect toy for
        yourself or your loved ones. Browse through the list below and discover
        the joy of play.
      </p>
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub-Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>
              <BsInfoSquareFill className="text-xl" />
            </th>
          </tr>
        </thead>

        <tbody>
          {allToys.map((toy, index) => (
            <Toy key={toy._id} index={index} toy={toy} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;

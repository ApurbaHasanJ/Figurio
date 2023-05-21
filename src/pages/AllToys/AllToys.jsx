import { useEffect, useState } from "react";
import Toy from "./Toy";
import useTitle from "../../hooks/useTitle";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const AllToys = () => {
  useTitle("All Toys");
  const [allToys, setAllToys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://figurio.vercel.app/all-toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching toys:", error);
        setIsLoading(false);
      });
  }, []);

  const handleSearchToys = () => {
    fetch(`https://figurio.vercel.app/toysSearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        console.log(data);
        setSearchText("");
      })
      .catch((error) => {
        console.error("Error searching toys:", error);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchToys();
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

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

      <div className="flex gap-4 my-5 justify-center">
        <div className="form-control">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by name"
            onKeyDown={handleKeyPress}
            className="input input-bordered"
          />
        </div>
        <button onClick={handleSearchToys} className="btn">
          Search
        </button>
      </div>

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
            <th>View details</th>
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

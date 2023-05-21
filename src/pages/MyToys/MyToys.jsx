import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToy from "./MyToy";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle('My Toys')
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [control, setControl] = useState(false);
  const [sortBy, setSortBy] = useState("");
  


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://figurio.vercel.app/my-toys/${user?.email}?sortBy=${sortBy}`);
        const data = await response.json();
        setMyToys(data);
      } catch (error) {
        console.error("Error retrieving toys:", error);
      }
    };

    fetchData();
  }, [user, control, sortBy]);


  const handleSort = ()=> {
    if(sortBy === "asc"){
      setSortBy("desc");
    }
    else{
      setSortBy("asc");
    }
  }




  return (
    <div className="overflow-x-auto my-container">
      <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-3 text-center">
        My Toys
      </h2>
      <p className="text-gray-600 mb-6 text-center w-2/3 mx-auto">
        Manage your toy collection here. Edit or delete the toys you have added.
        Explore our collection of amazing toys and make any changes you desire.
        Take control of your toy collection and have fun!
      </p>
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Toy Name</th>
            <th>Sub-Category</th>
            <th>
              Price
              <button className="ml-2 text-rose-400" onClick={handleSort}>
                {sortBy === "asc" ? "▲" : "▼"}
              </button>
            </th>
            <th>Quantity</th>
            <th>Update Info</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {myToys.map((toy, index) => (
            <MyToy
              key={toy._id}
              index={index}
              toy={toy}
              myToys={myToys}
              setMyToys={setMyToys}
              setControl={setControl}
              control={control}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;

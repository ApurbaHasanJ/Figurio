import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [shopCategories, setShopCategories] = useState([]);
  const url = "https://figurio-apurbahasanj.vercel.app/categories";

  useEffect(() => {
    fetch(url)
      .then((result) => result.json())
      .then((shopCategories) => {
        setShopCategories(shopCategories);
      })
      .catch((error) => {
        console.error("Error fetching shop categories:", error);
      });
  }, [url]);

  console.log(shopCategories);

  return (
    <div className="my-container mt-12">
      <h2 className="text-3xl lg:text-5xl font-bold mb-3 text-center">
        Action Figure Toys
      </h2>
      <p className="text-gray-600 mb-4 text-center">
        <p className="text-gray-600 mb-4 text-center">
          Discover an incredible selection of action figure toys featuring your
          favorite characters. Immerse yourself in the world of these iconic
          franchises with meticulously crafted figures that capture the essence
          and excitement of each character&apos;s adventures.
        </p>
      </p>
      <Tabs className='drop-shadow-xl p-6'>
        <TabList className="flex space-x-4">
          {shopCategories.map((category) => (
            <Tab
              key={category._id}
              className="text-lg font-semibold text-gray-800 px-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer transition-colors"
            >
              {category.name}
            </Tab>
          ))}
        </TabList>
        {shopCategories.map((category) => (
          <TabPanel key={category._id} className="mt-5">
            <div className="grid grid-cols-1 grid-cols-2 md:grid-cols-3 gap-4">
              {category.toys.map((toy) => (
                <div
                  key={toy._id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-w-3 aspect-h-4 mb-4">
                    <img
                      src={toy.image}
                      alt={toy.name}
                      className="object-cover w-full h-full rounded-md"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{toy.name}</h3>
                  <p className="text-gray-700 mb-2">Price: {toy.price}</p>
                  <Link to={`/toys-details/${toy._id}`}>
                  <button
                    className="bg-rose-400 text-white py-2 px-4 mt-2 rounded-md hover:bg-rose-500 transition-colors"
                  >
                    View Details
                  </button>
                  </Link>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ShopByCategory;

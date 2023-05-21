import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

const AddAToy = () => {
  useTitle("Add A Toy");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddAToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyName = form.toyName.value;
    const toyPrice = form.toyPrice.value;
    const toyQuantity = form.toyQuantity.value;
    const toyPhoto = form.toyPhotoUrl.value;
    const toyRating = form.toyRating.value;
    const sellerName = form.sellerName.value;
    const toyDetails = form.toyDetails.value;
    const sellerEmail = form.sellerEmail.value;
    const toyCategory = form.toyCategory.value;
    const toySubCategory = form.toySubCategory.value;

    const newToy = {
      toyName,
      toyPrice,
      toyQuantity,
      toyPhoto,
      toyRating,
      sellerName,
      sellerEmail,
      toyCategory,
      toySubCategory,
      toyDetails,
    };
    // console.log(newToy);

    // insert data to the database
    fetch("https://figurio.vercel.app/all-toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          form.reset();
          // alert
          Swal.fire({
            title: "Success!",
            text: "Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="my-container">
      <div className="lg:p-16 lg:px-28 p-10  rounded-lg shadow-lg">
        {/* page header */}
        <div className="text-center">
          <h2 className="text-5xl text-slate-800">Add Your Toy</h2>
          <p className="text-gray-400 my-6 w-5/6 mx-auto">
            Welcome to the exciting world of toy collection! Add your favorite
            toys and expand your collection. This is the perfect place to
            showcase your toys. Join our community of toy enthusiasts and share
            your passion for collecting. Start adding your toys now and let the
            adventure begin!
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleAddAToy}>
          <div className="lg:flex grid gap-6">
            <div className="w-full">
              {/* toy name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Toy Name
                  </span>
                </label>
                <input
                  type="text"
                  required
                  name="toyName"
                  placeholder="Enter toy name"
                  className="input hover:shadow-md input-bordered p-4"
                />
              </div>
              {/* toy price */}
              <div className="form-control mt-3">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Price
                  </span>
                </label>
                <input
                  type="number"
                  required
                  name="toyPrice"
                  placeholder="How much?"
                  className="input hover:shadow-md input-bordered p-4"
                />
              </div>
              {/* toy quantity */}
              <div className="form-control mt-3">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Quantity
                  </span>
                </label>
                <input
                  type="number"
                  required
                  name="toyQuantity"
                  placeholder="How many?"
                  className="input hover:shadow-md input-bordered p-4"
                />
              </div>
              {/* toy rating */}
              <div className="form-control mt-3">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Ratings
                  </span>
                </label>
                <input
                  type="number"
                  required
                  name="toyRating"
                  placeholder="Toy rating"
                  className="input hover:shadow-md input-bordered p-4"
                />
              </div>
            </div>
            {/* seller name */}
            <div className="w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Your Name
                  </span>
                </label>
                <input
                  type="text"
                  readOnly
                  name="sellerName"
                  placeholder="Enter your name"
                  value={user?.displayName}
                  className="input hover:shadow-md input-bordered p-4"
                />
              </div>
              {/* seller email */}
              <div className="form-control mt-3">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Your Email
                  </span>
                </label>
                <input
                  type="email"
                  readOnly
                  name="sellerEmail"
                  placeholder="Enter your email address"
                  value={user?.email}
                  className="input hover:shadow-md input-bordered p-4"
                />
              </div>
              {/* toy category */}
              <div className="form-control mt-3 h-[93px]">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Toy Category
                  </span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    required
                    name="toyCategory"
                    value="Action Figure Toy"
                    className="h-5 w-5 border border-gray-300 rounded-full checked:bg-gray-500 checked:border-transparent checked:ring-gray-500 focus:outline-none"
                  />
                  <span className="radio-mark"></span>
                  Action Figure Toy
                </label>
              </div>
              {/* toy sub-category */}
              <div className="form-control mt-3 w-full">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Toy Sub-Category
                  </span>
                </label>
                <select
                  className="select select-disabled w-full"
                  required
                  name="toySubCategory"
                  defaultValue=""
                >
                  <option disabled value="">
                    Choose a sub-category
                  </option>
                  <option value="Avengers">Avengers</option>
                  <option value="DC">DC</option>
                  <option value="Star Wars">Star Wars</option>
                  <option value="Transformers">Transformers</option>
                </select>
              </div>
            </div>
          </div>
          {/* toy photo url */}
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text text-lg font-semibold">Photo</span>
            </label>
            <input
              type="text"
              required
              name="toyPhotoUrl"
              placeholder="Enter photo URL"
              className="input hover:shadow-md input-bordered p-4"
            />
          </div>
          {/* all about the toy */}
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Toy Details
              </span>
            </label>
            <textarea
              required
              name="toyDetails"
              placeholder="Enter toy details"
              className="textarea hover:shadow-md textarea-bordered p-4"
            ></textarea>
          </div>

          <div className="form-control mt-8">
            <input
              type="submit"
              value="Add This"
              className="input hover:shadow-md bg-rose-300 hover:bg-rose-400 text-white hover:border-3 text-xl font-medium"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAToy;

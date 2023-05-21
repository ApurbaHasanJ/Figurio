

const UpdateToyInfo = ({ toy, handleToyUpdate }) => {
  const { toyPrice, toyName, toyQuantity, toyDetails, _id } = toy;
  console.log(toy);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyPrice = form.toyPrice.value;
    const toyQuantity = form.toyQuantity.value;
    const toyDetails = form.toyDetails.value;
    const _id = form.toyId.value;
  
    const updatedToy = {
      _id,
      toyPrice,
      toyQuantity,
      toyDetails,

    };
  
    handleToyUpdate(updatedToy);
  };

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative lg:max-w-2xl">
          <label
            htmlFor="my-modal-3"
            className=" sm:text-lg text-rose-500 bg-rose-100 hover:bg-rose-400 hover:text-white sm:p-4 p-3 flex justify-center items-center rounded-full duration-700 sm:h-4 sm:w-4 w-2 h-2 absolute right-3 top-3"
          >
            ✕
          </label>
          <h2 className="lg:text-3xl text-lg font-bold mb-1">{toyName} Toy</h2>
          <form onSubmit={handleUpdate}>
            <div className="flex gap-3">
              {/* toy price */}
              <div className="form-control w-full mt-3">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Price
                  </span>
                </label>
                <input
                  type="number"
                  
                  name="toyPrice"
                  defaultValue={toyPrice}
                  placeholder="How much?"
                  className="input w-full hover:shadow-md input-bordered p-4"
                />
              </div>
              {/* toy quantity */}
              <div className="form-control w-full mt-3">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Quantity
                  </span>
                </label>
                <input
                  type="number"
                  
                  name="toyQuantity"
                  defaultValue={toyQuantity}
                  placeholder="How many?"
                  className="input w-full hover:shadow-md input-bordered p-4"
                />
              </div>
              {/* toy Id */}
              <div className="form-control w-full hidden mt-3">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Toy Id
                  </span>
                </label>
                <input
                  type="text"
                  readOnly
                  name="toyId"
                  value={_id}
                  placeholder="Toy Id"
                  className="input w-full hover:shadow-md input-bordered p-4"
                />
              </div>
            </div>
            {/* all about the toy */}
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Toy Details
                </span>
              </label>
              <textarea
                
                name="toyDetails"
                defaultValue={toyDetails}
                placeholder="Enter toy details"
                className="textarea w-full hover:shadow-md textarea-bordered p-4"
              ></textarea>
            </div>

            <div className="form-control mt-8">
              <input
                type="submit"
                value="Update now"
                className="input hover:shadow-md bg-rose-300 hover:bg-rose-400 text-white hover:border-3 text-xl font-medium"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateToyInfo;

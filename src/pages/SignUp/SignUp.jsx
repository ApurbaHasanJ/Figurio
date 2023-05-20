import Lottie from "lottie-react";
import Signup from "../../assets/login.json";
import { toast } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  useTitle("SignUp");
  const { createUser, userProfile, continueWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  // get redirect path
  const path = location?.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    createUser(email, password)
      .then((result) => {
        userProfile(name, photo);
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("Sign Up Successfully");
        navigate(path, { replace: true });
        form.reset();
        // console.log(loggedUser);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message.split("auth/")[1].slice(0, -2));
      });
  };

  //   continue with Google
  const googleSignIn = () => {
    continueWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Sign in Successfully");
        console.log(loggedUser);
        navigate(path, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="my-container">
      <h3 className="text-xl lg:text-4xl md:text-2xl text-slate-900 text-center font-bold border-b pb-5 mb-5">
        Sign Up your account
      </h3>
      <div className=" grid lg:grid-cols-2 my-7 mt-0 lg:my-16 items-center">
        {/* Lottie Animation */}
        <div className="w-full ">
          <Lottie animationData={Signup} loop={true} />
        </div>
        <div className="  border-2 p-10 mx-3 lg:mx-0 rounded-lg shadow-lg">
          <form onSubmit={handleSignUp}>
            <div className="form-control mb-3">
              <label className="label text-base font-medium text-slate-900 ">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="input hover:shadow-md input-bordered"
              />
            </div>
            <div className="form-control mb-3">
              <label className="label text-base font-medium text-slate-900 ">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Enter photo url"
                className="input hover:shadow-md input-bordered"
              />
            </div>
            <div className="form-control mb-3">
              <label className="label text-base font-medium text-slate-900 ">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="input hover:shadow-md input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label text-base font-medium text-slate-900 ">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? "text" : "password"}
                id="password"
                name="password"
                className="input hover:shadow-md input-bordered"
                required
                placeholder="Password"
              />
            </div>
            <div className="form-control  my-3">
              <div className="flex items-center  mb-6">
                <input
                  id="showPassword"
                  type="checkbox"
                  value={show}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300  "
                  onChange={(e) => setShow(e.target.checked)}
                />
                <label
                  htmlFor="showPassword"
                  className="ml-2 text-base font-medium text-slate-900 "
                >
                  Show password
                </label>
              </div>
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary rounded-xl"
              />
            </div>
          </form>
          <h6 className="text-center my-4">
            Don&apos;t have an account?{" "}
            <Link to="/login">
              <span className="text-rose-500 hover:text-orange-500 font-semibold hover:underline">
                Sign In
              </span>
            </Link>
          </h6>
          <div className="flex justify-center items-center gap-5">
            <div className="border-b h-1 w-full border-gray-300"></div>
            <span className="text-xl">or</span>
            <div className="border-b h-1 w-full border-gray-300"></div>
          </div>
          <div className="form-control  mt-4">
            <button
              onClick={googleSignIn}
              className=" w-full flex gap-3 btn-sec"
            >
              <img
                className="w-7 h-7"
                src="https://i.postimg.cc/4NhHcV5v/google.png"
                alt=""
              />
              <span className="capitalize ">Continue With Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

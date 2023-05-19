import Lottie from "lottie-react";
import login from "../../assets/login.json";
import useTitle from "../../hooks/useTitle";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  useTitle("Login");
  const { continueWithGoogle, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);

  // get redirect path
  const from = location.state?.from?.pathname || "/";

  // Continue with Google
  const googleSignIn = () => {
    continueWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Sign in Successfully");
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // handle login
  const handleLogin = (event) => {
    event.preventDefault();
    const htmlForm = event.target;
    const email = htmlForm.email.value;
    const password = htmlForm.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        toast.success("Sign in Successfully")
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message.split("auth/")[1].slice(0, -2));
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-container">
      <h3 className="text-xl lg:text-4xl md:text-2xl text-slate-900 text-center font-bold border-b pb-5 mb-5">
        Sign In your account
      </h3>
      <div className=" grid lg:grid-cols-2  my-7 mt-0 lg:my-16 items-center">
        {/* Lottie Animation */}
        <div className="w-full ">
          <Lottie animationData={login} loop={true} />
        </div>
        <div className="  border-2 p-10 mx-3 lg:mx-0 rounded-lg shadow-lg">
          <form onSubmit={handleLogin}>
            <div className="form-control mb-3">
              <label className="label text-base font-medium text-slate-900 ">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="input input-bordered"
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
                className="input input-bordered"
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
                value="Sign in"
                className="btn btn-primary rounded-xl"
              />
            </div>
          </form>
          <h6 className="text-center my-4">
            Don&apos;t have an account?{" "}
            <Link to="/signup" state={location.state}>
              <span className="text-rose-500 hover:text-orange-500 font-semibold hover:underline">
                Sign Up
              </span>
            </Link>
          </h6>
          <div className="flex justify-center items-center gap-5">
            <div className="border-b h-1 w-full border-gray-300"></div>
            <span className="text-xl">or</span>
            <div className="border-b h-1 w-full border-gray-300"></div>
          </div>
          <div className="form-control  mt-4">
            <button onClick={googleSignIn} className=" w-full btn">
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

export default Login;

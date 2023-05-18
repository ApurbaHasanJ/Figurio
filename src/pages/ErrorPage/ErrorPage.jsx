
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl ">
            <img src="https://i.postimg.cc/SRbZdY2D/2202-w020-n001-1264a-p30-1264.jpg" alt="" />
          </h2>
          <p className="text-2xl text-rose-400 drop-shadow-xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded drop-shadow-xl bg-rose-300 hover:bg-rose-400 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
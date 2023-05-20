import { BallTriangle } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="my-container flex justify-center items-center min-h-[calc(100vh-120px)]">
      <BallTriangle
        height={150}
        width={150}
        radius={5}
        color="#FB7185"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default LoadingSpinner;

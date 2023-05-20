import { BallTriangle } from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <BallTriangle
      height={200}
      width={200}
      radius={5}
      color="#fda4af"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
    />
  );
};

export default LoaderSpinner;

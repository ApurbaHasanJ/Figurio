import { useEffect } from "react";
import useTitle from "../../hooks/useTitle";
import Banners from "./Sections/Banners/Banners";



const Home = () => {
    useTitle('Home')



    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);



    return (
        <div >
            <Banners/>
        </div>
    );
};

export default Home;
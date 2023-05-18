import { useEffect } from "react";
import useTitle from "../../hooks/useTitle";
import Banners from "./Sections/Banners/Banners";
import Gallery from "./Sections/Gallery/Gallery";
import ShopByCategory from "./Sections/ShopByCategory/ShopByCategory";



const Home = () => {
    useTitle('Home')



    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);



    return (
        <div >
            <Banners/>
            <Gallery/>
            <ShopByCategory/>
        </div>
    );
};

export default Home;
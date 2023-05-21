import { useEffect } from "react";
import useTitle from "../../hooks/useTitle";
import Banners from "./Sections/Banners/Banners";
import Gallery from "./Sections/Gallery/Gallery";
import ShopByCategory from "./Sections/ShopByCategory/ShopByCategory";
import Tips from "./Sections/tipsForChoosing/Tips";
import LatestToys from "./Sections/LatestToys/LatestToys";

const Home = () => {
  useTitle("Home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* header banner */}
      <Banners />

      {/* gallery section Real Character Showcases */}
      <Gallery />

      {/* Action Figure Toys shop by category section */}
      <ShopByCategory />

      {/* our latest toys section */}
      <LatestToys/>

      {/* Tips for choosing toys for children section */}
      <Tips />
    </div>
  );
};

export default Home;

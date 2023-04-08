import Banner from "./components/Banner/Banner";
import FeatureProduct from "./components/FeatureProduct";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Trusted from "./components/Trusted";

const Home = () => {
  // const data = {
  //   name: "Gift store",
  // };

  return (
    <>
      <Banner />
      <FeatureProduct />
      <Services />
      <Testimonials />
      <Trusted />
    </>
  );
};

export default Home;

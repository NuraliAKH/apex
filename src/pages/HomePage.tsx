import ApexAboutContainer from "../features/home/containers/AboutContainer";
import { HeroSlider } from "../features/home/containers/MainContainer";
import ProductRecommendationsContainer from "../features/home/containers/RecomendedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <ProductRecommendationsContainer />
      <ApexAboutContainer />
    </div>
  );
};

export default HomePage;

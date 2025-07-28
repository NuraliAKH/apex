import ApexAboutContainer from "../features/home/containers/AboutContainer";
import { HeroSlider } from "../features/home/containers/MainContainer";
import { NewsContainer } from "../features/home/containers/NewsContainer";
import ProductRecommendationsContainer from "../features/home/containers/RecomendedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <ProductRecommendationsContainer />
      <ApexAboutContainer />
      <NewsContainer />
    </div>
  );
};

export default HomePage;

import { HeroSlider } from "../features/home/containers/MainContainer";
import ProductRecommendationsContainer from "../features/home/containers/RecomendedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <ProductRecommendationsContainer />
    </div>
  );
};

export default HomePage;

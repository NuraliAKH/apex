import BackgroundContainer from "../features/home/containers/MainContainer";
import ProductRecommendationsContainer from "../features/home/containers/RecomendedProducts";

const HomePage = () => {
  return (
    <div>
      <BackgroundContainer />
      <ProductRecommendationsContainer />
    </div>
  );
};

export default HomePage;

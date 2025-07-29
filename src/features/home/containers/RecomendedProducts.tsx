import React from "react";
import RecomendedProductCard from "../components/RecomendedProductCard";
import { mockCards } from "../data/Recomended";
import CustomSwitch from "../../../components/CustomSwitch";
import styles from "./ProductRecommendationsContainer.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { useMediaQuery } from "react-responsive";

const ProductRecommendationsContainer: React.FC = () => {
  const [isPrivate, setIsPrivate] = React.useState(false);
  const isMobile = useMediaQuery({ maxWidth: 479 });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleBlock}>
          <h2 style={{ margin: 0, fontSize: 18 }}>Рекомендуемые продукты</h2>
          <div className={styles.switchContainer}>
            <span style={{ marginRight: 8 }}>Частным лицам</span>
            <CustomSwitch onChange={setIsPrivate} value={isPrivate} />
          </div>
          <button className={styles.linkButton}>Все продукты →</button>
        </div>
      </div>

      {isMobile ? (
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={12}
          pagination={{ clickable: true }}
          style={{ paddingBottom: 24 }}
          observer={true}
          observeParents={true}
        >
          {mockCards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className={styles.cardWrapper}>
                <RecomendedProductCard data={card} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={styles.cardsGrid}>
          {mockCards.map((card, index) => (
            <RecomendedProductCard key={index} data={card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductRecommendationsContainer;

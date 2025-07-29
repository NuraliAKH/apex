import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./HeroSlider.module.css";

const slides = [
  {
    image: "/home/first.jpg",
    title: "Оформите ОСГО ВТС онлайн",
    subtitle: "Страхование ответственности",
    description: "И получите ссылку на E-polis по смс",
  },
  {
    image: "/home/first.jpg",
    title: "Оформите КАСКО выгодно",
    subtitle: "Защита вашего автомобиля",
    description: "Сравните предложения и выберите лучшее",
  },
  {
    image: "/home/first.jpg",
    title: "Застрахуйте жильё",
    subtitle: "Надежность и спокойствие",
    description: "Оформление за 2 минуты онлайн",
  },
];

export const HeroSlider = () => {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper pagination={{ clickable: true }} modules={[Pagination]} loop>
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.slide}>
              <img src={slide.image} alt={slide.title} className={styles.slideImage} />
              <div className={styles.overlay} />
              <div className={styles.content}>
                <p className={styles.subtitle}>{slide.subtitle}</p>
                <h2 className={styles.title}>{slide.title}</h2>
                <p className={styles.description}>{slide.description}</p>
                <button className={styles.button}>Подробнее →</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export interface NewsItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  hashtag?: string;
  details?: string;
  stats?: {
    apex: string;
    my: string;
    kafolat: string;
  };
  link?: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "САМАЯ СВЕЖАЯ #1",
    subtitle: "APEX INSURANCE поддерживает сборную Узбекистана по дзюдо на Олимпийских играх в Париже",
    image: "/news/first.jpg",
  },
  {
    id: 2,
    title: "САМАЯ СВЕЖАЯ #2",
    subtitle: "Лидирующие страховые компании по объему собранных страховых премий за 1 квартал 2024 года",
    image: "/news/second.jpg",
    details:
      "Лидирующие страховые компании по объему собранных страховых премий за I квартал 2024 года По данным Национального агентства перспективных проектов Республики Узбекистан, по итогам I квартала 2024 года APEX INSURANCE снова стал лидером отечественного страхового рынка по совокупному объему собранных страховых премий. Сборы APEX INSURANCE составили 903,5 млрд сум (рост на 225,9%), выплаты - 216,0 млрд сум (рост на 302,5%).Подробнее: https://napp.uz/uz/pages/statistics-and-analysis-for-im",
  },
];

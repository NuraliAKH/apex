import "./news.css";
import { newsData } from "../data/News";
import { NewsCard } from "../components/NewsCard";
import { useMediaQuery } from "react-responsive";

export const NewsContainer = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });

  const dataToRender = isMobile ? newsData.slice(0, 1) : newsData;

  return (
    <div style={{ marginTop: "40px", gap: "15px", display: "flex", flexDirection: "column" }}>
      <h3>Новости</h3>
      <div className="news-container">
        {dataToRender.map((item: any) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

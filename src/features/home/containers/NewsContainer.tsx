import "./news.css";
import { newsData } from "../data/News";
import { NewsCard } from "../components/NewsCard";

export const NewsContainer = () => {
  return (
    <div style={{ marginTop: "40px", gap: "15px", display: "flex", flexDirection: "column" }}>
      <h3>Новости</h3>
      <div className="news-container">
        {newsData.map((item: any) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

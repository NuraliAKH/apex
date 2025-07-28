import { useState } from "react";
import { NewsItem } from "../data/News";

interface Props {
  item: NewsItem;
}

export const NewsCard = ({ item }: Props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="news-card">
      {isActive ? (
        <div>
          <div className="news-title">{item.title}</div>
          <div className="news-subtitle">{item.subtitle}</div>
          {item.image && <img src={item.image} alt={item.title} className="news-image" />}
          {item.hashtag && <div className="hashtag">{item.hashtag}</div>}
          <button className="toggle-details" onClick={() => setIsActive(!isActive)}>
            {isActive ? "Скрыть детали" : "Показать детали"}
          </button>
          <div className="news-details">
            <p>{item.details}</p>
          </div>
        </div>
      ) : (
        <div>
          <div className="news-title">{item.title}</div>
          <div className="news-subtitle">{item.subtitle}</div>
          {item.image && <img src={item.image} alt={item.title} className="news-image" />}
          {item.hashtag && <div className="hashtag">{item.hashtag}</div>}
          <button className="toggle-details" onClick={() => setIsActive(!isActive)}>
            {isActive ? "Скрыть детали" : "Показать детали"}
          </button>
        </div>
      )}
    </div>
  );
};

import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((response) => {
        console.log("Response status:", response.status); // Log status
        return response.json(); // Process response
      })
      .then((data) => {
        console.log("API response:", data); // Log the entire response data
        if (data.articles) {
          setArticles(data.articles); // Set articles only if available
        } else {
          console.warn("No articles found.");
        }
      })
      .catch((error) => console.error("Error fetching articles:", error));
  }, [category]);

  return (
    <div className="container">
      <h2 className="text-center">
        Latest <span className="text-danger">News</span>
      </h2>
      <div className="row">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-3" key={index}>
              <NewsItem
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))
        ) : (
          <p className="text-center">No articles available.</p>
        )}
      </div>
    </div>
  );
}

export default NewsBoard;

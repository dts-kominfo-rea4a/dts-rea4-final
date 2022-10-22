import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NewsList from "../components/news/NewsList";
import { getNews } from "../network/lib/news";
function DashboardPage() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const news = await getNews();
      setNews(news);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <NewsList data={news} />
    </Container>
  );
}

export default DashboardPage;

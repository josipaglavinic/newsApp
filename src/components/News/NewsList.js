import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import LatestNews from '../latestNews/LatestNews';
import LatestNewsIcon from '../../icons/latest.svg';
import '../styles/newsList.scss';
import '../styles/latestNews.scss';

const NewsList = ({ data, search }) => {
    const [latestNews, setLatestNews] = useState([]);
    const [featuredClicked, setFeaturedClicked] = useState(true);
    const [latestClicked, setIsLatestClicked] = useState(false);

    const handleFeaturedClicked = () => {
        setFeaturedClicked(true);
        setIsLatestClicked(false);
    };

    const handleLatestClicked = () => {
        setFeaturedClicked(false);
        setIsLatestClicked(true);
    }

    useEffect(() => {

        const getNews = async () => {
            const res = await axios.get(
                'https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=311fcef957a14882a1be2e9afc7fff62');
            console.log(res);
            setLatestNews(res.data.articles)
        };
        getNews();
    }, []);



    return (
        <div className="news_container">
            <div className="title"> <h3>News</h3></div>
            <div className="mobile_buttons">
                <button
                    className="mobile_button"
                    onClick={handleFeaturedClicked}
                >Feature</button>
                <button
                    className="mobile_button"
                    onClick={handleLatestClicked}
                >Latest</button>
            </div>


            <div className="article_container">
                <div className={latestClicked ? "latest_news_mobile" : "hide_latest"}>
                    <div className="latest_news_header"> <img src={LatestNewsIcon} alt="latestNews" classname="latest_news_icon" />Latest News</div>
                    {latestNews.map((latestNews) => {
                        return <LatestNews latestNews={latestNews}
                            key={latestNews.title} />
                    })}
                </div>
                <div className="latest_news">
                    <div className="latest_news_header"> <img src={LatestNewsIcon} alt="latestNews" classname="latest_news_icon" />Latest News</div>
                    {latestNews.map((latestNews) => {
                        return <LatestNews latestNews={latestNews}
                            key={latestNews.title} />
                    })}
                </div>
                <div className={featuredClicked ? "news_list" : "hide_featured"}>

                    {data
                        .filter((article) => {
                            if (article.title.toLowerCase().includes(search.toLowerCase())) {
                                return article;
                            }
                            else if (search === "") {
                                return article;
                            }
                            return null;

                        })

                        .map((article) => {
                            return (
                                <div className="news_item_display"
                                    key={article.title}>
                                    <NewsItem
                                        className="new_item"
                                        article={article}
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>


    );
}

export default NewsList;

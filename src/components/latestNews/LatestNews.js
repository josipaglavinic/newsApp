
import '../styles/newsList.scss';

const LatestNews = ({ latestNews }) => {
    return (
        <div className="latest_news_1">
            
                <div className="latest_news_list">
                    <div className="time">{latestNews.publishedAt.slice(11, 16)}</div>
                    <div className="latestNews_title">{latestNews.title}</div>
                </div>

            
        </div>
    )
}

export default LatestNews;

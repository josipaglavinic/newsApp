import React from 'react';
import '../styles/newsItem.scss';
;

const NewsItem = ({ article }) => {


    return (
        <div className="card_container">
            <ul key={article.source.id}>
                {article.urlToImage ? (
                    <img
                        src={article.urlToImage}
                        alt="New"
                        className="news_image"
                    />) : <div className="no_image">No image</div>
                }

                <div className="article_info">

                    <a
                        href={article.url}
                        className="article_title"
                    >
                        {article.title}
                    </a>

                    <div className="article_author">{article.author ? (
                        <span>{article.author} </span>) : (<span>Authon unknown</span>)
                    }</div>
                </div>


            </ul>
        </div>
    )
}

export default NewsItem;

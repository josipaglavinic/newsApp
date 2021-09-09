import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import NewsList from "./components/News/NewsList";
import Search from "./components/Search";
import Navigation from "./components/Navigation";
import './components/styles/main.scss';
import MobileNavigation from "./components/MobileNavigation";

function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [querry, setQuerry] = useState('');
  const [category, setCategory] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  }

  useEffect(() => {

    const getArticles = async () => {
      const res = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us' + category + '&apiKey=311fcef957a14882a1be2e9afc7fff62');
      console.log(res);
      setData(res.data.articles)
    };
    getArticles();
  }, [querry, category]);


  return (
    <div className="main">
      <Header />
      <div className="content">
        <Search
          search={search}
          setQuerry={setQuerry}
          setSearch={setSearch}
          data={data}
          handleMenu={handleMenu}
        />
        <div className="wrapper">
          {showMenu && <MobileNavigation />}
          <Navigation
            category={category}
            setCategory={setCategory}
          />
          <div className={showMenu ? "hide_news" : ""}>
            <NewsList
              category={category}
              data={data}
              search={search}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navber from "../Shared/Navber/Navber";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrakingNews from "./BrakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
  const news=useLoaderData()
  console.log(news);
  return (
    <div className="text-center">
      <Header></Header>
      <BrakingNews></BrakingNews>
      <Navber></Navber>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-5 ">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2 ">
          {
            news.map(aNews=><NewsCard key={aNews.id}
            news={aNews}
            ></NewsCard>)
          }
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
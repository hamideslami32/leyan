/* eslint-disable @next/next/no-img-element */
import BestSellers from "@/components/pages/home/best-sellers/BestSellers";
import Categories from "@/components/pages/home/categories/Categories";
import PopularCards from "@/components/pages/home/popular-cards/PopularCards";

const Home = () => {
  return <div className="w-full max-w-screen-xl mx-auto">
    <div className="h-[400px] my-6 bg-blue-200 rounded-lg">
      <img src="/images/home/banner.png" alt="banner" className="rounded-lg"  />
    </div>
    <PopularCards />
    <Categories />
    <BestSellers />
  </div>
};

export default Home;

import React from "react";
import CategoryList from "../../components/category-list/category-list.component";
import Hero from "../../components/hero/hero.component";

const HomePage = () => {
  return (
    <div className="home">
      <Hero />
      <main className="home__main">
        <div className="wrapper">
          <CategoryList />
        </div>
      </main>
    </div>
  );
};

export default HomePage;

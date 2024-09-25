import React from "react";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="container">
      <div className="HomeBanner-container" />
      <div className="homebnr">
        <h2>La Ibense Cafe</h2>
        <h1>Enjoy the Best Shisha in Dubai</h1>
        <p>
          Welcome to La Ibense Cafe, a premier shisha lounge and coffee shop in
          Dubai. Immerse yourself in an exotic fusion of cultures and flavors!
        </p>
        <button className="bannerBtn">View Menu</button>
      </div>
    </div>
  );
};

export default HomeBanner;

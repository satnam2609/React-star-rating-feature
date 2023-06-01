import React from "react";
import StarRating from "../components/StarRating";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <p className="text-7xl font-extrabold font-serif text-[#121212]">
        Star rating system
      </p>

      <StarRating />
    </div>
  );
};

export default Home;

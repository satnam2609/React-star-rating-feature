import React, { useState, useEffect } from "react";
import { getProducts, getRatings, giveRating } from "../functions/product";
import { useDispatch, useSelector } from "react-redux";
import StarRatings from "react-star-ratings";

const StarRating = () => {
  const [products, setProducts] = useState([]);
  const [star, setStar] = useState(0);

  const { user } = useSelector((state) => state.User);
  useEffect(() => {
    loadAllProducts();
    console.log("user redux", user.token);
  }, []);

  const loadAllProducts = () => {
    getProducts()
      .then((res) => {
        console.log("All products --->", res.data);
        setProducts(res.data);
        res.data.map((prod) => {
          prod.rating.map((ele) => {
            setStar(ele.star);
          });
        });
      })
      .catch((err) => console.log("All products err", err));
  };

  const handleStarChange = (rate) => {
    setStar(rate);
  };

  const loadRatingsByUser = (productId) => {
    getRatings(productId, user.token).then((res) => {
      console.log("res ratings", res.data);
      setStar(res.data[0]);
    });
  };

  return (
    <div className="block">
      <p className="text-[#121122] text-6xl mt-5 font-medium w-full">
        Products
      </p>

      <div className="flex flex-row items-center justify-center  gap-5 mt-3 w-full">
        {/* show the cards of products */}
        {products.length > 0 &&
          products.map((product) => {
            return (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("submitted");
                  giveRating(user.token, star, product._id)
                    .then((res) => {
                      console.log("user rating added or updated", res.data);
                    })
                    .then(() => loadRatingsByUser(product._id));
                }}
                className="card  bg-[#121212] flex flex-wrap flex-col justify-between items-center w-[35vw]"
                key={product._id}
              >
                <p className="text-slate-50 text-xl font-normal text-center">
                  {product.name}
                </p>

                {/* show star rating */}
                <StarRatings
                  rating={star}
                  starRatedColor="blue"
                  changeRating={(rate) => handleStarChange(rate)}
                  numberOfStars={6}
                  name="rating"
                  starHoverColor="blue"
                />

                <button
                  type="submit"
                  className="p-2 mt-3 rounded-lg text-[#121122] font-medium bg-[#ded5d5] hover:transition-all   mb-1 hover:text-slate-50 hover:bg-[#121212]"
                >
                  Add your rating
                </button>
              </form>
            );
          })}
      </div>
    </div>
  );
};

export default StarRating;

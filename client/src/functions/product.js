import axios from "axios";

export const giveRating = async (token, star, productId) => {
  return await axios.put(
    "http://localhost:5000/api/v1/product/rating",
    {
      star,
      productId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getProducts = async () => {
  return await axios.get("http://localhost:5000/api/v1/products");
};

export const getRatings = async (productId, token) => {
  console.log(token);
  return await axios.put(
    "http://localhost:5000/api/v1/product/star",
    { productId: productId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

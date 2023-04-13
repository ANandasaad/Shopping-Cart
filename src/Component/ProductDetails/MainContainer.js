import React, { useEffect, useState } from "react";
import Product from "./Products";
import { PRODUCT_API } from "../../utils/contants";
import Shimmer from "./Shimmer";
import { filterProduct } from "../../utils/filterData";

const MainContainer = () => {
  const [product, setProduct] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState("");

  async function getData() {
    const response = await fetch(PRODUCT_API);
    const data = await response.json();
    console.log(data);
    setProduct(data);
    setFilterData(data);
  }
  useEffect(() => {
    getData();
  }, []);

  // if (filterData?.length == 0)
  //   return (
  //     <div className="flex flex-col justify-center items-center ">
  //       <img  className="w-96 my-10" src="data:image/png;base64,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" />
  //       <button className="bg-red-600 rounded-lg px-5 py-2" onClick={() => window.location.reload(false)}>Go Back</button>
  //     </div>
  //   );
  

  return product.length > 0 ? (
    <>
      <div className="my-4 mx-4">
        <input
          type="text"
          placeholder="search.."
          className="w-96 py-2 rounded-md px-1 border border-gray-100 shadow-sm max-mobile:w-48 "
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);

            const data = filterProduct(query, product);
            setFilterData(data);
          }}
        />
        <button
          className="py-2 px-2 mx-2 bg-blue-400 rounded-md max-mobile:text-[12px]"
          onClick={() => {
            const data = filterProduct(query, product);
            setFilterData(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="w-full m-5">
        <Product product={filterData} />
      </div>
    </>
  ) : (
    <Shimmer />
  );
};

export default MainContainer;

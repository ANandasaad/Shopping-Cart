import React, { useEffect, useState } from "react";
import { PRODUCT_API } from "../../utils/contants";
import ButtonCategory from "./ButtonCategory";
import CategoryProduct from "./CategoryProduct";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  async function getCategory() {
    
      const data = await fetch(PRODUCT_API + "/categories");
      const json = await data.json();
      console.log(json);
      setCategory(json);
   
   
  }

  return (
    <>
      <div className="max-mobile:overflow-x-scroll w-full">
        <ButtonCategory category={category} />
      </div>
      <div>

        <CategoryProduct />
      </div>
    </>
  );
};

export default Category;

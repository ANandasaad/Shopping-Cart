import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../utils/categorySlice";

const ButtonCategory = ({ category }) => {
  console.log(category);
  const dispatch = useDispatch();
  return (
    <div className="max-mobile:flex ">
      {category.map((button) => (
        <button key ={button}
          className="px-10 py-2 mx-2 my-2 rounded-lg bg-yellow-300 text-[15px]"
          onClick={() =>dispatch(setCategory(button))
          }
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonCategory;

import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import React from "react";
import Body from "./Component/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Component/ProductDetails/MainContainer";
import ProductPage from "./Component/ProductDetails/ProductPage";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element:<MainContainer/>
        },
        {
          path:'/product/:id',
          element:<ProductPage/>
        }
      ],
    },
  ]);

  return (
    <div>
    <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

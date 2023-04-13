import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import React from "react";
import Body from "./Component/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Component/ProductDetails/MainContainer";
import ProductPage from "./Component/ProductDetails/ProductPage";
import Cart from "./Component/Cart/Cart";
import Category from "./Component/Categories/Category";
import { Provider } from "react-redux";
import store from "./utils/store";
import About from "./Component/About";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement:<Error/>,
      children: [
        {
          path: "/",
          element:<MainContainer/>
        },
        {
          path:'/product/:id',
          element:<ProductPage/>
        },{
          path:'/cart',
          element:<Cart/>
        },{
          path:'/category',
          element:<Category/>,
        
        }
        ,{
          path:'/about',
          element:<About/>
        }
      ],
    },
  ]);

  return (
    <div>
      <Provider store={store}>
    <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

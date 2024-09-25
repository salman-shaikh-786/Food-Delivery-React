import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Body from "./Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./about";
import ContactUs from "./ContactUs";
import Error from "./Error";
import RestaurantManu from "./RestaurantManu";
import {lazy,Suspense} from "react";



// ---heading ----

// const heading = React.createElement("h1",{},"hellow world");
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);

// -----hoe create nested tags in react---

// const parent = React.createElement("div","id:parent", React.createElement("div","id:child",
//    [React.createElement("h1",{},"this is nested h1 tag"),React.createElement("h2",{},"this is nested h2 tag")]
// ));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// ----ep-3 React
// const heading= React.createElement("h1",{"id: h1"},"salman shaikh react");

// const jsxheading = <h1 id="heading">salman shaikh jsx</h1>;

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading);

// react fnctional component
// const Title = ()=>{
//     return <h1>this is title</h1>
// };

// const HeadingComponent= ()=>{
//      return  <div><Title/><h1>hello react functional component</h1></div>
// };

/*
*-heading
logo
navbar
-body
serchbar
container
cards
-footer
copyright
address
contact

*
*
*
*
*
*/



const Grocery = lazy(()=>import("./grocery"));

const Applayout = () => {
  return (
    <div className="app">
      <Header />

      <Outlet/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRounter= createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    errorElement:<Error/>,
    children:
    [ {
      path:"/",
      element:<Body/>,
    },
    {
path:"/home",
element:<Body/>,
    },
      {
      path:"/about",
      element:<About/>,
        },
        {
          path:"/contactus",
          element:<ContactUs/>,
        },
      {
        path:"/restaurant/:resId",
        element:<RestaurantManu/>,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>loading</h1>}><Grocery/></Suspense>,
      }]
  },
]);

root.render(<RouterProvider router={appRounter}/>)
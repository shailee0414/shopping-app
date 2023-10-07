import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "./redux/product/action";
import fetchApi from "./api/api";

function App() {
  const data = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApi({ url: "photos", method: "GET", query: "dog" })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
    console.log("@@@@DATA", data);
  }, []);

  return (
    <div>
      <h1>App First </h1>
    </div>
  );
}

export default App;

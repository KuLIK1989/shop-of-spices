import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Skeleton from "../components/SkeletonReact";
import Card from "../components/Card";
import axios from "axios";

function Home() {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  console.log(items);
  useEffect(() => {
    axios
      .get("https://657c576c853beeefdb993d3c.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <section className="cards">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <Card key={obj.id} {...obj} />)}
      </section>
    </>
  );
}
export default Home;

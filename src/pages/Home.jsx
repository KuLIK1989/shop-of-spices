import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Skeleton from "../components/SkeletonReact";
import Card from "../components/Card";

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://657c576c853beeefdb993d3c.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <section className="cards">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((props) => <Card key={props.id} props={props} />)}
      </section>
    </>
  );
}
export default Home;

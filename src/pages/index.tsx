import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";

// compoentns
import { Card } from "../components/card";

const Home: NextPage = () => {
  const [data, setData] = useState<any>();
  const fetch = async () => {
    const data = await axios.get(
      "https://test-365825.cdn.newt.so/v1/newt-719380/article",
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );
    setData(data?.data.items);
  };
  useEffect(() => {
    fetch();
  }, []);
  console.log("test");
  return (
    <>
      <h1>Newtのサンプルです</h1>
      {data?.map((item: any) => (
        <Card title={item.title} thumbnail={item.thumbnail.src} key={item.id} />
      ))}
    </>
  );
};

export default Home;

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";

// compoentns
import { Card } from "../components/card";

const Home: NextPage = () => {
  const [data, setData] = useState<any>();
  const fetch = async () => {
    const data = await axios.get(
      "https://test-365825.cdn.newt.so/v1/ts-827418/post",
      {
        headers: {
          Authorization: `Bearer B5XFdvwiA3E5qOrpMHkLzs811_T8n0ap2GXhSqYhGe8`,
        },
      }
    );
    setData(data?.data.items);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <h1>Newtのサンプルです</h1>
      {data?.map((item: any) => (
        <Card
          title={item.title}
          thumbnail={item.thumbnail.src}
          key={item._id}
        />
      ))}
    </>
  );
};

export default Home;

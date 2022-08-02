import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";

// hook
import { useRouter } from "next/router";
import { useAsync } from "react-use";

// api
import { getArticle } from "../../api/Article";

// component
import { Card } from "../../components/card";

const Category: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<any>();

  useAsync(async () => {
    if (typeof router.query.type === "string") {
      const data = await getArticle(router.query.type);
      setData(data);
    }
  }, [router.query.type]);

  return (
    <CategoryStyle>
      <h1>Newtのサンプルです</h1>
      <h2>カテゴリーページ：{router.query.type}</h2>
      <div className="p-category__contents">
        {data?.map((item: any) => (
          <Card
            title={item.title}
            category={item.category}
            thumbnail={item.thumbnail.src}
            key={item._id}
          />
        ))}
      </div>
    </CategoryStyle>
  );
};

export default Category;

const CategoryStyle = styled.div`
  .p-category__contents {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
`;
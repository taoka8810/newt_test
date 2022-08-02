import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";

// hook
import { useAsync } from "react-use";
import { useRouter } from "next/router";

// compoentn
import { Card } from "../components/card";

// api
import { getAllArticle } from "../api/Article";

// interface
import { ArticleCategoryType } from "../interfaces";

const Home: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<any>();

  // 記事データ全件取得
  useAsync(async () => {
    const data = await getAllArticle();
    setData(data);
  });

  const clickCategoryButton = (category: ArticleCategoryType) => {
    router.push({
      pathname: "/category",
      query: { type: category },
    });
  };

  return (
    <HomeStyle>
      <h1>Newtのサンプルです</h1>
      <h2>一覧ページ</h2>
      <div className="p-home__category-button-wrapper">
        <button
          className="p-home__category-button"
          onClick={() => clickCategoryButton("engineer")}
        >
          エンジニア
        </button>
        <button
          className="p-home__category-button"
          onClick={() => clickCategoryButton("designer")}
        >
          デザイナー
        </button>
        <button
          className="p-home__category-button"
          onClick={() => clickCategoryButton("manager")}
        >
          PM
        </button>
      </div>
      <div className="p-home__contents">
        {data?.map((item: any) => (
          <Card
            title={item.title}
            category={item.category}
            thumbnail={item.thumbnail.src}
            key={item._id}
          />
        ))}
      </div>
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.div`
  .p-home__contents {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .p-home__category-button-wrapper {
    margin-bottom: 40px;
  }
  .p-home__category-button {
    height: 30px;
    width: 100px;
    margin-right: 10px;
  }
`;

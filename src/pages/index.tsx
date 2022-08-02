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
  console.log(data);
  return (
    <HomeStyle>
      <h1>Newtのサンプルです</h1>
      <a href="https://app.newt.so/test-365825/app/ts-827418">
        管理画面はこちら
      </a>
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
      <details className="p-home__tag">
        <summary>タグ</summary>
        <p>ここにタグ一覧を表示する</p>
      </details>
      <details className="p-home__month">
        <summary>月別</summary>
        <p>月別の記事数を表示する</p>
      </details>
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
  .p-home__tag,
  .p-home__month {
    margin: 30px 0;
    padding: 15px;
    border: 1px solid black;
  }
`;

import { NextPage } from "next";
import styled from "styled-components";

// component
import { Card } from "../../components/card";

// hook
import { useState } from "react";
import { useAsync } from "react-use";
import { useRouter } from "next/router";

// api
import { getTagArticle } from "../../api/Article";

const Tag: NextPage = () => {
  const router = useRouter();
  const [article, setArticle] = useState<any>();

  useAsync(async () => {
    if (typeof router.query.type === "string") {
      const data = await getTagArticle(router.query.type);
      setArticle(data);
    }
  }, [router.query.type]);

  return (
    <TagStyle>
      <h1>Newtのサンプルページです</h1>
      <h2>タグページ：{router.query.type}</h2>
      <div className="p-tag__contents">
        {article?.map((item: any) => (
          <Card
            title={item.title}
            category={item.category}
            thumbnail={item.thumbnail.src}
            key={item._id}
          />
        ))}
      </div>
    </TagStyle>
  );
};

export default Tag;

const TagStyle = styled.div`
  .p-tag__contents {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

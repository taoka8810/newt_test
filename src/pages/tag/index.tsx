import { NextPage } from "next";
import styled from "styled-components";

const Tag: NextPage = () => {
  return (
    <TagStyle>
      <h1>Newtのサンプルページです</h1>
      <h2>タグページ</h2>
    </TagStyle>
  );
};

export default Tag;

const TagStyle = styled.div``;

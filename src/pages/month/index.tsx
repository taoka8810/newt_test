import { NextPage } from "next";
import styled from "styled-components";

const Month: NextPage = () => {
  return (
    <MonthStyle>
      <h1>Newtのサンプルページです</h1>
      <h2>月別ページ</h2>
    </MonthStyle>
  );
};

export default Month;

const MonthStyle = styled.div``;

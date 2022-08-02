import React, { useEffect, useState } from "react";
import styled from "styled-components";

//interface
import { ArticleCategoryType } from "../interfaces";

type CardProps = {
  title: string;
  thumbnail: string;
  category: ArticleCategoryType;
};

export const Card: React.FC<CardProps> = (props) => {
  const [categoryName, setCategoryName] = useState("");
  useEffect(() => {
    switch (props.category) {
      case "engineer":
        setCategoryName("エンジニア");
        break;
      case "designer":
        setCategoryName("デザイナー");
        break;
      case "manager":
        setCategoryName("PM");
    }
  }, []);
  return (
    <CardStyle>
      <div className="c-card">
        <div className="c-card__thumbnail">
          <img src={props.thumbnail} alt="" />
        </div>
        <div className="c-card__category">{categoryName}</div>
        <div className="c-card__title">{props.title}</div>
      </div>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  .c-card {
    border: 1px solid black;
    width: 250px;
    height: 200px;
  }
  .c-card__thumbnail {
    width: 100%;
    height: 75%;
  }
  .c-card__thumbnail img {
    width: 100%;
    height: 100%;
  }
  .c-card__title {
    font-size: 16px;
  }
  .c-card__category {
    font-size: 11px;
    color: #333;
  }
`;

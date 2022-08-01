import React from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  thumbnail: string;
};

export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="c-card">
      <div className="c-card__thumbnail">
        <Image src={props.thumbnail} alt="" width="200" height="150" />
      </div>
      <div className="c-card__title">{props.title}</div>
    </div>
  );
};

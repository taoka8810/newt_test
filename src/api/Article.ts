import axios from "axios";
import { getTag } from "./Tag";

export const getAllArticle = async () => {
  const res = await axios.get(
    "https://test-365825.cdn.newt.so/v1/ts-827418/article",
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );
  return res.data.items;
};

export const getCategoryArticle = async (category: string) => {
  const res = await axios.get(
    `https://test-365825.cdn.newt.so/v1/ts-827418/article?category=${category}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );
  return res.data.items;
};

export const getTagArticle = async (tag: string) => {
  let data: any;
  await getTag(tag).then(async (value) => {
    const res = await axios.get(
      `https://test-365825.cdn.newt.so/v1/ts-827418/article?tag=${value._id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }
    );
    data = res;
  });
  return data.data.items;
};

import axios from "axios";

export const getAllArticle = async () => {
  const data = await axios.get(
    "https://test-365825.cdn.newt.so/v1/ts-827418/post",
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );
  return data.data.items;
};

export const getArticle = async (category: string) => {
  const data = await axios.get(
    `https://test-365825.cdn.newt.so/v1/ts-827418/post?category=${category}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );
  return data.data.items;
};

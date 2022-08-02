import axios from "axios";

export const getAllTag = async () => {
  const res = await axios.get(
    "https://test-365825.cdn.newt.so/v1/ts-827418/tag",
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );
  return res.data.items;
};

export const getTag = async (slug: string) => {
  const res = await axios.get(
    `https://test-365825.cdn.newt.so/v1/ts-827418/tag?slug=${slug}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );
  return res.data.items[0];
};

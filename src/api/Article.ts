import axios from "axios";

export const getAllArticle = async () => {
  const data = await axios.get(
    "https://test-365825.cdn.newt.so/v1/ts-827418/post",
    {
      headers: {
        Authorization: `Bearer B5XFdvwiA3E5qOrpMHkLzs811_T8n0ap2GXhSqYhGe8`,
      },
    }
  );
  return data.data.items;
};

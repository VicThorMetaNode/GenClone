import axios from "axios";

//baseUrl won't be use here but in all other files
export const baseurl = "https://instagram130.p.rapidapi.com/";

//fetching from api
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "instagram130.p.rapidapi.com",
      "X-RapidAPI-Key": "49848b005amshe8bca68c28066e4p15202fjsn8daf06491b00",
    },
  });
  return data;
};

// const axios = require("axios");

// const BASE_URL = "https://youtube-v31.p.rapidapi.com";

// const options = {
//   params: {
//     part: "snippet",
//     maxResults: "50",
//   },
//   headers: {
//     "X-RapidAPI-Key": "2d28ed5cacmsh27a0959545f46c5p1b89ecjsn70e1cfb6f27d",
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };

// export const fetchFromAPI = async (q) => {
//   options.params.q = q;

//   try {
//     const { data } = await axios.get(`${BASE_URL}/search`, options);
//     console.log(data);

//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const anotherFetchFromAPI = async () => {
//   params: {

//   }
// }

// // fetchFromAPI("lofi")
import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

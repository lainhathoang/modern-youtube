const axios = require("axios");

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    part: "snippet,id",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "2d28ed5cacmsh27a0959545f46c5p1b89ecjsn70e1cfb6f27d",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (q) => {
  options.params.q = q;

  try {
    const response = await axios.get(`${BASE_URL}/search`, options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};


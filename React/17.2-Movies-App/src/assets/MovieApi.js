import axios from "axios";

export default axios.create({
  baseURL: "https://www.omdbapi.com",
});

export const APIKey = "3d88186c";
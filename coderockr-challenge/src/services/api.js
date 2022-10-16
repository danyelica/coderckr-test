import axios from "axios";

export default axios.create({
  baseURL: "https://stormy-shelf-93141.herokuapp.com/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
